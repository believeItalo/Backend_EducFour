const {response} = require('express')
const educ_DAO = require('../model/educfour_DAO')
const message = require('./modulo/config')

// const selecionarTodososAdms = async() =>{

//     let dadodsAdm = await educ_DAO.selectAllAdm()

//     let dadosJSon = {}

//     dadosJSon.adms = dadodsAdm

//     return dadosJSon
// }
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
    
    if(dadosNews.titulo == ''|| dadosNews.titulo == undefined || dadosNews.titulo.length > 45||
       dadosNews.nome_autor == ''|| dadosNews.nome_autor == undefined || dadosNews.nome_autor > 90 ||
       dadosNews.descricao == ''|| dadosNews.descricao == undefined || dadosNews.descricao > 100 ||
       dadosNews.capa_noticia == ' ' || dadosNews.capa_noticia == undefined || dadosNews.capa_noticia > 45||
       dadosNews.tema == ' '|| dadosNews.tema == undefined || dadosNews.tema > 45||
       dadosNews.data_noticia == ' ' || dadosNews.data_noticia == undefined || dadosNews.data_noticia > 45
    ){
        
        return message.ERROR_REQUIRED_DATA
    }
    else{
        let status = await educ_DAO.insertNews(dadosNews)

        return message.CREATED_ITEM
    }
}
module.exports = {
    selecionarTodasAsNoticias,
    inserirNoticia,
    inserirAdm,
    inserirBairro
}

