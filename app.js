const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const { request, response } = require('express');


const app = express();

app.use((request, response, next) => {
 
   response.header('Access-Control-Allow-Origin', '*');
 
   response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');

   app.use(cors());

   next();

});

const bodyJson = bodyParser.json();

var controllerEducFour = require('./controller/controler_educfour')
var messages_EducFour = require('./controller/modulo/config')

app.get('/v1/educ_four/adms', cors(), async function (request,response){

   let dados = await controllerEducFour.selecionarTodososAdms()

   response.status(200)
   response.json(dados)

   console.log(dados);
   console.log('teste');
   
   
})


app.listen(8080, function () {
   console.log('servidor aguardado requisições na porta 8080')
})