const mongoose = require('../database/database')

const taskSchema = new mongoose.Schema({
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

const Task = mongoose.use('Task', taskSchema)
