const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const { request, response } = require('express');
const message = require('./controller/modulo/config')

const app = express();

app.use((request, response, next) => {
 
   response.header('Access-Control-Allow-Origin', '*');
 
   response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');

   app.use(cors());

   next();

});

const bodyJson = bodyParser.json();

var controllerEducFour = require('./controller/controler_educfour')

//NOTICIAS
app.get('/v1/educ_four/news/get', cors(), async function (request,response){
   let dados = await controllerEducFour.selecionarTodasAsNoticias()

   response.status(200)
   response.json(dados)
   
})

app.post('/v1/educ_four/news/post', cors(), bodyJson, async function (request,response){
   let contentType = request.headers['content-type'];
   if(String(contentType).toLowerCase() == 'application/json'){

      let dadosBody = request.body;
      let resultInsertNews = await controllerEducFour.inserirNoticia(dadosBody)
      response.status(resultInsertNews.status)
      response.json(resultInsertNews)
      console.log(dadosBody);
      
   }
   else{
      response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
      response.json(message.ERROR_INVALID_CONTENT_TYPE)
   }
   
})
app.delete('/v1/educ_four/news/delete/:id', cors(), async function (request, response) {

   let idNot = request.params.id 
   let resultDeleteDados = await controllerEducFour.deletarNoticia(idNot)

   response.status(resultDeleteDados.status)
   response.json(resultDeleteDados)

})
//NOTICIASgit

//ADMINISTRADORES

//POST ADM
app.post('/v1/educ_four/adm/post', cors(), bodyJson, async function (request, response) {
   let contentType = request.headers['content-type'];
   if (String(contentType).toLowerCase() == 'application/json') {
      let dadosBody = request.body;
      let resultInsertAdm = await controllerEducFour.inserirAdm(dadosBody)
      response.status(resultInsertAdm.status)
      response.json(resultInsertAdm)

   } else {
      response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
      response.json(message.ERROR_INVALID_CONTENT_TYPE)
   }
})

//GET ADM
app.get('/v1/educ_four/adm/get', cors(), bodyJson, async function (request, response) {

   let dados = await controllerEducFour.selecionarTodososAdms()

   response.status(200)
   response.json(dados)

})

//DELETE ADM
app.delete('/v1/educ_four/adm/delete/:id', cors(), async function (request, response) {

   let idAdm = request.params.id 
   let resultDeleteDados = await controllerEducFour.deletarAdm(idAdm)

   response.status(resultDeleteDados.status)
   response.json(resultDeleteDados)

})

//PUT ADM

app.put('/v1/educ_four/adm/update/:id', cors(), bodyJson, async function(request, response) {  
   
  let dados = request.body
  let idAdm = request.params.id
  let resultUpdateDados = await controllerEducFour.atualizarAdm(dados, idAdm)
  response.status(resultUpdateDados.status)
  response.json(resultUpdateDados)

});


//ADMINISTRADORES

//AULAS

app.get('/v1/educ_four/aulas/get', cors(), bodyJson, async function (request, response) {

   let dados = await controllerEducFour.selecionarTodasAsAulas()

   response.status(200)
   response.json(dados)

})
app.get('/v1/educ_four/neighborhood/get', cors(), async function (request,response){
   let dados = await controllerEducFour.selecionarTodososBairro()

   response.status(200)
   response.json(dados)

});
app.post('/v1/educ_four/neighborhood/post', cors(), bodyJson, async function (request, response) {
   let contentType = request.headers['content-type'];
   if (String(contentType).toLowerCase() == 'application/json') {
      let dadosBody = request.body;
      let resultInsertNeighbor = await controllerEducFour.inserirBairro(dadosBody)
      response.status(resultInsertNeighbor.status)
      response.json(resultInsertNeighbor)

   } else {
      response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
      response.json(message.ERROR_INVALID_CONTENT_TYPE)
   }
})

//CIDADE
app.get('/v1/educ_four/city/get', cors(), async function (request,response){
   let dados = await controllerEducFour.selecionarTodasCidades()

   response.status(200)
   response.json(dados)
 
});
app.post('/v1/educ_four/city/post', cors(), bodyJson, async function (request, response) {
   let contentType = request.headers['content-type'];
   if (String(contentType).toLowerCase() == 'application/json') {
      let dadosBody = request.body;
      let resultInsertCity = await controllerEducFour.inserirCidade(dadosBody)
      response.status(resultInsertCity.status)
      response.json(resultInsertCity)

   } else {
      response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
      response.json(message.ERROR_INVALID_CONTENT_TYPE)
   }
})

//Endereco
app.get('/v1/educ_four/address/get', cors(), async function (request,response){
   let dados = await controllerEducFour.selecionarTodosEndereco()

   response.status(200)
   response.json(dados)
 
});
app.post('/v1/educ_four/address/post', cors(), bodyJson, async function (request, response) {
   let contentType = request.headers['content-type'];
   if (String(contentType).toLowerCase() == 'application/json') {
      let dadosBody = request.body;
      let resultInsertAddress = await controllerEducFour.inserirEndereco(dadosBody)
      response.status(resultInsertAddress.status)
      response.json(resultInsertAddress)

   } else {
      response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
      response.json(message.ERROR_INVALID_CONTENT_TYPE)
   }
})

//PROFESSOR
app.get('/v1/educ_four/prof/get', cors(), async function (request,response){

   let dados = await controllerEducFour.selecionarTodosProf()
   
   response.status(200)
   response.json(dados)

});

//USERs
app.get('/v1/educ_four/users/get', cors(), async function (request,response){

   let dados = await controllerEducFour.selecionarTodosUsuarios()
   
   response.status(200)
   response.json(dados)

});

app.listen(8080, function () {
   console.log('servidor aguardado requisições na porta 8080')
})