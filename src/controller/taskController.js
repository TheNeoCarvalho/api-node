const Task = require('../models/tasks')

class TaskController {

    async index(req, res) {
        const { id } = req
        const tasks = await Task.find({ id_user: id })
        return res.status(200).json(tasks)
    }

    async create(req, res) {

        const { id } = req
        const { title } = req.body
        const status = false
        const createdAt = new Date()

        const task = {
            id_user: id,
            title,
            status,
            createdAt
        }

        const taskCreated = await Task.create(task)

        return res.status(201).json(taskCreated)
    }

    async delete(req, res) {
        const { id } = req.params
        const id_user = req.id

        const task = await Task.findOne(id)

        if (!(task.id_user == id_user)) {
            return res.status(400).json({ msg: 'Not permission!' })
        }

        task.delete()

        return res.json({ msg: 'Task deleted!' })
    }

    async update(req, res) {
        const { id } = req.params
        const id_user = req.id

        const task = await Task.findOne({ '_id': id })
        if (!(task.id_user == id_user)) {
            return res.status(400).json({ msg: 'Not permission!' })
        }

        const taskUpdated = {
            status: !task.status
        }

        await task.update(taskUpdated)
        return res.status(202).json({ msg: 'Task updated!' })
    }

}
module.exports = TaskController