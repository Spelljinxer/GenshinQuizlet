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
    id = db.Column(db.Integer, primary_key=True)
    topic = db.Column(db.Integer, db.ForeignKey('topic.id'))
    image = db.Column(db.Integer, db.ForeignKey('image.id'))
    text = db.Column(db.Text, index=True)
    answers = db.Column(db.Text, default=json.dumps(["","","",""]))

class Game(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64))
    score = db.Column(db.Integer)
    time = db.Column(db.DateTime, index=True, default=datetime.utcnow)