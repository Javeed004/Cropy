from flask import Flask, jsonify, request
from flask_cors import CORS  # Import CORS
import joblib
import json
import os

app = Flask(__name__)  # Fixed to use __name__
CORS(app)  # Enable CORS for all routes

# Load the model
model_path = os.path.join(os.path.dirname(__file__), "models/model.pkl")
model = joblib.load(model_path)

@app.route('/services/scr', methods=['POST'])
def predict_crop():
    try:
        # Parse JSON data from request
        data = request.get_json()
        if not data:
            return jsonify({"error": "No input data provided"}), 400

        print("Data received from frontend:", data)  # Debugging line

        # Check if all required fields are present
        required_fields = ["N", "phosphorus", "potassium", "soilpH", "temperature", "humidity", "rainfall"]
        for field in required_fields:
            if field not in data:
                return jsonify({"error": f"Missing input field: {field}"}), 400

        # Prepare data for the model prediction
        features = [
            float(data["N"]),
            float(data["phosphorus"]),
            float(data["potassium"]),
            float(data["soilpH"]),
            float(data["temperature"]),
            float(data["humidity"]),
            float(data["rainfall"]),
        ]
        print("Prepared features for model:", features)  # Debugging line

        # Predict crop
        predicted_crop = model.predict([features])[0]
        print("Predicted crop:", predicted_crop)  # Debugging line

        # Send response back to frontend
        return jsonify({"predicted_crop": predicted_crop}), 200

    except Exception as e:
        print("Error during prediction:", str(e))  # Log the error
        return jsonify({"error": "An error occurred during prediction.", "details": str(e)}), 500

if __name__ == "__main__":  # Fixed the main check
    app.run(debug=True)
