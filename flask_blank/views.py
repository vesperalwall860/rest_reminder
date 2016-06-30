from flask_blank import app

@app.route('/')
def index():
    return 'Hello World!'