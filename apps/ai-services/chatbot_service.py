from fastapi import FastAPI, HTTPException
from transformers import pipeline

app = FastAPI()

# Load OpenAI GPT-based chatbot
chatbot = pipeline("text-generation", model="openai-gpt")

@app.get("/chatbot/")
def chatbot_response(query: str):
    try:
        response = chatbot(query, max_length=100)
        return {"response": response[0]["generated_text"]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5005)