from datetime import datetime
import json
from app import db


class Topic(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True)

class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64))

class Question(db.Model):
    # The first element in the answers list will always be the correct answer.
    id = db.Column(db.Integer, primary_key=True)
    topic = db.Column(db.Integer, db.ForeignKey('topic.id'))
    image = db.Column(db.Integer, db.ForeignKey('image.id'))
    text = db.Column(db.Text, index=True)
    answers = db.Column(db.Text, default=json.dumps(["","","",""]))

class Answer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.Integer, db.ForeignKey('question.id'))
    answer = db.Column(db.Integer)

class Game(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64))
    score = db.Column(db.Integer)
    time = db.Column(db.DateTime, index=True, default=datetime.utcnow)