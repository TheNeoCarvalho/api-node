const express = require('express')

const {
    verifyTaskAlreadyExists,
    verifyTaskInBody
} = require('./middleware/verify')

require('dotenv').config()

const TaskController = require('./controller/taskController')
const taskController = new TaskController()

const router = express.Router()

router.get('/', (req, res) => {
    res.send({ opa: 'API' })
})
router.get('/tasks', taskController.index)
router.post('/task', verifyTaskInBody, verifyTaskAlreadyExists, taskController.create)
router.delete('/task/:id', taskController.delete)
router.patch('/task/:id', taskController.update)

module.exports = router