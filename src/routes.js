const express = require('express')

require('dotenv').config()

const TaskController = require('./controller/taskController')
const taskController = new TaskController()

const router = express.Router()

router.get('/', (req, res) => {
    res.send({opa: 'API'})
})

router.post('/task', taskController.create)
router.get('/tasks', taskController.get)
router.delete('/task/:id', taskController.delete)
router.put('/task/:id', taskController.update)

module.exports = router