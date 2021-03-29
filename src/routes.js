const express = require('express');
require('dotenv').config();

const TaskController = require('./controller/taskController');
const UserController = require('./controller/userController');
const AuthController = require('./controller/authController');

const {
    verifyTaskAlreadyExists, 
    verifyTaskInBody
} = require('./middleware/verify');

const taskController = new TaskController();
const userController = new UserController();
const authController = new AuthController();

const router = express.Router();

router.get('/', (req, res) => {
    res.send({opa: 'API'});
});

router.post('/login', authController.login);
router.post('/logout', authController.logout);


router.post('/user', userController.create);

router.get('/tasks',  taskController.index);
router.post('/task', verifyTaskInBody, verifyTaskAlreadyExists, taskController.create);
router.delete('/task/:id', taskController.delete);
router.patch('/task/:id', taskController.update);

module.exports = router;