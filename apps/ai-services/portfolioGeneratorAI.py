import os
import json
from fpdf import FPDF
from transformers import pipeline

##### AI-powered portfolio creation & skill demonstrations #####

# AI-based content generator for portfolio sections
portfolio_generator = pipeline("text-generation", model="gpt2")

# Generate portfolio sections
def generate_portfolio(name, expertise, projects):
    portfolio_content = portfolio_generator(
        f"Generate a professional portfolio for {name}, an expert in {expertise} with experience in {projects}",
        max_length=500,
        do_sample=True
    )[0]["generated_text"]

    return portfolio_content

# Convert portfolio to PDF
def save_portfolio_as_pdf(name, content):
    pdf = FPDF()
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.add_page()
    pdf.set_font("Arial", size=12)

    pdf.multi_cell(0, 10, content)
    pdf.output(f"{name}_portfolio.pdf")

if __name__ == "__main__":
    name = "John Doe"
    expertise = "Machine Learning & Data Science"
    projects = "AI-powered job matching system, NLP-based chatbot"

    portfolio = generate_portfolio(name, expertise, projects)
    save_portfolio_as_pdf(name, portfolio)

    print(f"Portfolio generated for {name} and saved as PDF.")
