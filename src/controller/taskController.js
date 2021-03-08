const Task = require('../models/tasks')

class TaskController {

    async create(req, res){

        const {title} = req.body
        const status = false
        const createdAt = new Date()

        const task = {
            title,
            status,
            createdAt
        }

        
        await Task.create(task)

        res.json(task)
       
    }

}

module.exports = TaskController