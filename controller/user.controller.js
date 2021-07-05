const { User } = require("../models/user.model");

exports.whoami = (req, res) => {
  res.status(200).json(res.locals.user);
};

exports.getUsers = (req, res) => {
  User.find(req.query)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json(err));
};

exports.getUserById = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json(err));
};

exports.getProfessionals = (req, res) => {
  User.find({ role: "professional" })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json(err));
};

// exports.getProfessionalById = (req, res) => {};

// exports.updateUser = (req, res) => {
//   User.findOneAndUpdate(req.query, req.body, { new: true })
//     .then((user) => res.status(200).json(user))
//     .catch((err) => res.status(500).json(err));
// };

exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.userId)
    .then((user) => res.status(200).send(user.name + " has been deleted"))
    .catch((err) => res.status(500).json(err));
};
