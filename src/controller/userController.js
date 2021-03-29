const bcrypt = require('bcrypt')
const User = require('../models/users')

class UserController {

    // async index(req, res){
    //     const tasks = await Task.find()
    //     return res.status(200).json(tasks)
    // }

    async create(req, res){

        const {name, username, password} = req.body
        const createdAt = new Date()

        const password_hash = await bcrypt.hashSync(password, 8)

        const user = {
            name, 
            username, 
            password: password_hash,
            createdAt
        }
        
        const userCreated = await User.create(user)

        return res.status(201).json({msg: 'User created'})
    }

    // async delete(req, res){
    //     const {id} = req.params
    //     await Task.findOneAndDelete(id)
    //     return res.send()
    // }

    // async update(req, res){
    //     const {id} = req.params
    //     const {status} = req.body

    //     const taskUpdated = {
    //         status
    //     }
        
    //     const task = await Task.findOne({'_id': id})
    //     await task.update(taskUpdated)
    //     return res.send()
    // }

}
module.exports = UserController