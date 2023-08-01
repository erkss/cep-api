const express = require('express')
const routes = express.Router()

const controller = require('./controllers/controller')
const controllerZipCodeSearched = require('./controllers/controllerZipCodeSearched')
const controllerDDDSearched = require('./controllers/controllerDDDSearched')
const controllerViaCEP = require('./controllers/controllerViaCEP')

//controller routes
routes.get('/',controller.simpleMessage)

//controllerZipCodeSearched routes
routes.get('/getZipCodeSearched',controllerZipCodeSearched.getZipCodeSearched)
routes.get('/getZipCodeSearched/:cep',controllerZipCodeSearched.getZipCodeSearchedById)
routes.post('/addZipCodeSearched/',controllerZipCodeSearched.addZipCodeSearched)
routes.put('/updateZipCodeSearched/:cep',controllerZipCodeSearched.updateZipCodeSearched)
routes.delete('/deleteZipCodeSearched/:cep',controllerZipCodeSearched.deleteZipCodeSearched)

//controllerDDDSearched routes
routes.get('/getDDDSearched',controllerDDDSearched.getDDDSearched)
routes.get('/getDDDSearched/:ddd_id',controllerDDDSearched.getDDDSearchedById)
routes.post('/addDDDSearched',controllerDDDSearched.addDDDSearched)
routes.put('/updateDDDSearched/:id',controllerDDDSearched.updateDDDSearched)
routes.delete('/deleteDDDSearched/:id',controllerDDDSearched.deleteDDDSearched)

//controllerViaCEP routes
routes.get('/getZipCode/:cep',controllerViaCEP.getZipCodeSearched)  

module.exports = routes