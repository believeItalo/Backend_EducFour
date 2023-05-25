const {response} = require('express')
const educ_DAO = require('../model/educfour_DAO')

const selecionarTodososAdms = async() =>{

    let dadodsAdm = await educ_DAO.selectAllAdm()

    let dadosJSon = {}

    dadosJSon.adms = dadodsAdm

    return dadosJSon
}
////////////////////////GG
const inserirAdm = async (dadosAdm) => {
    let status = await educ_DAO.insertAdm(dadosAdm)
 
}

const inserirBairro = async (dadosBairo) => {
    let status = await educ_DAO.insertNeighborhood(dadosBairo)
}
/////////////////////////////////GG

const selecionarTodasAsNoticias = async () =>{

   let dadosNews = await educ_DAO.selectAllNews()
   let dadosJSon = {}

 
   if(dadosNews){
    //retorna dados da requisicao
    dadosJSon.status = 200
    // retorna todos os registros
    dadosJSon.count = dadosNews.length
    dadosJSon.news = dadosNews
    return dadosJSon

   }else {
    dadosJSon.status = 404
   }
}

const inserirNoticia = async function (dadosNews){

    // if (dadosNoticia.titulo == ' '|| dadosNoticia.titulo == undefined || dadosNoticia.titulo.length > 45) {
        
    // }

    let status = await educ_DAO.insertNews(dadosNews)

   
    

}
module.exports = {
    selecionarTodososAdms,
    selecionarTodasAsNoticias,
    inserirNoticia,
    inserirAdm,
    inserirBairro
}