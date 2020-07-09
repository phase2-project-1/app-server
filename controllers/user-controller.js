const {User} = require('../models/index.js')
const {hashPassword, comparePassword} = require('../helpers/bcrypt')
const {signToken, verifyToken} = require('../helpers/jwt.js')

class UserController {
    static register(req, res, next) {


    }

    static login(req, res, next) {

    }

    static logout(req, res, next) {

    }
}

module.exports = UserController;