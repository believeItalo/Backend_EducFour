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
    (titulo,nome_autor,descricao,capa_noticia,tema,data_noticia)
        values
        ('${dadosNews.titulo}',
        '${dadosNews.nome_autor}',
        '${dadosNews.descricao}',
        '${dadosNews.capa_noticia}',
        '${dadosNews.tema}',
        '${dadosNews.data_noticia}'
          ) `;
        
    let rsNews = await prisma.$queryRawUnsafe(sql)
    console.log(sql)
   
    if(rsNews) {
        return true;
    }
    else{
       return false;
    }
    
    

   


}

module.exports = {
    selectAllAdm,
    selectAllNews,
    insertNews
}