const { Activity } = require("../models/activity.model");

// exports.createActivity = (req, res) => {};

exports.getActivities = (req, res) => {
  Activity.find()
    .then((activities) => res.status(200).json(activities))
    .catch((err) => res.status(500).json(err));
};

exports.getActivitiesByType = (req, res) => {
  Activity.find({ type: req.params.type })
    .then((activities) => res.status(200).json(activities))
    .catch((err) => res.status(500).json(err));
};

exports.getActivitiesByCollective = (req, res) => {
  Activity.find({ collective: req.params.collectiveId })
    .then((activities) => res.status(200).json(activities))
    .catch((err) => res.status(500).json(err));
};

exports.getActivityById = (req, res) => {
  Activity.findById(req.params.activityId)
    .then((activity) => res.status(200).json(activity))
    .catch((err) => res.status(500).json(err));
};

// exports.updateActivity = (req, res) => {};

// exports.deleteActivity = (req, res) => {};
