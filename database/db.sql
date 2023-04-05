CREATE DATABASE usuariosdb;
USE usuariosdb;
CREATE TABLE datos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR (30) NOT NULL,
    apellido VARCHAR (30) NOT NULL,
    dni INT (10) NOT NULL,
    mail VARCHAR (30) NOT NULL,
    direccion VARCHAR (100) NOT NULL,
    obra_social VARCHAR (30) NOT NULL
);
DESCRIBE datos;