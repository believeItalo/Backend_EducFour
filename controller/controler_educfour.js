const {response} = require('express')
const educ_DAO = require('../model/educfour_DAO')

const selecionarTodososAdms = async() =>{

    let dadodsAdm = await educ_DAO.selectAllAdm()

    let dadosJSon = {}

    dadosJSon.adms = dadodsAdm

    return dadosJSon
}

module.exports = {
    selecionarTodososAdms
}