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
        dadosNews.data_noticia == ' ' || dadosNews.data_noticia == undefined || dadosNews.data_noticia > 45
    ) {

        return message.ERROR_REQUIRED_DATA
    }
    else {
        let status = await educ_DAO.insertNews(dadosNews)

        return message.CREATED_ITEM
    }
}

//NOTICIAS
module.exports = {
    selecionarTodasAsNoticias,
    inserirNoticia,
    inserirAdm,
    selecionarTodososAdms,
    deletarAdm
    // inserirBairro
}

