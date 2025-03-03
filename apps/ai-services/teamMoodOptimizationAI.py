import joblib
import numpy as np
from sklearn.ensemble import GradientBoostingClassifier
from transformers import pipeline

##### AI model for optimizing team collaboration based on sentiment analysis. #####
##### Analyzes team sentiment and provides collaboration recommendations. #####
##### Uses sentiment analysis and machine learning to predict team collaboration. #####
##### Sample dataset: [Avg Sentiment Score, Team Engagement, Work Satisfaction -> Collaboration Suggestion #####
##### Collaboration Suggestions: Maintain (1), Improve (0) #####
##### This model processes team communication sentiment, engagement levels, and work satisfaction to suggest collaboration improvements and team adjustments. #####

# Sentiment Analysis Model
sentiment_analyzer = pipeline("sentiment-analysis")

# Sample dataset: [Avg Sentiment Score, Team Engagement, Work Satisfaction] -> Collaboration Suggestion
data = np.array([
    [0.8, 9, 8, 1],  # High engagement, positive sentiment → No changes
    [0.3, 5, 6, 0],  # Low engagement, mixed sentiment → Improve team bonding
    [0.6, 7, 7, 1],  # Medium engagement, stable sentiment → Maintain
    [0.2, 4, 5, 0],  # Negative sentiment, low engagement → Team structure revision
])

X = data[:, :-1]  # Features: Sentiment Score, Engagement Level, Work Satisfaction
y = data[:, -1]   # Target: Team Collaboration Suggestion (1 = Stable, 0 = Needs Improvement)

# Train AI model
model = GradientBoostingClassifier()
model.fit(X, y)

# Save trained model
joblib.dump(model, "team_mood_optimization.pkl")

def analyze_team_mood(feedback_text, engagement, satisfaction):
    """Analyzes team sentiment and provides collaboration recommendations."""
    sentiment_result = sentiment_analyzer(feedback_text)[0]
    sentiment_score = sentiment_result["score"] if sentiment_result["label"] == "POSITIVE" else -sentiment_result["score"]
    
    prediction = model.predict([[sentiment_score, engagement, satisfaction]])[0]
    return "Stable Team Collaboration" if prediction == 1 else "Improve Team Collaboration"

# ✅ Test Case
if __name__ == "__main__":
    print(analyze_team_mood("The team is great and supportive!", 8, 7))  # Expected Output: Collaboration Recommendation
