const comicsController = {}

comicsController.getComics = (req, res) => {
    res.send({ message: 'Hola ibague B)' })
}
const axios = require('axios')

comicsController.getComics = async (req, res) => {
    const POKEMON_API = process.env.POKEMON_API

    axios.get(POKEMON_API + '/pokemon')
        .then(resp => res.json(resp.data))
}
module.exports = comicsController