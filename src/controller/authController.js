const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/users')

class AuthController {

    async login(req, res){

        const { username, password } = req.body

        const user = await User.findOne({username, username})
        const id = user._id
        if(user !== null){
            const passUser = await bcrypt.compareSync(password, user.password)
            if(passUser){
               const token = jwt.sign({ id, username }, 'mySecret', {expiresIn: '1d'})
               res.status(201).json({ auth: true, expiredIn: '1d', token })
            }else{
                res.status(401).json({ msg: 'Password is not match' })
            }
        }
    }

    async logout(req, res) {
        return res.status(200).json({ auth: false, token: null})
    }

}

module.exports = AuthController