create database educ_four_database;
use educ_four_database;
create table tbl_sexo(
id int not null auto_increment primary key,
nome varchar(30)
);
create table tbl_telefone(
id int not null auto_increment primary key,
numero varchar(45)
);
create table tbl_bairro(
id int not null auto_increment primary key,
nome varchar(55)
);
create table tbl_cidade(
id int not null auto_increment primary key,
nome varchar(55)
);
create table tbl_endereco(
id int not null auto_increment primary key,
cep varchar(45),
logradouro varchar(70),
id_bairro int not null,
id_cidade int not null,
constraint FK_cidade_endereco
foreign key (id_cidade)
references tbl_cidade(id),
constraint FK_bairro_endereco
foreign key (id_bairro)
references tbl_bairro (id)
);
create table tbl_usuario(
id int not null auto_increment primary key,
nome varchar(90),
cnpj varchar(15),
cpf varchar(12),
rg varchar(45),
data_nascimento date,
declaracao_escolaridade varchar(100),
email varchar(90),
id_sexo int not null,
id_endereco int not null,
id_telefone int not null,
constraint FK_sexo_usuario
foreign key (id_sexo)
references tbl_sexo(id),
constraint FK_endereco_usuario
foreign key (id_endereco)
references tbl_endereco(id),
constraint FK_telefone_usuario
foreign key (id_telefone)
references tbl_telefone (id)
);
create table tbl_professor(
id int not null auto_increment primary key,
area_conhecimento varchar(45),
horarios_disponiveis text,
id_usuario int not null,
constraint FK_usuario_professor
foreign key (id_usuario)
references tbl_usuario (id)
);

create table tbl_doador(
id int not null auto_increment primary key,
tipo_doacao varchar(145),
id_usuario int not null,
constraint FK_usuario_doador
foreign key (id_usuario)
references tbl_usuario (id)
);
create table tbl_outros_funcionarios(
id int not null auto_increment primary key,
motivo_inscricao varchar(145),
horarios_disponiveis text,
id_usuario int not null,
constraint FK_usuario_outros_funcionarios
foreign key (id_usuario)
references tbl_usuario (id)
);
create table tbl_aulas(
id int not null auto_increment primary key,
horario_aula datetime,
duracao_aula datetime,
materia varchar(45),
id_professor int not null,
constraint FK_professor_aula
foreign key (id_professor)
references tbl_professor (id)
);
create table tbl_materias(
id int not null auto_increment primary key,
nome varchar(45)
);
insert into tbl_materias(nome) values ('Historia');
select * from tbl_professor;

ALTER TABLE tbl_professor DROP COLUMN area_conhecimento;

ALTER TABLE tbl_professor
ADD CONSTRAINT FK_materias
FOREIGN KEY (id_materias) 
REFERENCES tbl_materias (id);

create table tbl_turmas(
id int not null auto_increment primary key,
quantidade_alunos int
);
create table tbl_aulas_turma(
id int not null auto_increment primary key,
id_aulas int not null,
id_turmas int not null,
constraint FK_aulas
foreign key (id_aulas)
references tbl_aulas(id),
constraint FK_turmas
foreign key (id_turmas)
references tbl_turmas(id)
);
create table tbl_aulas_turma(
id int not null auto_increment primary key,
id_aulas int not null,
id_turmas int not null,
constraint FK_aulas
foreign key (id_aulas)
references tbl_aulas(id),
constraint FK_turmas
foreign key (id_turmas)
references tbl_turmas(id)
);
create table tbl_administrador(
id int not null auto_increment primary key,
nome varchar(45),
email varchar(90),
senha varchar(45)
);
create table tbl_administrador(
id int not null auto_increment primary key,
nome varchar(45),
email varchar(90),
senha varchar(45)
);
create table tbl_noticias(
id int not null auto_increment primary key,
titulo varchar(45),
nome_autor varchar(90),
descricao varchar(100),
capa_noticia varchar(45),
tema varchar(45),
data_noticia varchar(45)

);
create table tbl_dias_aulas(
	id int not null auto_increment primary key,
	dia_aula varchar(45)
);

select * from tbl_professor;
select * from tbl_usuario;
insert into tbl_telefone (numero) values('119662378');
insert into tbl_cidade (nome) values('Osasco');
insert into tbl_bairro (nome) values('Bairro do Limoeiro');
insert into tbl_endereco(cep,logradouro,id_bairro,id_cidade) values('06266230','Rua Governador Sei La oque',1, 1);
insert into tbl_usuario(nome,cnpj,cpf,rg,data_nascimento,declaracao_escolaridade,email,id_sexo,id_endereco,id_telefone) 
values('Salomão','12345','123124123','23892423','1970-09-12','teste','salomao@gmail.com',1,1,1);
insert into tbl_professor(horarios_disponiveis,id_usuario,id_materias) values('Das 9:00 até as 18:00',1,1);

select * from tbl_aulas;
insert into tbl_aulas (id_professor,id_dias_aulas,id_materias,horario_aula) values(2,1,1,'Das 9:00 ás 11:00');
ALTER TABLE tbl_noticias ADD COLUMN corpo_noticia text;
select * from tbl_administrador;
select * from tbl_dias_aulas;
show tables;
ALTER TABLE tbl_aulas DROP COLUMN tempo_aula;