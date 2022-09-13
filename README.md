# GenshinQuizlet
## Installation
Install the virtualenv package if it is not already installed.<br/>
```
pip install virtualenv
```

Create a virtual environment in the desired folder (presumably close to the application's folder).<br/>
```
virtualenv venv
```

Activate the virtual environment.<br/>
```
source venv/Scripts/activate
```

Install the requirements onto the virtual environment. (must be in the same directory as requirements.txt)<br/>
```
pip install -r requirements.txt
```

To run the application you need to be in the same directory as genshin_quizlet.py. The --host parameter allows you to run the application on your local network for testing on mobile devices.<br/>
```
flask run
flask run --host=0.0.0.0
```

