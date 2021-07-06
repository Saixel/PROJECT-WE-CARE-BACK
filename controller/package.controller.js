const { Package } = require("../models/package.model");

// exports.createPackage = (req, res) => {};

exports.getPackages = (req, res) => {
  Package.find()
    .then((packages) => res.status(200).json(packages))
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
