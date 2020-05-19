const { Router } = require('express')
const version = require('./controllers/version')
const {
  createUserMiddleware,
  officerAccessMiddleware,
  restrictedAccessMiddleware
} = require('./middlewares/user')
const user = require('./controllers/user')
const auth = require('./controllers/auth')
const record = require('./controllers/record')
const shareRecord = require('./controllers/shareRecord')

const router = Router()

router.route('/version').get(version.get)

router
  .route('/users')
  .post(createUserMiddleware, user.post)
  .get(user.getSelf)
router.get('/users/:id', restrictedAccessMiddleware, user.getFromID)
router.delete('/users/:id', user.delete)

router.post('/auth/login', auth.login)
router.post('/auth/logout', auth.logout)
router.post('/record', officerAccessMiddleware, record.post)
router.put('/record', officerAccessMiddleware, record.put)
router.get('/record/:id', restrictedAccessMiddleware, record.get)
router.delete('/record/:id', officerAccessMiddleware, record.delete)

router.post('/share', shareRecord.post)
router.get('/share/:id', shareRecord.get)
router.delete('/share/:id', shareRecord.delete)

module.exports = router
