const { Router } = require('express')
const version = require('./controllers/version')
const {
  createUserMiddleware,
  officerAccessMiddleware
} = require('./middlewares/user')
const user = require('./controllers/user')

const router = Router()

router.route('/version').get(version.get)

router.route('/users').post(createUserMiddleware, user.post)
router.get('/users/student', officerAccessMiddleware)
router.get('/users/officer', officerAccessMiddleware)
router.delete('/users/:id', user.delete)

module.exports = router
