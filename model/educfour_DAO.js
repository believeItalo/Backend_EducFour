var {PrismaClient} =  require('@prisma/client');
//instanciando classe do PrismaClient
var prisma = new PrismaClient();


const selectAllAdm = async () =>{

    let sql = 'select * from tbl_administrador;'
    let rsAdm = await prisma.$queryRawUnsafe(sql)

    if(rsAdm.length > 0){
        return rsAdm
    }
    else{
        return false
    }
}

const selectAllNews = async () =>{

    let sql = 'select * from tbl_noticias;'
    let rsNews = await prisma.$queryRawUnsafe(sql)

    if(rsNews.length > 0){
        return rsNews
    }
    else{

        return false
    }
}

module.exports = {
    selectAllAdm,
    selectAllNews
}