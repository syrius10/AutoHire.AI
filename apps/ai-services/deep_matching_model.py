import torch
import torch.nn as nn
from transformers import BertTokenizer, BertModel
import pandas as pd
from flask import Flask, request, jsonify

app = Flask(__name__)
tokenizer = BertTokenizer.from_pretrained("bert-base_uncased")
bert_model = BertModel.from_pretrained("bert-base-uncased")

class JobMatchingModel(nn.Module):
    def __init__(self):
        super(JobMatchingModel, self).__init__()
        self.bert = bert_model
        self.fc = nn.Linear(768, 1)

    def forward(self, job_desc, resume):
        job_tokens = tokenizer(job_desc, return_tensors="pt", padding=True, truncation=True)
        resume_tokens = tokenizer(resume, return_tensors="pt", padding=True, truncation=True)

        job_embedding = self.bert(**job_tokens).last_hidden_state[:, 0, :]
        resume_embedding = self.bert(**resume_tokens).last_hidden_state[:, 0, :]

        similarity_score = torch.cosine_similarity(job_embedding, resume_embedding)
        return similarity_score.item()
    
model = JobMatchingModel()

@app.route("/match", methods=["POST"])
def match_candidate():
    data = request.json
    job_desc = data.get("job_description", "")
    resume = data.get("resume", "")

    score = model(job_desc, resume)
    return jsonify({"match_score": round(score * 100, 2)})  # Return as percentage

if __name__ == "__main__":
    app.run(port=5014, debug=True)