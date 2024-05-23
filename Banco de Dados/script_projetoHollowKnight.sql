CREATE DATABASE projetoIndividualHk;

USE projetoIndividualHk;

CREATE TABLE usuario (
idUsuario int primary key auto_increment,
usuario varchar(45),
email varchar(45),
senha varchar(45)
);

ALTER TABLE usuario ADD CONSTRAINT unique_usuario unique(usuario);

SELECT * FROM usuario;

CREATE TABLE habilidade (
idHabilidade int primary key auto_increment,
nome varchar(45),
tipo varchar(45),
numNiveis int
);

CREATE TABLE inventario (
idInventario int,
fkUsuario int,
fkHabilidade int,
primary key (idInventario, fkUsuario, fkHabilidade),
foreign key (fkUsuario) references usuario(idUsuario),
foreign key (fkHabilidade) references habilidade(idHabilidade),
nivel int
);

INSERT INTO habilidade VALUES
	(default, 'Espírito Vingativo', 'Feitiço', 2),
	(default, 'Mergulho Desolador', 'Feitiço', 2),
	(default, 'Espectros Uivantes', 'Feitiço', 2),
	(default, 'Manto de Asa de Mariposa', 'Mobilidade', 2),
	(default, 'Garra de Louva-a-Deus', 'Mobilidade', 1),
	(default, 'Coração de Cristal', 'Mobilidade', 1),
	(default, 'Asas do Monarca', 'Mobilidade', 1),
	(default, 'Lágrima de Isma', 'Mobilidade', 1),
	(default, 'Ferrão dos Sonhos', 'Progressão', 3);
    
SHOW TABLES;

SELECT * FROM projetoindividualhk.usuario;

SELECT idUsuario FROM usuario WHERE usuario = 'teste27' AND senha = 'teste27';
SELECT * FROM projetoindividualhk.inventario;

GRANT ALL PRIVILEGES ON projetoindividualhk.* TO 'bd_projetoIndividual'@'localhost';

SELECT * FROM inventario JOIN usuario ON idUsuario = fkUsuario;