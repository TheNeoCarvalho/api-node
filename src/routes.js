const express = require('express')

require('dotenv').config()

const TaskController = require('./controller/taskController')
const taskController = new TaskController()

const router = express.Router()

router.get('/', (req, res) => {
    res.send({opa: 'API'})
})

router.post('/task', taskController.create)

module.exports = router