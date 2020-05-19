const { Router } = require('express')
const version = require('./controllers/version')
const {
  createUserMiddleware,
  officerAccessMiddleware
} = require('./middlewares/user')
const user = require('./controllers/user')
const auth = require('./controllers/auth')

const router = Router()

router.route('/version').get(version.get)

router.route('/users').post(createUserMiddleware, user.post)
router.get('/users/students', officerAccessMiddleware)
router.get('/users/officers', officerAccessMiddleware)
router.delete('/users/:id', user.delete)

router.post('/auth/login', auth.login)
router.post('/auth/logout', auth.logout)

module.exports = router
