const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user-controller.js')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/login/google', UserController.loginGoogle)
// router.post('/login/facebook', UserController.loginFacebook)
// router.post('/login/github', UserController.loginGithub)
// router.post('/logout', UserController.logout)

module.exports = router