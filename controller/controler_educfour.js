const {response} = require('express')
const educ_DAO = require('../model/educfour_DAO')

const selecionarTodososAdms = async() =>{

    let dadodsAdm = await educ_DAO.selectAllAdm()

    let dadosJSon = {}

    dadosJSon.adms = dadodsAdm

    return dadosJSon
}

const selecionarTodasAsNoticias = async () =>{

   let dadosNews = await educ_DAO.selectAllNews()
   let dadosJSon = {}

   dadosJSon.news = dadosNews

   return dadosJSon
}

const inserirNoticia = async function (dadosNews){

    // if (dadosNoticia.titulo == ' '|| dadosNoticia.titulo == undefined || dadosNoticia.titulo.length > 45) {
        
    // }

    let status = await educ_DAO.insertNews(dadosNews)

   
    

}
module.exports = {
    selecionarTodososAdms,
    selecionarTodasAsNoticias,
    inserirNoticia
}