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
area_conhecimento varchar(45),
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
select * from tbl_usuario;

create table tbl_aulas(
id int not null auto_increment primary key,
horario_aula datetime,
duracao_aula datetime,
materia varchar(45),
id_professor int not null,
constraint FK_professor_aula
foreign key (id_professor)
references tbl_professor (id),

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

alter table tbl_noticias
add column corpo_noticia text not null;  


create table tbl_dias_aulas(
	id int not null auto_increment primary key,
	dia_aula varchar(45),

unique index (id)
);
ssss
#####################

select * from tbl_noticias;

insert into tbl_administrador(nome,email,senha)values('Testador Da Silva','testador@gmail.com.br','teste12345678');


insert into tbl_noticias(titulo,nome_autor,descricao,capa_noticia,tema,data_noticia,corpo_noticia) 
values(
'Isso é um teste', 'Testador da Silva', 'É um teste, quer saber mais oque ?','nao tem','teste','01/06/2023',
'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type 
specimen book. It has survived not only five centuries, but also the leap into 
electronic typesetting, remaining essentially unchanged. It was popularised in 
the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.');

select * from tbl_aulas;


show tables;
