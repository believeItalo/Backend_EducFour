
create database educ_four_database;
use educ_four_database;
create table tbl_usuario(
id int not null auto_increment primary key,
nome varchar(90) not null,
cnpj varchar(15)not null,
cpf varchar(12)not null,
rg varchar(45)not null,
data_nascimento date not null,
declaracao_escolaridade varchar(100) not null,
email varchar(90) not null,
area_de_atuacao varchar(45 )not null,
horarios_disponiveis text not null,
motivo_inscricao text not null,
cep varchar(45) not null,
logradouro varchar(70) not null,
bairro varchar(45) not null,
cidade varchar(45) not null,
telefone varchar(45) not null,
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
titulo varchar(45) not null,
nome_autor varchar(90) not null,
descricao varchar(100) not null,
capa_noticia varchar(45) not null,
tema varchar(45) not null,
data_noticia varchar(45) not null,
corpo_noticia text,

unique index (id)

);

##USUARIOS
insert into tbl_usuario
(nome,cnpj,cpf,rg,data_nascimento,declaracao_escolaridade,email,area_de_atuacao,motivo_inscricao,horarios_disponiveis,cep,logradouro,bairro,cidade,telefone)
values('Maria De Lourdes','12345678910','5523743843','129302032','1970-09-13','declaração escolaridade','mariadelourdes@gmail.com','Professor','Quero dar aulas de matematica e fisica','das 9:00 hrs até as 14:00 hrs','06266-230','Rua João Romeira Rodrigues 58','Jd Bonança','Osasco','1196543478');

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

select * from tbl_usuario;


show tables;