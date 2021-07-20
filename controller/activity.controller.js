const { Activity } = require('../models/activity.model')

exports.createActivity = (req, res) => {
  Activity.create(req.body)
    .then((activity) => res.status(200).json(activity))
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

exports.getActivities = (req, res) => {
  Activity.find()
    .then((activities) => {
      res.status(200).json(
        activities.map(function (activity) {
          return {
            id: activity._id,
            title: activity.title,
            description: activity.description,
            instructions: activity.instructions,
            author: activity.author,
            collective: activity.collective,
            phrase: activity.phrase,
            pieces: shuffle(activity.phrase),
          }
        })
      )
    })
    .catch((err) => res.status(500).json(err))
}

exports.getActivitiesByCollec = (req, res) => {
  Activity.find()
    .then((activities) => {
      const activitiesByCollective = activities.filter((item) =>
        item.collective.includes(req.params.collectiveId)
      )
      res.status(200).json(activitiesByCollective)
    })
    .catch((err) => res.status(500).json(err))
}

exports.getActivitiesByAuthor = (req, res) => {
  Activity.find({ author: req.params.authorId })
    .then((activities) => res.status(200).json(activities))
    .catch((err) => res.status(500).json(err))
}

exports.getActivityById = (req, res) => {
  Activity.findById(req.params.activityId)
    .then((activity) => res.status(200).json(activity))
    .catch((err) => res.status(500).json(err))
}

// exports.updateActivity = (req, res) => {};

// exports.deleteActivity = (req, res) => {};
