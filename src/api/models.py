from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    # Here we define columns for the table person
    # Notice that each column is also a normal Python instance attribute.
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    mail = db.Column(db.String(250), nullable=False)
    password = db.Column(db.String(250), nullable=False)
    numero = db.Column(db.Integer, nullable=False)
    
    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "mail": self.mail,
            "name": self.name,
            "numero": self.numero,
            # do not serialize the password, its a security breach
        }

class Pulxes(db.Model):
    __tablename__ = 'pulxes'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(250), nullable=False)
    pulxe = db.Column(db.String(250), nullable=False)
    categoria = db.Column(db.String(250), nullable=False)
    canton = db.Column(db.String(250), nullable=False)
    distrito = db.Column(db.String(250), nullable=False)
    provincia = db.Column(db.String(250), nullable=False)
    descripcion = db.Column(db.String(300), nullable=False)
    experiencia = db.Column(db.Integer, nullable=False)
    numero = db.Column(db.Integer, nullable=False)
    calificacionPromedio = db.Column(db.Integer, nullable=False)#divicion entre cantidad/to
    calificacionCantidad = db.Column(db.Integer, nullable=False)
    calificacionTotal = db.Column(db.Integer, nullable=False)
    password = db.Column(db.Integer, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "pulxe": self.pulxe,
            "categoria": self.categoria,
            "canton": self.canton,
            "distrito": self.distrito,
            "provincia": self.provincia,
            "descripcion": self.descripcion,
            "experiencia": self.experiencia,
            "numero": self.numero,
            "calificacionPromedio": self.calificacionPromedio,
            "calificacionCantidad": self.calificacionCantidad,
            "calificacionTotal": self.calificacionTotal,
            # do not serialize the password, its a security breach
        }
class Categorias(db.Model):
    __tablename__ = 'categorias'
    id = db.Column(db.Integer, primary_key=True)
    nombre_categoria = db.Column(db.String(250), nullable=False)
    Subcategorias = db.relationship("Subcategorias")

    def serialize(self):
        return {
            "id": self.id,
            "nombre_categoria": self.nombre_categoria,
            # do not serialize the password, its a security breach
        }
class Subcategorias(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    categoria_id = db.Column(db.Integer, db.ForeignKey('categorias.id'))
    nombre = db.Column(db.String(250), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "categoria_id": self.categoria_id,
            "nombre": self.nombre,
        }