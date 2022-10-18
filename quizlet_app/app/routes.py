from flask import render_template
from app import app

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')
