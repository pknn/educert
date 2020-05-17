const { Router } = require('express')
const version = require('./controllers/version')

const router = Router()

router.route('/version').get(version.get)

module.exports = router
