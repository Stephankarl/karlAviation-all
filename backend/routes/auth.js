const express = require('express')
const router = express.Router()

const controllers = require('../controllers/authControllers')

router
    .route('/register')
    .post(controllers.registerUser)

router
    .route('/login')
    .post(controllers.loginUser)

router
    .route('/logout')
    .get(controllers.logoutUser)

module.exports = router