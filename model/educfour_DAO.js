var { PrismaClient } = require('@prisma/client');
//instanciando classe do PrismaClient
var prisma = new PrismaClient();


const selectAllAdm = async () => {

    let sql = 'select * from tbl_administrador;'
    let rsAdm = await prisma.$queryRawUnsafe(sql)

    if (rsAdm.length > 0) {
        return rsAdm
    }
    else {
        return false
    }
}
const insertAdm = async (dadosAdm) => {
    let sql = `insert into tbl_administrador
    (nome,email,senha)
        values
        ('${dadosAdm.nome}',
        '${dadosAdm.email}',
        '${dadosAdm.senha}'
          ) ;`;
    let rsAdm = await prisma.$queryRawUnsafe(sql)

    if (rsAdm) {
        return true;
    }
    else {
        return false;
    }
}
const deleteADM = async function (id) {
    let sql = `delete from tbl_administrador where id = ${id}`;

    let result = await prisma.$executeRawUnsafe(sql);

    if (result) {
        return true;
    }
    else {
        return false;

    }

}
const updateAdm  = async function(dadosAdm) {
    let sql = `update  tbl_administrador set
        nome  = '${dadosAdm.nome}',
        email = '${dadosAdm.email}',
        senha = '${dadosAdm.senha}'
        where id = ${dadosAdm.id} `

    let rsAdm = await prisma.$executeRawUnsafe(sql)

    if (rsAdm) {
        return true;
    }
    else {
        return false;
    }
    
    }


// const insertNeighborhood = async(dadosneighborhood) => {
//     let sql =`insert into tbl_bairro
//     (nome)
//         values
//         ('${dadosneighborhood.nome}'
//           ) `;
//           let rsAdm = await prisma.$queryRawUnsafe(sql)


//           if(rsAdm) {
//               return true;
//           }
//           else{
//              return false;
//           }
//     }
///////////////GG

const selectAllNews = async () => {

    let sql = 'select * from tbl_noticias;'
    let rsNews = await prisma.$queryRawUnsafe(sql)

    if (rsNews.length > 0) {
        return rsNews
    }
    else {

        return false
    }
}

const insertNews = async (dadosNews) => {


    let sql = `insert into tbl_noticias 
    (titulo,nome_autor,descricao,capa_noticia,tema,data_noticia,corpo_noticia)
        values
        ('${dadosNews.titulo}',
        '${dadosNews.nome_autor}',
        '${dadosNews.descricao}',
        '${dadosNews.capa_noticia}',
        '${dadosNews.tema}',
        '${dadosNews.data_noticia}'
        '${dadosNews.corpo_noticia}'
          ) `;

    let rsNews = await prisma.$queryRawUnsafe(sql)

    if (rsNews) {
        return true;
    }
    else {
        return false;
    }
}
const deleteNews = async function (id) {
    let sql = `delete from tbl_noticias where id = ${id}`;

    let result = await prisma.$executeRawUnsafe(sql);

    if (result) {
        return true;
    }
    else {
        return false;

    }

}
const updateNews  = async function(dadosNews) {
    let sql = `update  tbl_noticias set
       
    titulo       = '${dadosNews.titulo}',
    nome_autor   = '${dadosNews.nome_autor}',
    descricao    = '${dadosNews.descricao}',
    capa_noticia = '${dadosNews.capa_noticia}',
    tema         = '${dadosNews.tema}',
    data_noticia = '${dadosNews.data_noticia}'
    corpo_noticia = '${dadosNews.corpo_noticia}'
    where id     =  ${dadosNews.id} `

    let rsNEW = await prisma.$executeRawUnsafe(sql)

    if (rsNEW) {
        return true;
    }
    else {
        return false;
    }
    
    }

//

//AULAS

const selectAllCLasses = async () => {

    let sql = 'select * from tbl_aulas;'
    let rsClasses = await prisma.$queryRawUnsafe(sql)

    if (rsClasses.length > 0) {
        return rsClasses
    }
    else {

        return false
    }
}

module.exports = {
    selectAllAdm,
    selectAllNews,
    insertNews,
    insertAdm,
    deleteADM,
    selectAllCLasses,
    deleteNews,
    updateAdm,
    updateNews
}