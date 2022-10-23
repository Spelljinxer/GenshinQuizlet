from flask import render_template
from app import app, db
from app.models import Topic, Image, Question, Answer, Game
from datetime import datetime
import json
import random

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/quiz')
def quiz():
    # Number of questions (hard-coded at 4 for testing)
    num_q = 4

    # Gets a list of every topic.
    topics = Topic.query.all()

    # Randomly samples n questions from questions in a certain topic.
    questions = []
    for topic in topics:
        question = random.sample(Question.query.filter_by(topic=topic.id).all(), min(int(num_q/len(topics)), 1))
        questions.extend(question)

    # Shuffles the list of questions.
    random.shuffle(questions)
    # Gets a list of images.
    images = []
    for question in questions:
        image_name = Image.query.filter_by(id=question.image).first().name
        images.append(image_name)

    # Create a list of topics in ascending order of ids.
    for index, topic in enumerate(topics):
        topics[index] = topic.name

    return render_template('quiz.html', questions=questions, images=images, topics=topics)
