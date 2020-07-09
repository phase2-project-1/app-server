const express = require('express');
const router = express.Router();

const RecipeController = require('../controllers/user-recipe-controller');

router.get('/', RecipeController.readRecipe) 
router.post('/', RecipeController.createRecipe) 
router.get('/:id', RecipeController.readRecipeById) 
router.put('/:id', RecipeController.updateRecipe) 
router.delete('/:id', RecipeController.deleteRecipe)


module.exports = router;