import sys
import json
import joblib
import numpy as np

##### This script loads the AI models and processes the input data. #####

def load_model(model_file):
    try:
        model = joblib.load(f"/apps/ai-services/{model_file}")
        return model
    except FileNotFoundError:
        return None

def run_model(model, input_data):
    if hasattr(model, "predict"):
        features = np.array([list(input_data.values())])
        return {"prediction": model.predict(features)[0]}
    elif callable(model):  
        return {"result": model(input_data)}
    else:
        return {"error": "Invalid AI model"}

if __name__ == "__main__":
    model_file = sys.argv[1]
    input_data = json.loads(sys.argv[2])

    model = load_model(model_file)

    if model:
        output = run_model(model, input_data)
    else:
        output = {"error": "Model file not found"}

    print(json.dumps(output))
