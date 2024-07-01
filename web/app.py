from flask import Flask, request, redirect
from flask_cors import CORS
from model import evaluate_model

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def redirect_to_index():
    return redirect("/index.html", code=302)


@app.route("/api/classify", methods=["POST"])
def run_model():
    body = request.json
    print("Input received:")
    print(body)

    # We can extract parts of the body out. What we extract depends on what we need to run the model
    # name = body.get("name") will get the name property from the JSON POST request
    try:
        model_result = evaluate_model(body)
        result = {"poisonous": round(model_result) == 1}
    except Exception as e:
        result = {
            "poisonous": True,
            "error": str(e)
        }


    return result
