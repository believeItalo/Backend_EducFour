const { response } = require('express')
const educ_DAO = require('../model/educfour_DAO')
const message = require('./modulo/config')
const educfour_DAO = require('../model/educfour_DAO')


//ADMS
const selecionarTodososAdms = async () => {

    let dadosAdms = await educfour_DAO.selectAllAdm()

    let dadosJson = {}

    if (dadosAdms) {
        dadosJson.status = 200
        dadosJson.adms = dadosAdms
        return dadosJson
    }
    else {
        return message.ERROR_NOT_FOUND
    }
}

const inserirAdm = async (dadosAdm) => {
    if (dadosAdm.nome == ' ' || dadosAdm.nome == undefined || dadosAdm.nome.length > 45 ||
        dadosAdm.email == ' ' || dadosAdm.email == undefined || dadosAdm.email.length > 90 ||
        dadosAdm.senha == ' ' || dadosAdm.senha == undefined || dadosAdm.senha.length > 45
    ) {
        return message.ERROR_REQUIRED_DATA
    } else {
        let status = await educ_DAO.insertAdm(dadosAdm)
        return message.CREATED_ITEM
    }
}

const deletarAdm = async (idAdm) => {

    if(idAdm == ' '|| idAdm == undefined || isNaN(idAdm)){
        return message.ERROR_REQUIRED_ID
    }
    else{
        let status = await educfour_DAO.deleteADM(idAdm)
        if(status){
            return message.DELETE_ITEM
        }
        else{
            return message.ERROR_INTERNAL_SERVER
        }
    }
}

const atualizarAdm = async (dadosAdm, idAdm) =>{
    if (dadosAdm.nome == ' ' || dadosAdm.nome == undefined || dadosAdm.nome.length > 45 ||
    dadosAdm.email == ' ' || dadosAdm.email == undefined || dadosAdm.email.length > 90 ||
    dadosAdm.senha == ' ' || dadosAdm.senha == undefined || dadosAdm.senha.length > 45
) {
    return message.ERROR_REQUIRED_DATA

} else if(idAdm == '' || idAdm == undefined || isNaN(idAdm)){

    return message.ERROR_REQUIRED_ID
}else {
    dadosAdm.id = idAdm

    let status = await educ_DAO.updateAdm(dadosAdm)
    
    
    if(status){
        let dadosJSon = {} 

        dadosJSon.status = message.UPDATED_ITEM.status
        dadosJSon.adm = dadosAdm

        return dadosJSon
    }
    else
        return message.ERROR_INTERNAL_SERVER
        
}
}
//ADMS

//NOTICIAS
const selecionarTodasAsNoticias = async () => {

    let dadosNews = await educ_DAO.selectAllNews()
    let dadosJSon = {}


    if (dadosNews) {
        //retorna dados da requisicao
        dadosJSon.status = 200
        // retorna todos os registros
        dadosJSon.count = dadosNews.length
        dadosJSon.news = dadosNews
        return dadosJSon
    } else {
        dadosJSon.status = 404
    }
}

const inserirNoticia = async function (dadosNews) {

    if (dadosNews.titulo == '' || dadosNews.titulo == undefined || dadosNews.titulo.length > 45 ||
        dadosNews.nome_autor == '' || dadosNews.nome_autor == undefined || dadosNews.nome_autor > 90 ||
        dadosNews.descricao == '' || dadosNews.descricao == undefined || dadosNews.descricao > 100 ||
        dadosNews.capa_noticia == ' ' || dadosNews.capa_noticia == undefined || dadosNews.capa_noticia > 45 ||
        dadosNews.tema == ' ' || dadosNews.tema == undefined || dadosNews.tema > 45 ||
        dadosNews.data_noticia == ' ' || dadosNews.data_noticia == undefined || dadosNews.data_noticia > 45 ||
        dadosNews.corpo_noticia == ' '|| dadosNews.corpo_noticia == undefined
    ) {

        return message.ERROR_REQUIRED_DATA
    }
    else {
        let status = await educ_DAO.insertNews(dadosNews)

        return message.CREATED_ITEM
    }
}

const deletarNoticia = async (idNot) => {

    if(idNot == ' '|| idNot == undefined || isNaN(idNot)){
        return message.ERROR_REQUIRED_ID
    }
    else{
        let status = await educfour_DAO.deleteNews(idNot)
        if(status){
            return message.DELETE_ITEM
        }
        else{
            return message.ERROR_INTERNAL_SERVER
        }
    }
}

const atualizarNoticias = async (dadosNews, idNew) =>{ 

    if (dadosNews.titulo == '' || dadosNews.titulo == undefined || dadosNews.titulo.length > 45 ||
    dadosNews.nome_autor == '' || dadosNews.nome_autor == undefined || dadosNews.nome_autor > 90 ||
    dadosNews.descricao == '' || dadosNews.descricao == undefined || dadosNews.descricao > 100 ||
    dadosNews.capa_noticia == ' ' || dadosNews.capa_noticia == undefined || dadosNews.capa_noticia > 45 ||
    dadosNews.tema == ' ' || dadosNews.tema == undefined || dadosNews.tema > 45 ||
    dadosNews.data_noticia == ' ' || dadosNews.data_noticia == undefined || dadosNews.data_noticia > 45||
    dadosNews.corpo_noticia == ' '|| dadosNews.corpo_noticia == undefined
) {
    return message.ERROR_REQUIRED_DATA

} else if(idNew == '' || idNew == undefined || isNaN(idNew)){

    return message.ERROR_REQUIRED_ID
}else {
    dadosNews.id = idNew

    let status = await educ_DAO.updateNews(dadosNews)

    if(status){
        let dadosJson = {} 

        dadosJson.status = message.UPDATED_ITEM.status
        dadosJson.new = dadosNews

        return dadosJson
    }
    else
        return message.ERROR_INTERNAL_SERVER
}
}

//NOTICIAS

//AULAS
const selecionarTodasAsAulas = async () => {

    let dadosClasses = await educ_DAO.selectAllCLasses()
    let dadosJSon = {}

    if (dadosClasses) {
        //retorna dados da requisicao
        dadosJSon.status = 200
        // retorna todos os registros
        dadosJSon.count = dadosClasses.length
        dadosJSon.aulas = dadosClasses
        return dadosJSon
    } else {
        dadosJSon.status = 404
    }
}
module.exports = {
    selecionarTodasAsNoticias,
    inserirNoticia,
    inserirAdm,
    selecionarTodososAdms,
    deletarAdm,
    selecionarTodasAsAulas,
    deletarNoticia,
    atualizarAdm,
    atualizarNoticias
    // inserirBairro
}

