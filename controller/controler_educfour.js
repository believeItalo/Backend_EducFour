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

console.log(dadosAdm);


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
        dadosNews.data_noticia == ' ' || dadosNews.data_noticia == undefined || dadosNews.data_noticia > 45||
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

//BAIRRO
const selecionarTodososBairro = async () => {

    let dadosBairro = await educfour_DAO.selectAllrsNeighbor()

    let dadosJson = {}

    if (dadosBairro) {
        dadosJson.status = 200
        dadosJson.bairro = dadosBairro
        return dadosJson
    }
    else {
        return message.ERROR_NOT_FOUND
    }
}

const inserirBairro = async (dadosNeighbor) =>{
    if(dadosNeighbor.nome == '' || dadosNeighbor.nome == undefined || dadosNeighbor.nome.length > 55
    ){
        return message.ERROR_REQUIRED_DATA

    }else {
        let status = await educ_DAO.insertNeighborhood(dadosNeighbor)

        return message.CREATED_ITEM
    }
}

//CIDADE

const selecionarTodasCidades = async () => {

    let dadosCidade = await educfour_DAO.selectAllrsCity()

    let dadosJson = {}

    if (dadosCidade) {
        dadosJson.status = 200
        dadosJson.cidade = dadosCidade
        return dadosJson
    }
    else {
        return message.ERROR_NOT_FOUND
    }
}

const inserirCidade = async (dadosCity) =>{
    if(dadosCity.nome == '' || dadosCity.nome == undefined || dadosCity.nome > 55
    ){
        return message.ERROR_REQUIRED_DATA

    }else {
        let status = await educ_DAO.insertCity(dadosCity)

        return message.CREATED_ITEM
    }
}

//ENDERECO
const selecionarTodosEndereco = async () => {

    let dadosLogradouro = await educfour_DAO.selectAllrsComplement()

    let dadosJson = {}

    if (dadosLogradouro) {
        dadosJson.status = 200
        dadosJson.bairro = dadosLogradouro
        return dadosJson
    }
    else {
        return message.ERROR_NOT_FOUND
    }
}

const inserirEndereco = async (dadosaddress) =>{

    if(dadosaddress.cep == '' || dadosaddress.cep == undefined || dadosaddress.cep  > 45 ||
       dadosaddress.logradouro == '' || dadosaddress.logradouro == undefined || dadosaddress.logradouro > 70
    ){

        return message.ERROR_REQUIRED_DATA

    }else {
        let status = await educ_DAO.insertComplement(dadosaddress)

        return message.CREATED_ITEM
    }


}

const selecionarTodosProf = async () => {

    let dadosProf = await educ_DAO.selectUserTeacher()
    let dadosJson = {}

    if(dadosProf){
        dadosJson.status = 200
        dadosJson.count = dadosProf.length
        dadosJson.professores = dadosProf
        return dadosJson
    }
    else{
        dadosJson.status = 404
    }

}
const selecionarTodosUsuarios = async () => {

    let dadosUser = await educ_DAO.selectUser()
    let dadosJson = {}

    if(dadosUser){
        dadosJson.status = 200
        dadosJson.count = dadosUser.length
        dadosJson.usuarios = dadosUser
        return dadosJson
    }
    else{
        dadosJson.status = 404
    }

}

//TELEFONE

const selecionarTodasTelefones = async () => {

    let dadosTelefone= await educfour_DAO.selectAllrsTell()

    let dadosJson = {}

    if (dadosTelefone) {
        dadosJson.status = 200
        dadosJson.telefone = dadosTelefone
        return dadosJson
    }
    else {
        return message.ERROR_NOT_FOUND
    }
}

const inserirTelefone = async (dadosTell) =>{
    if(dadosTell.numero == '' || dadosTell.numero == undefined || dadosTell.numero.length> 45
    ){
        return message.ERROR_REQUIRED_DATA

    }else {
        let status = await educ_DAO.insertTell(dadosTell)

        return message.CREATED_ITEM
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
    atualizarNoticias,
    inserirBairro,
    selecionarTodososBairro,
    selecionarTodasCidades,
    inserirCidade,
    selecionarTodosProf,
    selecionarTodosUsuarios,
    inserirEndereco,
    selecionarTodosEndereco,
    selecionarTodasTelefones,
    inserirTelefone

    
}

