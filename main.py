import flask 
from flask import Flask, render_template
import requests
app = Flask(__name__)

@app.route("/")
def index():
    return  render_template("filtrs.html")

if __name__ == "__main__":
    app.run(debug=True, port=8888)