const { Router } = require('express')
const version = require('./controllers/version')
const { createUserMiddleware } = require('./middlewares/user')
const user = require('./controllers/user')

const router = Router()

router.route('/version').get(version.get)

router.route('/users').post(createUserMiddleware, user.post)

module.exports = router
