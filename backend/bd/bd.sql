CREATE DATABASE recetario;
USE recetario;

CREATE TABLE categoria (
	id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150)
);

CREATE TABLE platillo (
	id_platillo INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ingredientes varchar(900),
    instrucciones VARCHAR(900),
    #imagen VARCHAR(250),
    id_categoria INT NOT NULL,
    FOREIGN KEY(id_categoria) REFERENCES categoria(id_categoria)
);

CREATE TABLE ingrediente (
	id_ingrediente INT AUTO_INCREMENT PRIMARY KEY,
    ingrediente VARCHAR(200) NOT NULL,	
    id_platillo INT NOT NULL,
    FOREIGN KEY(id_platillo) REFERENCES platillo(id_platillo)
);

CREATE TABLE instruccion (
	id_instruccion INT AUTO_INCREMENT PRIMARY KEY,
    instrucciones VARCHAR(200) NOT NULL,
    id_platillo INT NOT NULL,
    FOREIGN KEY(id_platillo) REFERENCES platillo(id_platillo)
);

INSERT INTO categoria (nombre) VALUES("Bebidas");
INSERT INTO categoria (nombre) VALUES("Comida mexicana");
INSERT INTO categoria (nombre) VALUES("Comida rápida");
INSERT INTO categoria (nombre) VALUES("Complementos");
INSERT INTO categoria (nombre) VALUES("Platillo principal");
INSERT INTO categoria (nombre) VALUES("Postre");
INSERT INTO categoria (nombre) VALUES("Reposteria");
INSERT INTO categoria (nombre) VALUES("Salsas");
INSERT INTO categoria (nombre) VALUES("Tortillas");
/*
INSERT INTO platillo (nombre, ingredientes, instrucciones, id_categoria)
VALUES (
    "Enchiladas verdes",
    "Tortillas, salsa verde, pollo, crema, queso",
    "Rellena las tortillas con pollo, baña en salsa verde, agrega crema y queso",
    2
);
*/
SELECT * FROM platillo;
SELECT * FROM categoria;
SELECT * FROM ingrediente;
SELECT * FROM instruccion;
SELECT id_platillo, nombre, id_categoria FROM platillo;

/*
drop table instruccion;
drop table ingrediente;
drop table platillo;
drop table categoria;
drop database recetario;