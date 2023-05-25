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

const selecionarAulas = async () =>{
  //solicita ao DAO todos os alunos do BD
  let dadosAulas = await educ_DAO.selectAllAluno()

  //Criar um objeto do tipo JSON
  let dadosJson = {}

  //Valida se o BD teve registro
  if (dadosAulas) {
      //Adiciona o array de alunos e um JSON para retornar ao app
      dadosJson.status = 200
      dadosJson.count = dadosAulas.length
      dadosJson.alunos = dadosAulas
      return dadosJson
  } else{

      return message.ERROR_NOT_FOUN
  }
}


module.exports = {
    selecionarTodososAdms,
    selecionarTodasAsNoticias,
    selecionarAulas
}