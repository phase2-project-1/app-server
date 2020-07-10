const { UserRecipe } = require('../models/index.js')

class userRecipeController {

    //Create RECIPE
    static async createRecipe(req, res, next) {
        let name = req.body.name;
        let ingredient = req.body.ingredient;
        let imageUrl = req.body.imageUrl
        let UserId = req.currentUser.id;

        try {
            let newRecipe = await UserRecipe.create({
                name,
                ingredient,
                UserId,
                imageUrl
            })

            res.status(201).json(newRecipe)
        } catch (err) {
            next(err)
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


    //GET ALL RECIPE BY USER ID
    static readMyRecipe(req, res, next) {
        let userId = Number(req.currentUser.id)

        UserRecipe.findAll({
            where: {
                UserId: userId
            }
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                next(err)
            })
    }

    //GET RECIPE DETAIL BY RECIPE ID
    static readRecipeDetail(req, res, next) {
        let recipeId = Number(req.params.id)

        UserRecipe.findByPk(recipeId)
            .then(result => {
                if (result) {
                    res.status(200).json(result)
                } else {
                    throw { name: "Not Found" }
                }
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
        let imageUrl = req.body.imageUrl

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