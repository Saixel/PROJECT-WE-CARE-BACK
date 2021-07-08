const { User } = require("../models/user.model");
const { Collective } = require("../models/collective.model");
const { Package } = require("../models/package.model");

exports.whoami = (req, res) => {
  console.log('PRUEBAAA')
  // res.status(200).json(res.locals.user);
  res.status(200).json('HOLAAAAAAAA');
};

exports.getUsers = (req, res) => {
  User.find()
    .populate("collective")
    .then((users) => {
      res.status(200).json(
        users.map(function (user) {
          return {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            name: user.name,
            phone: user.phone,
            image: user.image,
            description: user.description,
            collective: user.collective,
            following: user.following,
            followers: user.followers,
            createdActivites: user.createdActivites,
            createdPacks: user.createdPacks,
            purchasedPacks: user.purchasedPacks,
          };
        })
      );
    })
    .catch((err) => res.status(500).json(err));
};

exports.getProfessionals = (req, res) => {
  User.find({ role: "professional" })
    .populate("collective")
    .populate("createdPacks")
    .then((users) => {
      res.status(200).json(
        users.map(function (user) {
          return {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            name: user.name,
            phone: user.phone,
            image: user.image,
            description: user.description,
            collective: user.collective,
            following: user.following,
            followers: user.followers,
            createdActivites: user.createdActivites,
            createdPacks: user.createdPacks,
            purchasedPacks: user.purchasedPacks,
          };
        })
      );
    })
    .catch((err) => res.status(500).json(err));
};

exports.getProfessionalById = (req, res) => {
  User.findById(req.params.userId)
    .populate("collective")
    .then((user) =>
      res.status(200).json({
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        name: user.name,
        phone: user.phone,
        image: user.image,
        description: user.description,
        collective: user.collective,
        following: user.following,
        followers: user.followers,
        createdActivites: user.createdActivites,
        createdPacks: user.createdPacks,
        purchasedPacks: user.purchasedPacks,
      })
    )
    .catch((err) => res.status(500).json(err));
};

exports.getUserById = (req, res) => {
  User.findById(req.params.userId)
    .populate("collective")
    .then((user) =>
      res.status(200).json({
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        name: user.name,
        phone: user.phone,
        image: user.image,
        description: user.description,
        collective: user.collective,
        following: user.following,
        followers: user.followers,
        createdActivites: user.createdActivites,
        createdPacks: user.createdPacks,
        purchasedPacks: user.purchasedPacks,
      })
    )
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
