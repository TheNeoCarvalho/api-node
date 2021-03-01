const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send({opa: 'API'})
})

router.get('/:nome', (req, res) => {
    res.send({nome: req.params.nome})
})

module.exports = router