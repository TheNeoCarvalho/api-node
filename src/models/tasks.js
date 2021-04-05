const mongoose = require('../database/database')

const taskSchema = new mongoose.Schema({
    id_user: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task