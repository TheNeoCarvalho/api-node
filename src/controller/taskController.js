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
        
        const taskCreated = await Task.create(task)

        return res.status(201).json(taskCreated)
    }

    async get(req, res){
        const tasks = await Task.find()

        if(tasks.length < 1){
            return res.status(300).json({msg: "No tasks found"})
        }

        return res.status(200).json(tasks)
    }

    async delete(req, res){
        const {id} = req.params

        const task = await Task.findById(id)
        task.delete()

        return res.send()
    }

    async update(req, res){
        const {id} = req.params
        const {status} = req.body

        const taskUpdated = {
            status
        }

        const task = await Task.findById(id)
        await task.updateOne(taskUpdated)

        return res.send()
    }
}
module.exports = TaskController