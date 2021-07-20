const { News } = require('../models/news.model')

// exports.createNew = (req, res) => {};

exports.getNews = (req, res) => {
  News.find()
    .then((news) => res.status(200).json(news))
    .catch((err) => res.status(500).json(err))
}

exports.getNewById = (req, res) => {
  News.findById(req.params.newId)
    .then((news) => res.status(200).json(news))
    .catch((err) => res.status(500).json(err))
}

exports.getNewsByCollective = (req, res) => {
  News.find()
    .then((news) => {
      const newsByCollective = news.filter((item) =>
        item.collective.includes(req.params.collectiveId)
      )
      res.status(200).json(newsByCollective)
    })
    .catch((err) => res.status(500).json(err))
}

// exports.updateNew = (req, res) => {};

// exports.deleteNew = (req, res) => {};
