# main.py

from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson.json_util import dumps, loads

app = Flask(__name__)

# Stringa di connessione al DB
app.config["MONGO_URI"] = "mongodb+srv://M-M:ABC@cluster0.yygj0.mongodb.net/SDG15?retryWrites=true&w=majority"

mongo = PyMongo(app)
# Per rispondere alle chiamate cross origin
CORS(app)

# Annotation that allows the function to be hit at the specific URL.
@app.route("/")
# Generic Python functino that returns "Hello world!"
def index():
    return "Hello world!"

# Questa route effettua una find() su tutto il DB (si limita ai primi 100 risultati)
@app.route('/forest_area', methods=['GET'])
def get_forest_area():
    forest_area = mongo.db.ForestArea
    list_cur = list(forest_area.find({},{"_id":0}))
    return dumps(list_cur)

@app.route('/Red_List_Index', methods=['GET'])
def get_Red_List_Index():
    Red_List_Index = mongo.db.Red_List_Index
    list_cur = list(Red_List_Index.find({},{"_id":0}))
    return dumps(list_cur)

@app.route('/Terrestrial_area', methods=['GET'])
def get_Terrestrial_area():
    Terrestrial_area = mongo.db.Terrestrial_Protected_Areas
    list_cur = list(Terrestrial_area.find({},{"_id":0}))
    return dumps(list_cur)

@app.route('/alien_species', methods=['GET'])
def get_alien_species():
    alien_species = mongo.db.AlienSpecies
    list_cur = list(alien_species.find({},{"_id":0}))
    return dumps(list_cur)

@app.route('/Biodiversity', methods=['GET'])
def get_Biodiversity():
    Biodiversity = mongo.db.Biodiversity
    list_cur = list(Biodiversity.find({},{"_id":0}))
    return dumps(list_cur)


# Checks to see if the name of the package is the run as the main package.
if __name__ == "__main__":
    # Runs the Flask application only if the main.py file is being run.
    app.run()