const jwt = require('jsonwebtoken')
const Task = require('../models/tasks')

const verifyTaskAlreadyExists = async (req, res, next) => {

    const { title } = req.body
    const taskAlready = await Task.findOne({ title })

    if (taskAlready) {
        return res.status(400).json({ msg: 'Task already exists' })
    }

    return next()
}

const verifyTaskInBody = async (req, res, next) => {
    const { title } = req.body
    if (!title) {
        return res.status(400).json({ msg: 'Title not exists in body' })
    }
    return next()
}

const verifyJWT = async (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        return res.status(400).json({ msg: 'Token not found!' })
    }

    jwt.verify(token, 'mySecret', (error, decoded) => {
        if (error) {
            res.status(400).json({
                msg: 'Fail to auth'
            })
        }
        req.id = decoded.id
        return next()
    })
}

module.exports = { verifyTaskAlreadyExists, verifyTaskInBody, verifyJWT }