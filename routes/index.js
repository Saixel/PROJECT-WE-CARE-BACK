const router = require('express').Router()

const authRouter = require('./auth.router.js')
const userRouter = require('./user.router.js')
const newsRouter = require('./news.router.js')
const packageRouter = require('./package.router.js')
const activityRouter = require('./activity.router.js')
const paymentsRouter = require('./payments.router.js')

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/news', newsRouter)
router.use('/content', packageRouter)
router.use('/activities', activityRouter)
router.use('/payments', activityRouter)

module.exports = router
