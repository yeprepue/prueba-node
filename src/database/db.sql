-- Código para crear base de datos 
CREATE DATABASE pruebadb;

-- Código para crear la tabla Empleado
CREATE TABLE empleado (
   id INT PRIMARY KEY,
   fecha_ingreso DATE,
   nombre VARCHAR(50),
   salario DECIMAL(10,2)
);

-- Código para crear la tabla Solicitud
CREATE TABLE solicitud (
   id INT PRIMARY KEY,
   codigo VARCHAR(50),
   descripcion VARCHAR(50),
   resumen VARCHAR(50),
   id_empleado INT,
   FOREIGN KEY (id_empleado) REFERENCES empleado(id)
);