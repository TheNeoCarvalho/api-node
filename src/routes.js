const express = require('express');
require('dotenv').config();

const TaskController = require('./controller/taskController');
const UserController = require('./controller/userController');
const AuthController = require('./controller/authController');

const {
    verifyTaskAlreadyExists,
    verifyTaskInBody,
    verifyJWT
} = require('./middleware/verify');

const taskController = new TaskController();
const userController = new UserController();
const authController = new AuthController();

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ opa: 'API' });
});

router.post('/login', authController.login);
router.post('/user', userController.create);

// router.use(verifyJWT)
router.post('/logout', verifyJWT, authController.logout);

router.get('/tasks', verifyJWT, taskController.index);
router.post('/task', verifyJWT, verifyTaskInBody, verifyTaskAlreadyExists, taskController.create);
router.delete('/task/:id', verifyJWT, taskController.delete);
router.patch('/task/:id', verifyJWT, taskController.update);

module.exports = router;
