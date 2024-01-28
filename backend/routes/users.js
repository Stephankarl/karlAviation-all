const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

//IMPORT FILES
const Users = require('../models/User')
const controllers = require('../controllers/userControllers')

router
    .route('/:id')
    .patch(controllers.updateUser)

module.exports = router