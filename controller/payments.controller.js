const { User } = require('../models/user.model')

exports.newPayment = (req, res) => {
  console.log('BODY ----->', req.body)

  User.findOne({ email: req.body.email })
    .then((user) => {
      user.purchasedPacks.push(req.body.product._id)
      user.save (err => {
        if (err) return console.error('Error: ', err)
        res.status(200).json(user)
      })
    })
    .catch((err) => res.status(500).json(err))
}
