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

module.exports = {

    selectAllAdm
}