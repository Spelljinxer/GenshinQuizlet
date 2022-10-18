# GenshinQuizlet

## What is this?
Current WIP random self-project (probably will never be completed)

## Developers
[Spelljinxer](https://github.com/Spelljinxer) Front-End <br>
[Sckaeth](https://github.com/Sckaeth) Back-End

## Installation
Install the virtualenv package if it is not already installed.<br/>
```console
$pip install virtualenv
```

Create a virtual environment in the desired folder (presumably close to the application's folder).<br/>
```console
$virtualenv venv
```

Activate the virtual environment.<br/>
```console
$source venv/Scripts/activate
```

Install the requirements onto the virtual environment. (must be in the same directory as requirements.txt)<br/>
```console
$pip install -r requirements.txt
```

To run the application you need to be in the same directory as genshin_quizlet.py. The --host parameter allows you to run the application on your local network for testing on mobile devices.<br/>
```console
$flask run
$flask run --host=0.0.0.0
```

