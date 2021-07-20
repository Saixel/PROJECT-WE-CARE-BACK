const { Package } = require("../models/package.model");
const { Collective } = require("../models/collective.model");
const { User } = require("../models/user.model");
const { Activity } = require("../models/activity.model");

exports.createPackage = (req, res) => {
  Package.create(req.body)
    .then((package) => res.status(200).json(package))
    .catch((err) => res.status(500).json(err));
};

exports.getPackages = (req, res) => {
  Package.find()
    .populate("collective")
    .populate("author")
    .populate("content")
    .then((packages) => {
      res.status(200).json(
        packages.map(function (package) {
          return {
            id: package._id,
            title: package.title,
            description: package.description,
            instructions: package.instructions,
            price: package.price,
            date: package.date,
            author: package.author,
            collective: package.collective,
            content: package.content,
          };
        })
      );
    })
    .catch((err) => res.status(500).json(err));
};

exports.getPackagesByCollective = (req, res) => {
  Package.find({ collective: req.params.collectiveId })
    .then((packages) => res.status(200).json(packages))
    .catch((err) => res.status(500).json(err));
};

exports.getPackagesByAuthor = (req, res) => {
  Package.find({ author: req.params.authorId })
    .then((packages) => res.status(200).json(packages))
    .catch((err) => res.status(500).json(err));
};

exports.getPackagesByPrice = (req, res) => {
  Package.find({ price: req.params.price })
    .then((packages) => res.status(200).json(packages))
    .catch((err) => res.status(500).json(err));
};

exports.getPackageById = (req, res) => {
  Package.findById(req.params.packageId)
    .then((package) => res.status(200).json(package))
    .catch((err) => res.status(500).json(err));
};

// exports.updatePackage = (req, res) => {};

// exports.deletePackage = (req, res) => {};
