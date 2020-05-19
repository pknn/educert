const { Router } = require('express')
const version = require('./controllers/version')
const {
  createUserMiddleware,
  officerAccessMiddleware
} = require('./middlewares/user')
const user = require('./controllers/user')
const record = require('./controllers/record')
const shareRecord = require('./controllers/record')
const transaction = require('./controllers/record')


const router = Router()

router.route('/version').get(version.get)

router.route('/users').post(createUserMiddleware, user.post)
router.get('/users/student', officerAccessMiddleware)
router.get('/users/officer', officerAccessMiddleware)
router.delete('/users/:id', user.delete)

router.post('/record', record.post)
router.put('/record', record.put)
router.get('/record/:id',record.get)
router.delete('/record/:id',record.delete)

router.post('/share', shareRecord.post)
router.get('/share/:id',shareRecord.get)
router.delete('/share/:id',shareRecord.delete)

router.post('/transaction', transaction.post)
router.get('/transaction/:id',transaction.get)


module.exports = router
