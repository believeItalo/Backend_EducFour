create database educ_four_database;

use educ_four_database;
create table tbl_sexo(
id int not null auto_increment primary key,
nome varchar(30),

unique index (id)
);
create table tbl_telefone(
id int not null auto_increment primary key,
numero varchar(45),

unique index (id)
);

create table tbl_bairro(
id int not null auto_increment primary key,
nome varchar(55),

unique index (id)
);
create table tbl_cidade(
id int not null auto_increment primary key,
nome varchar(55),

unique index (id)
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
references tbl_bairro (id),

unique index (id)
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
references tbl_telefone (id),

unique index (id)
);
create table tbl_doador(
id int not null auto_increment primary key,
tipo_doacao varchar(145),
id_usuario int not null,
constraint FK_usuario_doador
foreign key (id_usuario)
references tbl_usuario (id),

unique index (id)
);
create table tbl_outros_funcionarios(
id int not null auto_increment primary key,
motivo_inscricao varchar(145),
horarios_disponiveis text,
id_usuario int not null,
constraint FK_usuario_outros_funcionarios
foreign key (id_usuario)
references tbl_usuario (id),

unique index (id)
);

create table tbl_materias(
id int not null auto_increment primary key,
nome varchar(45),

unique index (id)
);


create table tbl_professor(
id int not null auto_increment primary key,
horarios_disponiveis text,
id_usuario int not null,
id_materias int not null,
constraint FK_usuario_professor
foreign key (id_usuario)
references tbl_usuario (id),

constraint FK_materia_professor
foreign key (id_materias)
references tbl_materias (id),

unique index (id)
);

create table tbl_aulas(
id int not null auto_increment primary key,
comeco_aula varchar(45),
termino_aula varchar(45),
id_materia int,
id_professor int not null,
constraint FK_professor_aula
foreign key (id_professor)
references tbl_professor (id),
constraint FK_materia_aula
foreign key (id_materia)
references tbl_materias (id),


unique index (id)
);


create table tbl_turmas(
id int not null auto_increment primary key,
quantidade_alunos int,

unique index (id)
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
references tbl_turmas(id),

unique index (id)
);
create table tbl_administrador(
id int not null auto_increment primary key,
nome varchar(45),
email varchar(90),
senha varchar(45),

unique index (id)
);
create table tbl_noticias(
id int not null auto_increment primary key,
titulo varchar(45),
nome_autor varchar(90),
descricao varchar(100),
capa_noticia varchar(45),
tema varchar(45),
data_noticia varchar(45),
corpo_noticia text,

unique index (id)

);



create table tbl_dias_aulas(
	id int not null auto_increment primary key,
	dia_aula varchar(45),

unique index (id)
);

##POPULANDO AS TABELAS


##SEXO
insert into tbl_sexo(nome) values('Masculino');
insert into tbl_sexo(nome) values('Feminino');
##SEXO
#TELEFONE
insert into tbl_telefone(numero) values('1196748343');
insert into tbl_telefone(numero) values('1199859490');
insert into tbl_telefone(numero) values('1113489349');
insert into tbl_telefone(numero) values('1199387489');
#TELEFONE
##BAIRROS
insert into tbl_bairro(nome)values('Jd Bonança');
insert into tbl_bairro(nome)values('Jd Piratininga');
insert into tbl_bairro(nome)values('Helena Maria');
insert into tbl_bairro(nome)values('Centro');
##BAIRROS
##CIDADES
insert into tbl_cidade(nome) values ('Osasco');
insert into tbl_cidade(nome) values ('Jandira');
insert into tbl_cidade(nome) values ('Barueri');
##CIDADES
##ENDERECO
insert into tbl_endereco(cep,logradouro,id_bairro,id_cidade)values('06266230','R Abel Ferreira da Silva 58', 1,1);
insert into tbl_endereco(cep,logradouro,id_bairro,id_cidade)values('06266230','R Marcos Rocha 2', 2,1);
insert into tbl_endereco(cep,logradouro,id_bairro,id_cidade)values('06266230','R Xerife Gustavo Gómez 58', 3,1);
##ENDERECO
##USUARIOS
insert into tbl_usuario
(nome,cnpj,cpf,rg,data_nascimento,declaracao_escolaridade,email,id_sexo,id_endereco,id_telefone)
values('Maria De Lourdes','12345678910','5523743843','129302032','1970-09-13','declaração escolaridade','mariadelourdes@gmail.com',2,1,1);
##USUARIOS
##MATERIAS
insert into tbl_materias(nome)values('Língua Portuguesa');
insert into tbl_materias(nome)values('Língua Inglesa');
insert into tbl_materias(nome)values('Sociologia');
##MATERIAS
##PROFESSOR
insert into tbl_professor(horarios_disponiveis,id_usuario,id_materias)values('Das 900 as 1400',1,1);
##PROFESSOR
##AULAS
insert into tbl_aulas(comeco_aula,termino_aula,id_materia,id_professor)values('1000','1200',1,1);
##AULAS
insert into tbl_administrador(nome,email,senha)values('Testador Da Silva','testador@gmail.com.br','teste12345678');


insert into tbl_noticias(titulo,nome_autor,descricao,capa_noticia,tema,data_noticia,corpo_noticia) 
values(
'Isso é um teste', 'Testador da Silva', 'É um teste, quer saber mais oque ','nao tem','teste','01062023',
'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type 
specimen book. It has survived not only five centuries, but also the leap into 
electronic typesetting, remaining essentially unchanged. It was popularised in 
the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.');

SELECT 
  tbl_aulas.comeco_aula, 
  tbl_aulas.termino_aula, 
  tbl_materias.nome AS nome_materia,
  tbl_usuario.nome as nome_professor
FROM tbl_aulas
INNER JOIN tbl_materias ON tbl_materias.id = tbl_aulas.id_materia
INNER JOIN tbl_professor ON tbl_professor.id = tbl_aulas.id_professor
INNER JOIN tbl_usuario ON tbl_usuario.id = tbl_professor.id_usuario;


show tables;