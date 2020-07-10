const express = require('express');
const router = express.Router();
const {authentication, authorization} = require('../middlewares/auth.js')
const RecipeController = require('../controllers/user-recipe-controller');

router.get('/', RecipeController.readRecipe) 
router.post('/', authentication, RecipeController.createRecipe) 
router.get('/myrecipe', authentication, RecipeController.readMyRecipe) 
router.get('/detail/:id', authentication, RecipeController.readRecipeDetail) 
router.put('/:id', authentication, authorization, RecipeController.updateRecipe) 
router.delete('/:id', authentication, authorization, RecipeController.deleteRecipe)

module.exports = router;