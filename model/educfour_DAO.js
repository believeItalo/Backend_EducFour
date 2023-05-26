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
 //////////////////// GG
const insertAdm = async(dadosAdm) => {
let sql =`insert into tbl_administrador
(nome,email,senha)
    values
    ('${dadosAdm.nome}',
    '${dadosAdm.email}',
    '${dadosAdm.senha}'
      ) ;`;
      let rsAdm = await prisma.$queryRawUnsafe(sql)
      console.log(sql)
     
      if(rsAdm) {
          return true;
      }
      else{
         return false;
      }
}


const insertNeighborhood = async(dadosneighborhood) => {
    let sql =`insert into tbl_bairro
    (nome)
        values
        ('${dadosneighborhood.nome}'
          ) `;
          let rsAdm = await prisma.$queryRawUnsafe(sql)
          console.log(sql)
         
          if(rsAdm) {
              return true;
          }
          else{
             return false;
          }
    }



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
    insertNews,
    insertAdm,
    insertNeighborhood
}