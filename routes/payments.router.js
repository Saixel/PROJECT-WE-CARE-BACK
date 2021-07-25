const router = require('express').Router()

const { authenticate, authorize } = require('../utils/auth')

const {
  newPayment,
} = require('../controller/payments.controller')

router.post('/', newPayment)

module.exports = router
