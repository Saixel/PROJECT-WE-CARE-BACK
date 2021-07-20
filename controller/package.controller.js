const { Package } = require("../models/package.model");
const { Collective } = require("../models/collective.model");
const { Activity } = require("../models/activity.model");
const { User } = require("../models/user.model");

exports.createPackage = (req, res) => {
  Package.create(req.body)
    .then((package) => res.status(200).json(package))
    .catch((err) => res.status(500).json(err));
};

exports.getPackages = (req, res) => {
  Package.find()
    .populate("collective")
    .populate("author")
    .select({ content: 0})
    .then((packages) => res.status(200).json(packages))
    .catch((err) => res.status(500).json(err));
};

exports.getPackagesByCollective = (req, res) => {
  Package.find()
    .populate("collective")
    .then((packages) => {
      const packagesByCollective = packages.filter((item) =>
        // item.collective.includes(req.params.collectiveId)
        item.collective.filter(obj => obj._id === req.params.collectiveId)
      );
      res.status(200).json(packagesByCollective);
    })
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
