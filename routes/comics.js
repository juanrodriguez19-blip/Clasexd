const comicsController = require('../controllers/comics')

const comicsRouter = require('express').Router()

comicsRouter.get('/todo', comicsController.getComics)

module.exports = comicsRouter
 
