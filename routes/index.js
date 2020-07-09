const express = require('express');
const router = express.Router();

const RecipeRouter = require('./recipe-router.js')


router.use('/recipe', RecipeRouter)


module.exports = router;