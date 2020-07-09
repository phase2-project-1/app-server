const express = require('express')
const router = express.Router()
const UserRouter = require('./user-route.js')
const RecipeRouter = require('./recipe-router.js')

router.use('/user', UserRouter)
router.use('/recipe', RecipeRouter)

module.exports = router;