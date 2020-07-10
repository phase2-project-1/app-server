const { User } = require('../models/index.js')
const { hashPassword, comparePassword } = require('../helpers/bcrypt')
const { signToken, verifyToken } = require('../helpers/jwt.js')
const { verify } = require('../helpers/google-oauth.js')
const Mailgun = require('mailgun-js')

class UserController {
    static register(req, res, next) {
        let { email, username, password } = req.body

        User.create({
            username,
            email,
            password
        })
            .then(result => {
                res.status(201).json({
                    id: result.id,
                    email: result.email,
                    username: result.username
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static login(req, res, next) {
        let { email, password } = req.body

        User.findOne({
            where: {
                email
            }
        })
            .then(result => {
                if (result !== null) {

                    if (comparePassword(password, result.password)) {
                        let payload = {
                            email: result.email
                        }

                        let accessToken = signToken(payload)
                        res.status(200).json({
                            token: accessToken
                        })
                    }
                    else {
                        throw { name: "Bad Request" };
                    }
                } else {
                    throw { name: "Bad Request" };
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static async loginGoogle(req, res, next) {
        let googleToken = req.headers.id_token

        try {
            let googlePayload = await verify(googleToken)
            let googleEmail = googlePayload.email

            let user = await User.findOne({
                where: {
                    email: googleEmail
                }
            })

            if (user) {
                if (comparePassword(process.env.GOOGLE_DEFAULT_PASSWORD, user.password)) {
                    let payload = {
                        email: user.email
                    }

                    res.status(200).json({
                        token: signToken(payload)
                    })
                } else {
                    throw { name: "Bad Request" };
                }
            } else {
                let newUser = await User.create({
                    email: googleEmail,
                    username: googleEmail,
                    password: process.env.GOOGLE_DEFAULT_PASSWORD
                })

                let payload = {
                    email: newUser.email
                }
                res.status(200).json({
                    token: signToken(payload)
                })
            }
        } catch (err) {
            next(err)
        }
    }

    static sendMail(req, res, next) {
        let emailTarget = 'rakitpc.pairproject@gmail.com'

        let { email, username, kritik, saran } = req.body
        let emailContent = `
        Resep Kita: Kritik & Saran by ${username}
        ==================================

        Email : ${email}
        Username : ${username}
        Kritik : ${kritik}
        Saran: ${saran}

        ==================================

        `
        
        let API_KEY = process.env.MAILGUN_API_KEY;
        let DOMAIN = process.env.MAILGUN_DOMAIN;

        let mailgun = new Mailgun({ apiKey: API_KEY, domain: DOMAIN });
        const data = {
            from: 'mailgun@sandbox710b35b55b724cad928833d39ac6013d.mailgun.org',
            to: emailTarget,
            subject: `Resep Kita: Kritik & Saran by ${username}`,
            text: emailContent
        };

        mailgun.messages().send(data, (error, body) => {
            if (error) next(error)
            else res.status(200).json(body)
        })
    }

    static loginFacebook(req, res, next) {
        
    }
}

module.exports = UserController;