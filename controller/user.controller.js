const { User } = require("../models/user.model");
const { Collective } = require("../models/collective.model");

exports.whoami = (req, res) => {
  res.status(200).json({ user: res.locals.user });
};

exports.getUsers = (req, res) => {
  User.find()
    .populate("collective")
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json(err));
};

exports.getProfessionals = (req, res) => {
  User.find({ role: "professional" })
    .populate("collective")
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json(err));
};

exports.getProfessionalById = (req, res) => {
  User.findById(req.params.userId)
    .populate("collective")
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json(err));
};

exports.getUserById = (req, res) => {
  User.findById(req.params.userId)
    .populate("collective")
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json(err));
};

// exports.updateUser = (req, res) => {
//   User.findOneAndUpdate(req.query, req.body, { new: true })
//     .then((user) => res.status(200).json(user))
//     .catch((err) => res.status(500).json(err));
// };

// exports.deleteUser = (req, res) => {
//   User.findByIdAndDelete(req.params.userId)
//     .then((user) => res.status(200).send(user.name + " has been deleted"))
//     .catch((err) => res.status(500).json(err));
// };
