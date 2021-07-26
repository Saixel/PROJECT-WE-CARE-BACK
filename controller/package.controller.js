const { Package } = require('../models/package.model')
const { Collective } = require('../models/collective.model')
const { Activity } = require('../models/activity.model')
const { User } = require('../models/user.model')

exports.createPackage = (req, res) => {
  Package.create(req.body)
    .then((package) => res.status(200).json(package))
    .catch((err) => res.status(500).json(err))
}

exports.getPackages = (req, res) => {
  Package.find()
    .populate('collective')
    .populate('author')
    .select({ content: 0 })
    .then((packages) => res.status(200).json(packages))
    .catch((err) => res.status(500).json(err))
}

exports.getPackagesByCollective = (req, res) => {
  Package.find()
    .populate('collective')
    .populate('author')
    .select({ content: 0 })
    .then((packages) => {
      const packagesByCollective = packages.filter((item) =>
        // item.collective.includes(req.params.collectiveId)
        item.collective.filter((obj) => obj._id === req.params.collectiveId)
      )
      res.status(200).json(packagesByCollective)
    })
    .catch((err) => res.status(500).json(err))
}

exports.getPackagesByAuthor = (req, res) => {
  Package.find({ author: req.params.authorId })
    .populate('collective')
    .populate('author')
    .select({ content: 0 })
    .then((packages) => res.status(200).json(packages))
    .catch((err) => res.status(500).json(err))
}

exports.getPackagesByPrice = (req, res) => {
  Package.find({ price: req.params.price })
    .populate('collective')
    .populate('author')
    .select({ content: 0 })
    .then((packages) => res.status(200).json(packages))
    .catch((err) => res.status(500).json(err))
}

// ESTO HAY QUE MOVERLO A UTILS
function shuffle(string) {
  var array = string.split(' ')
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

exports.getPackageById = (req, res) => {
  Package.findById(req.params.packageId)
    .populate('collective')
    .populate('author')
    .populate('content')
    .then((package) => res.status(200).json(package))
    .catch((err) => res.status(500).json(err))
}

exports.getActivitiesByPackage = (req, res) => {
  Package.findById(req.params.packageId)
    .populate('collective')
    .populate('content')
    .then((package) => {
      const activitiesCompl = package.content.map(function (activity) {
        return {
          // title: activity.title,
          // _id: activity._id,
          activity,
          pieces: shuffle(activity.phrase),
        }
      })

      res.status(200).json(activitiesCompl)
    })
    .catch((err) => res.status(500).json(err))
}

// exports.updatePackage = (req, res) => {};

// exports.deletePackage = (req, res) => {};
