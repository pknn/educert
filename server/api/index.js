const { Router } = require('express')
const version = require('./controllers/version')
const user = require('./controllers/users')
const auth = require('./controllers/auth')
const middleware = require('./middlewares')

const router = Router()

router.route('/version').get(version.get)

router.get('/users/me', middleware.selfAccess, user.getSelf)
router.get('/users/exists/:publicAddress', user.getAddressExists)
router.get('/users', middleware.officerAccess, user.getUsers)
router.post('/users/invite', user.invite)
router.post('/users', user.register)
router.delete(
  '/users/:publicAddress',
  middleware.officerAccess,
  user.deleteUser
)

router.post('/auth/login', auth.login)
router.post('/auth/logout', auth.logout)

module.exports = router
