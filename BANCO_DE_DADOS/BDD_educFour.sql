
create database educ_four_database;
use educ_four_database;

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
cep varchar(45) not null,
logradouro varchar(70) not null,
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
nome varchar(90) not null,
cnpj varchar(15) not null,
cpf varchar(12) not null,
rg varchar(45) not null,
data_nascimento date,
declaracao_escolaridade varchar(100),
email varchar(90) not null,
area_de_atuacao varchar(45),
horarios text,
id_endereco int not null,
id_telefone int not null,
constraint FK_endereco_usuario
foreign key (id_endereco)
references tbl_endereco(id),
constraint FK_telefone_usuario
foreign key (id_telefone)
references tbl_telefone (id),

unique index (id)
);
##create table tbl_doador(
##id int not null auto_increment primary key,
##tipo_doacao varchar(145),
##id_usuario int not null,
##constraint FK_usuario_doador
##foreign key (id_usuario)
##references tbl_usuario (id),

##unique index (id)
##);


CREATE TABLE tbl_professor (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(90) NOT NULL,
    cnpj VARCHAR(15) NOT NULL,
    cpf VARCHAR(12) NOT NULL,
    rg VARCHAR(45) NOT NULL,
    data_nascimento DATE,
    declaracao_escolaridade VARCHAR(100) NOT NULL,
    email VARCHAR(90) NOT NULL,
    area_de_atuacao text NOT NULL,
    horarios TEXT NOT NULL,
    id_endereco INT NOT NULL,
    id_telefone INT NOT NULL,
    CONSTRAINT FK_endereco_professor FOREIGN KEY (id_endereco)
        REFERENCES tbl_endereco (id),
    CONSTRAINT FK_telefone_professor FOREIGN KEY (id_telefone)
        REFERENCES tbl_telefone (id),
    UNIQUE INDEX (id)
);

create table tbl_aulas(
id int not null auto_increment primary key,
comeco_aula varchar(45) not null,
termino_aula varchar(45) not null,
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
create table tbl_noticias(
id int not null auto_increment primary key,
titulo text not null,
nome_autor  text  not null,
descricao  text  not null,
capa_noticia text not null,
tema varchar(45) not null,
data_noticia varchar(45) not null,
corpo_noticia text,

unique index (id)

);
##create table tbl_dias_aulas(
	##id int not null auto_increment primary key,
	##dia_aula varchar(45) not null,

###unique index (id)
##);

##POPULANDO AS TABELAS
Select * from tbl_noticias;
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

insert into tbl_professor
(nome,cnpj,cpf,rg,data_nascimento,declaracao_escolaridade,email,id_endereco,id_telefone,area_de_atuacao,horarios)
values('Maria De Lourdes','12345678910','5523743843','129302032','1970-09-13','declaração escolaridade','mariadelourdes@gmail.com',1,1,'Gostaria de ajudar dando Aulas de Matemática e Fisica','das 9hrs até as 5hrs');
insert into tbl_professor
(nome,cnpj,cpf,rg,data_nascimento,declaracao_escolaridade,email,id_endereco,id_telefone,area_de_atuacao,horarios)
values('Ricardo','12345868910','552374123','78202032','1977-02-13','declaração escolaridade','ricardo@gmail.com',2,3,'Gostaria de ajudar dando Aulas de Historia e Geografia','das 9hrs até as 5hrs');
insert into tbl_usuario
(nome,cnpj,cpf,rg,data_nascimento,declaracao_escolaridade,email,id_endereco,id_telefone,area_de_atuacao,horarios)
values('Renan','12345868910','552374123','78202032','1977-02-13','declaração escolaridade','ricardo@gmail.com',2,3,'Gostaria de ajudar trabalhando na limpeza','das 14hrs até as 16hrs');
##USUARIOS
##MATERIAS
##MATERIAS
##PROFESSOR
##PROFESSOR
##AULAS
insert into tbl_aulas(comeco_aula,termino_aula,id_professor)values('10:00','12:00',1);
##AULAS
insert into tbl_administrador(nome,email,senha)values('Testador Da Silva','testador@gmail.com.br','teste12345678');

insert into tbl_noticias(titulo,nome_autor,descricao,capa_noticia,tema,data_noticia,corpo_noticia) 
values(
'Governo da Bahia convoca mais 118 professores para Educação Básica', 'André Dias', 'Profissionais foram aprovados em processos seletivos pelo REDA.','https://s2-g1.glbimg.com/gT4dmQs9wAlhjYXDdijOOuRXWN8=/0x0:1700x1065/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/Z/c/gecF72QhmlkYaUDE4bGQ/design-sem-nome.png','Educação','05/06/2023',
'O Governo da Bahia publicou no Diário Oficial do Estado (DOE) desta sexta-feira (2), a convocação de mais 118 professores aprovados em processos 
seletivos pelo Regime Especial de Direito Administrativo (REDA). Destes, 71 profissionais são para a Educação Básica, 
28 para a Educação Profissional e 19 para Educação Indígena.  
Os aprovados têm dez dias úteis, de 5 a 20 de junho, para comparecer às sedes dos 
Núcleos Regionais de Educação, no interior.
Já os aprovados para Salvador devem se dirigir à sede da Secretaria da Educação do Estado da Bahia (SEC), no Centro Administrativo (CAB),
 das 8h30 às 12h e das 14h às 17h30, na sala 121, no 1º andar.');

insert into tbl_noticias(titulo,nome_autor,descricao,capa_noticia,tema,data_noticia,corpo_noticia) 
values(
'Lula: recursos para educação e saúde são investimento, não gasto', 'André Dias', 'Presidente participou de evento na Universidade Federal do ABC','https://i0.statig.com.br/bancodeimagens/5f/jg/hf/5fjghfo5sxzazfngp9smzc1c1.jpg','Educação / Saude','05/06/2023',
'O presidente Luiz Inácio Lula da Silva defendeu nesta sexta-feira, 2, que os valores repassados a áreas como educação e saúde não
 configuram gasto, mas investimento. Durante evento na Universidade Federal do ABC, em São Paulo, ele disse não haver, em todo o mundo, 
 um país que cresceu e se desenvolveu sem antes investir na educação. “Se a educação é a base de tudo, tomei a decisão de que, no nosso governo, 
 quando se fala em fazer universidade, creche, escola, 
a gente não pode mais utilizar a palavra gasto. A palavra tem que ser investimento”, disse.');

insert into tbl_noticias(titulo,nome_autor,descricao,capa_noticia,tema,data_noticia,corpo_noticia) 
values(
'Raquel Lyra lança Juntos pela Educação com investimentos na ordem de R$ 5,5 bilhões', 'Mirrela Araujo', 'Até 2025, serão adquiridos 500 novos ônibus para integrar a frota escolar, que atende principalmente os estudantes da zona rural do Estado','https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2023/06/02/806x444/1_whatsapp_image_2023_06_02_at_19_25_43__4_-23086765.jpeg','Educação/Economia','05/06/2023',
'A governadora de Pernambuco, Raquel Lyra (PSDB), lançou, nesta sexta-feira (2), o programa Juntos pela Educação. Segundo o Executivo, esse é o maior programa de investimentos na rede de ensino pública da história do Estado, com R$ 5,5 bilhões de aportes, que serão aplicados nos próximos quatro anos.
“Esse montante vai garantir transformação na vida dos estudantes pernambucanos, com a 
colaboração dos municípios, garantindo transporte escolar, merenda de qualidade e 60 mil novas 
vagas na educação infantil. Nosso Estado só irá se desenvolver de verdade quando nossas crianças puderem aprender desde cedo. 
O trabalho vai ser permanente para que Pernambuco volte a ser líder na educação”, afirmou a governadora Raquel Lyra, acompanhada da vice-governadora Priscila Krause (Cidadania).');
##SELECT Professor

SELECT p.id, p.nome, p.cnpj, p.cpf, p.rg, p.data_nascimento, p.declaracao_escolaridade, p.email, p.area_de_atuacao, p.horarios,
       e.cep, e.logradouro,
       t.numero AS telefone
FROM tbl_professor p
INNER JOIN tbl_endereco e ON p.id_endereco = e.id
INNER JOIN tbl_telefone t ON p.id_telefone = t.id;

SELECT tbl_usuario.nome, tbl_usuario.cnpj, tbl_usuario.cpf, tbl_usuario.rg, tbl_usuario.data_nascimento,
       tbl_usuario.declaracao_escolaridade, tbl_usuario.email, tbl_usuario.area_de_atuacao, tbl_usuario.horarios,
      tbl_endereco.cep, tbl_endereco.logradouro, tbl_bairro.nome as nome_bairro, tbl_cidade.nome as nome_cidade
FROM tbl_usuario
INNER JOIN tbl_endereco ON tbl_endereco.id = tbl_usuario.id_endereco
INNER JOIN tbl_bairro ON tbl_bairro.id = tbl_endereco.id
INNER JOIN tbl_cidade ON tbl_usuario.id_endereco = tbl_cidade.id;

SELECT tbl_usuario.nome, tbl_usuario.cnpj, tbl_usuario.cpf, tbl_usuario.rg, tbl_usuario.data_nascimento,
       tbl_usuario.declaracao_escolaridade, tbl_usuario.email, tbl_usuario.area_de_atuacao, tbl_usuario.horarios,
      tbl_endereco.cep, tbl_endereco.logradouro, tbl_bairro.nome as nome_bairro, tbl_cidade.nome as nome_cidade
FROM tbl_usuario
INNER JOIN tbl_endereco ON tbl_endereco.id = tbl_usuario.id_endereco
INNER JOIN tbl_bairro ON tbl_bairro.id = tbl_endereco.id
INNER JOIN tbl_cidade ON tbl_usuario.id_endereco = tbl_cidade.id;

SELECT p.id, p.nome, p.area_de_atuacao, p.horarios,
       a.comeco_aula, a.termino_aula
FROM tbl_professor p
INNER JOIN tbl_aulas a ON p.id = a.id_professor;


show tables;