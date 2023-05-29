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

   console.log(dados);
   console.log('teste');
})

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
//NOTICIAS


// app.post('/v1/educ_four/postNeighborhood', cors(), bodyJson, async function (request,response){
//    let contentType = request.headers['content-type'];
//    let dadosBody = request.body;
//    let resultInsertNeighborhood = await controllerEducFour.inserirBairro(dadosBody)
//    response.json(resultInsertNeighborhood)
   
// })

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


//ADMINISTRADORES
app.listen(8080, function () {
   console.log('servidor aguardado requisições na porta 8080')
})