const Task = require('../models/tasks')

class TaskController {

    async index(req, res) {
        const tasks = await Task.find()
        return res.status(200).json(tasks)
    }

    async create(req, res) {

        const { title } = req.body
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

    async delete(req, res) {
        const { id } = req.params
        await Task.findOneAndDelete(id)
        return res.json({ msg: 'Task deleted!' })
    }

    async update(req, res) {
        const { id } = req.params
        const task = await Task.findOne({ '_id': id })

        const taskUpdated = {
            status: !task.status
        }

        await task.update(taskUpdated)
        return res.status(202).json({ msg: 'Task updated!' })
    }

}
module.exports = TaskController