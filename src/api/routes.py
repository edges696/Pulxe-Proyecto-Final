"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""


from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Pulxes, Categorias, Subcategorias
from api.utils import generate_sitemap, APIException

import os
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.admin import setup_admin
from flask_jwt_extended import create_access_token
#from models import Person

#import JWT for tokenization
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token
from flask_jwt_extended import JWTManager


api = Blueprint('api', __name__)
# generate sitemap with all your endpoints
@api.route('/')
def sitemap():
    return generate_sitemap(api)

#-----metodos post-------------------------------------

#obtener usuario de base de datos y crea token
@api.route('/login', methods=['POST']) 
def login():
    mail = request.json.get("mail", None)
    password = request.json.get("password", None)

    print(mail)
    print(password)

    user = User.query.filter_by(mail=mail, password=password).first()
    # valida si estan vacios los ingresos
    if user is None:
       return jsonify({"msg": "Bad mail or password"}), 401
    
    # crear token login
    access_token = create_access_token(identity=mail)
    return jsonify({"token": access_token})

#crea usuario----------------------------------------
@api.route('/user', methods=['POST'])
def register_user():
    name = request.json.get("name", None)
    numero = request.json.get("numero", None)
    mail = request.json.get("mail", None)
    password = request.json.get("password", None)
    

    # valida si estan vacios los ingresos
    if name is None:
        return jsonify({"msg": "No Name was provided"}), 400
    if mail is None:
        return jsonify({"msg": "No email was provided"}), 400
    if numero is None:
        return jsonify({"msg": "No numero was provided"}), 400
    if password is None:
        return jsonify({"msg": "No password was provided"}), 400
    
    
    # busca usuario en BBDD
    user = User.query.filter_by(password=password,mail=mail).first()
     # the user was not found on the database
    if user:
        return jsonify({"msg": "User already exists"}), 401
    else:
        # crea usuario nuevo
        # crea registro nuevo en BBDD de 
        user = User(name=name, mail=mail,numero=numero, password=password)
        db.session.add(user)
        db.session.commit()
        return jsonify({"msg": "User created successfully"}), 200

#crea pulxe ----------------------------------------------------------
@api.route('/pulxes', methods=['POST'])
@jwt_required()
def pulxeCreate():
    nombre = request.json.get("nombre", None)
    pulxe = request.json.get("pulxe", None)
    categoria = request.json.get("categoria", None)
    canton = request.json.get("canton", None)
    distrito = request.json.get("distrito", None)
    provincia = request.json.get("provincia", None)
    descripcion = request.json.get("descripcion", None)
    experiencia = request.json.get("experiencia", None)
    numero = request.json.get("numero", None)
    calificacionPromedio = request.json.get("calificacionPromedio", None)
    calificacionCantidad = request.json.get("calificacionCantidad", None)
    calificacionTotal = request.json.get("calificacionTotal", None)
    password = request.json.get("password", None)

    # valida si estan vacios los ingresos
    if nombre is None:
        return jsonify({"msg": "No Name was provided"}), 400
    if pulxe is None:
        return jsonify({"msg": "No pulxe was provided"}), 400
    if categoria is None:
        return jsonify({"msg": "No categoria was provided"}), 400
    if canton is None:
        return jsonify({"msg": "No canton was provided"}), 400
    if distrito is None:
        return jsonify({"msg": "No distrito was provided"}), 400
    if provincia is None:
        return jsonify({"msg": "No provincia was provided"}), 400
    if descripcion is None:
        return jsonify({"msg": "No descripcion was provided"}), 400
    if experiencia is None:
        return jsonify({"msg": "No añosEXP was provided"}), 400
    if numero is None:
        return jsonify({"msg": "No numero was provided"}), 400
    if calificacionPromedio is None:
        return jsonify({"msg": "No calificacionPromedio was provided"}), 400
    if calificacionCantidad is None:
        return jsonify({"msg": "No calificacionCantidad was provided"}), 400
    if calificacionTotal is None:
        return jsonify({"msg": "No calificacionTotal was provided"}), 400
    if password is None:
        return jsonify({"msg": "No password was provided"}), 400
    
    # busca pulxe en BBDD
    pulxes = Pulxes.query.filter_by(password=password,nombre=nombre,numero=numero).first()
     # the pulxe was not found on the database
    if pulxes:
        return jsonify({"msg": "Pulse already exists"}), 401
    else:
        # crea pulxe nuevo
        # crea registro nuevo en BBDD de 
        pulxes = Pulxes(nombre=nombre, pulxe=pulxe, categoria=categoria, canton=canton, distrito=distrito, provincia=provincia, descripcion=descripcion,experiencia=experiencia,numero=numero,calificacionPromedio=calificacionPromedio,calificacionCantidad=calificacionCantidad,calificacionTotal=calificacionTotal,password=password)
        db.session.add(pulxes)
        db.session.commit()
        return jsonify({"msg": "User created successfully"}), 200


#------metodos  GET--------------------------------------------------------

@api.route('/user', methods = ['GET'])
def users():
    if request.method == 'GET':
        records = User.query.all()
        return jsonify([User.serialize(record) for record in records]) #LLAMAR A TODOS
    else:
        return jsonify({"msg": "no autorizado"})

#--------Pulxes---------------------------------------------------------------
@api.route('/pulxes', methods = ['GET'])
def pulxes():
    if request.method == 'GET':
        records = Pulxes.query.all()
        return jsonify([Pulxes.serialize(record) for record in records])
    else:
        return jsonify({"msg": "no autorizado"})

#-------------------------------------------------------------------------------
@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200
