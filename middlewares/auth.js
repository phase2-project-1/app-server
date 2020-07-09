const { verifyToken } = require('../helpers/jwt.js')
const { User, UserRecipe } = require('../models/index.js')

async function authentication(req, res, next) {
    let token = req.headers.token
    if (token) {

        try {
            let payload = verifyToken(token)

            let currentUser = await User.findOne({
                where: {
                    email: payload.email
                }
            })

            if (currentUser) {
                req.currentUser = currentUser
                next();
            } else {
                throw { name: "Unauthorized" }
            }

        } catch (err) {
            throw { name: "Internal server error" }
        }

    } else {
        throw { name: "Unauthorized" }
    }
}

async function authorization(req, res, next) {
    let userRecipeId = Number(req.params.id)
    try {
        let currentToDo = await ToDo.findByPk(userRecipeId)

        if (currentToDo) {
            if (currentToDo.UserId == req.currentUser.id) {
                next();
            } else {
                throw { name: "Unauthorized" }
            }
        } else {
            throw { name: "Not Found" }
        }

    } catch (err) {
        throw { name: "Internal server error" }
    }
}

module.exports = {
    authentication,
    authorization
}