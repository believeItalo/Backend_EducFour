const { response } = require('express');

//Menssagens de erro
const ERROR_REQUIRED_DATA = {status:400, message:'Existem dados obrigatórios que não foram preenchidos' };
const ERROR_INVALID_CONTENT_TYPE = {status:415, message:'O tipo de midia contentType da solicitaçã não é compativel com o servidor, {aplication/json}'}

//Menssagens de confirmação
const CREATED_ITEM = {status:201, message:'Registro criado com sucesso'}
module.exports = {
    ERROR_REQUIRED_DATA,
    CREATED_ITEM,
    ERROR_INVALID_CONTENT_TYPE
}