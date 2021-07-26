const { News } = require('../models/news.model')

exports.newPayment = (req, res) => {
  console.log('BODY ----->', req.body)
  console.log('PARAMS ----->', req.params)
};