const { UserRecipe } = require ('../models/index.js')


class userRecipeController {


    //Create TODO
    static async createRecipe(req, res, next) {
        let name = req.body.name;
        let ingredient = req.body.ingredient;
        let UserId = req.currentUser.id;

        try {
            res.status(201).json(
                {
                    name: createdToDo.name,
                    ingredient: createdToDo.ingredient,
                    UserId: createdToDo.UserId
                }
            )
        } catch (err) {
            next(err);
        }
    }

    //GET RECIPE LIST ALL
    static readRecipe(req, res, next) {
        UserRecipe.findAll()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            next(err);
        })
    }


    //GET RECIPE BY ID
    static readRecipeById(req, res, next) {
        let recipeId = Number(req.params.id)

        UserRecipe.findByPk(recipeId)
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                next(err)
            })
    }    



    //UPDATE RECIPE
    static updateRecipe(req, res, next) {
        let recipeId = req.params.id
        let name = req.body.name;
        let ingredient = req.body.ingredient;

    
        UserRecipe.update({
            name,
            ingredient
        },
            {
                where: {
                    id: recipeId
                },
                returning: true
            })
            .then(result => {
                res.status(200).json(result[1])
            })
            .catch(err => {
                next(err)
            })
    }


    //DELETE
    static deleteRecipe(req, res, next) {
        let recipeId = Number(req.params.id)
        let obj;

        UserRecipe.findByPk(recipeId)
            .then(result => {
                obj = result

                return UserRecipe.destroy({
                    where: {
                        id: recipeId
                    }
                })
            })
            .then(result => {
                res.status(200).json(obj)
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = userRecipeController