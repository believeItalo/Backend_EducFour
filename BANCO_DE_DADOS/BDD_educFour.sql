create database educ_four_database;
use educ_four_database;
create table tbl_sexo(
id int not null auto_increment primary key,
nome varchar(30) not null,
unique index (id)
);
create table tbl_telefone(
id int not null auto_increment primary key,
numero varchar(45) not null,
unique index (id)
);
create table tbl_bairro(
id int not null auto_increment primary key,
nome varchar(55) not null,
unique index (id)
);
create table tbl_cidade(
id int not null auto_increment primary key,
nome varchar(55) not null,
unique index (id)
);
create table tbl_endereco(
id int not null auto_increment primary key,
cep varchar(45)not null,
logradouro varchar(70)not null,
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
nome  varchar(90) not null,
cnpj varchar(15)not null,
cpf varchar(12)not null,
rg varchar(45)not null,
data_nascimento date not null,
declaracao_escolaridade varchar(100)not null,
email varchar(90)not null,
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
create table tbl_professor(
id int not null auto_increment primary key,
area_conhecimento varchar(45)not null,
horarios_disponiveis text not null,
id_usuario int not null,
constraint FK_usuario_professor
foreign key (id_usuario)
references tbl_usuario (id),
unique index (id)
);
create table tbl_doador(
id int not null auto_increment primary key,
tipo_doacao varchar(145) not null,
id_usuario int not null,
constraint FK_usuario_doador
foreign key (id_usuario)
references tbl_usuario (id),
unique index (id)
);
create table tbl_outros_funcionarios(
id int not null auto_increment primary key,
motivo_inscricao varchar(145) not null,
horarios_disponiveis text not null,
id_usuario int not null,
constraint FK_usuario_outros_funcionarios
foreign key (id_usuario)
references tbl_usuario (id),
unique index (id)
);
create table tbl_aulas(
id int not null auto_increment primary key,
data_aula date not null,
data_util date not null,
horario_aula datetime not null,
duracao_aula datetime not null,
materia varchar(45) not null,
id_professor int not null,
constraint FK_professor_aula
foreign key (id_professor)
references tbl_professor (id),
unique index (id)
);
create table tbl_turmas(
id int not null auto_increment primary key,
quantidade_alunos int not null,
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
nome varchar(45) not null,
email varchar(90) not null,
senha varchar(45) not null,
unique index (id)
);
select * from tbl_administrador;
create table tbl_noticias(
id int not null auto_increment primary key,
titulo varchar(45) not null,
nome_autor varchar(90) not null,
descricao varchar(100) not null,
capa_noticia varchar(45) not null,
tema varchar(45) not null,
data_noticia varchar(45) not null,
unique index (id)

);
show tables;
