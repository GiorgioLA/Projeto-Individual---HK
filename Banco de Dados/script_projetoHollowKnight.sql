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

CREATE TABLE jogo (
idSecao int primary key auto_increment,
segundos decimal(5,2),
dano_recebido decimal(1,0),
fkUsuario int,
foreign key (fkUsuario) references Usuario(idUsuario),
dtPartida datetime
);

SELECT now();

/*
INSERT INTO jogo VALUES
	(default, ${valor1}, ${valor2}, ${valor3}, now());
*/

INSERT INTO jogo VALUES
	(default, 100.2, 8, 1, now());
SELECT * FROM jogo;
DELETE FROM jogo WHERE idSecao > 4;
ALTER TABLE jogo ADD COLUMN dtPartida datetime;
    
SHOW TABLES;

SELECT * FROM projetoindividualhk.usuario;
SELECT * FROM projetoindividualhk.inventario;		
SELECT * FROM projetoindividualhk.habilidade;

SELECT idUsuario FROM usuario WHERE usuario = 'teste27' AND senha = 'teste27';

GRANT ALL PRIVILEGES ON projetoindividualhk.* TO 'bd_projetoIndividual'@'localhost';

SELECT * FROM inventario JOIN usuario ON idUsuario = fkUsuario;

UPDATE inventario SET nivel = 1 WHERE fkUsuario = 1 AND fkHabilidade = 1;
UPDATE inventario SET nivel = 1 WHERE fkUsuario = 2 AND fkHabilidade = 1;

-- SELECTS PARA DASH >:D

SELECT round(sum(nivel) * 6.666, 0) FROM inventario JOIN habilidade ON fkHabilidade = idHabilidade;
CREATE VIEW inventarioUnico AS SELECT round(sum(nivel) * 6.666, 0) as porcentagem, fkUsuario FROM inventario JOIN habilidade ON fkHabilidade = idHabilidade GROUP BY fkUsuario;

SELECT porcentagem FROM inventarioUnico WHERE fkUsuario = 1;

SELECT segundos, dano_recebido, fkUsuario FROM jogo ORDER BY segundos DESC, dano_recebido;
CREATE VIEW jogo_solo AS SELECT segundos, dano_recebido, fkUsuario FROM jogo ORDER BY segundos DESC, dano_recebido;
SELECT segundos, dano_recebido FROM jogo_solo WHERE fkUsuario = 20;
    
SELECT fkHabilidade, nivel FROM inventario ORDER BY fkHabilidade, nivel DESC;
SELECT count(nivel) as cnt FROM inventario WHERE nivel > 0 GROUP BY fkHabilidade;
SELECT count(distinct usuario) as total FROM usuario JOIN inventario ON idUsuario = fkUsuario;
SELECT * FROM usuario;

SELECT usuario, segundos, dano_recebido FROM jogo JOIN usuario ON idUsuario = fkUsuario ORDER BY segundos, dano_recebido LIMIT 5;
SELECT usuario, segundos, dano_recebido FROM jogo JOIN usuario ON idUsuario = fkUsuario ORDER BY dano_recebido, segundos LIMIT 5;