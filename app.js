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
app.get('/v1/educ_four/news', cors(), async function (request,response){
   let dados = await controllerEducFour.selecionarTodasAsNoticias()

   response.status(200)
   response.json(dados)

   
})

app.put('/v1/educ_four/update/:id', cors(), bodyJson, async function(request, response) {  
   //recebe os dados do body   
  let dados = request.body

  //recebe o id do aluno
  let idNews = request.params.id

  //encaminhar os dados para serem atualizados
  let resultUpdateDados = await controllerEducFour.atualizarNoticias(dados, idNews)
  
  response.status(resultUpdateDados.status)
  response.json(resultUpdateDados)

});

app.post('/v1/educ_four/postnews', cors(), bodyJson, async function (request,response){
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
app.delete('/v1/educ_four/deletenews/:id', cors(), async function (request, response) {

   let idNot = request.params.id 
   let resultDeleteDados = await controllerEducFour.deletarNoticia(idNot)

   response.status(resultDeleteDados.status)
   response.json(resultDeleteDados)

})
//NOTICIASgit

//ADMINISTRADORES

//POST ADM
app.post('/v1/educ_four/postadm', cors(), bodyJson, async function (request, response) {
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
app.get('/v1/educ_four/getadm', cors(), bodyJson, async function (request, response) {

   let dados = await controllerEducFour.selecionarTodososAdms()

   response.status(200)
   response.json(dados)

})

//DELETE ADM
app.delete('/v1/educ_four/deleteadm/:id', cors(), async function (request, response) {

   let idAdm = request.params.id 
   let resultDeleteDados = await controllerEducFour.deletarAdm(idAdm)

   response.status(resultDeleteDados.status)
   response.json(resultDeleteDados)

})

//PUT ADM

app.put('/v1/educ_four/updateadm/:id', cors(), bodyJson, async function(request, response) {  
   //recebe os dados do body   
  let dados = request.body

  //recebe o id do aluno
  let idAdm = request.params.id


  
  //encaminhar os dados para serem atualizados
  let resultUpdateDados = await controllerEducFour.atualizarAdm(dados, idAdm)
  response.status(resultUpdateDados.status)
  response.json(resultUpdateDados)

  

});
//ADMINISTRADORES

//AULAS
app.get('/v1/educ_four/getaulas', cors(), bodyJson, async function (request, response) {

   let dados = await controllerEducFour.selecionarTodasAsAulas()

   response.status(200)
   response.json(dados)

})

//BAIRRO
app.get('/v1/educ_four/neighborhood', cors(), async function (request,response){
   let dados = await controllerEducFour.selecionarTodososBairro()

   response.status(200)
   response.json(dados)
 
});
app.post('/v1/educ_four/postneighborhood', cors(), bodyJson, async function (request, response) {
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
app.get('/v1/educ_four/city', cors(), async function (request,response){
   let dados = await controllerEducFour.selecionarTodasCidades()

   response.status(200)
   response.json(dados)
 
});
app.post('/v1/educ_four/postcity', cors(), bodyJson, async function (request, response) {
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








app.listen(8080, function () {
   console.log('servidor aguardado requisições na porta 8080')
})