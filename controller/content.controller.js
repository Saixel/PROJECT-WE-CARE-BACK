const { Package } = require("../models/package.model");

exports.getPackages = (req, res) => {
  Package.find(req.query)
    .then((packages) => res.status(200).json(packages))
    .catch((err) => res.status(500).json(err));
};

exports.getPackageByCollective = (req, res) => {
  Package.find()
    .then((packages) => {
      res.status(200).json(packages);
    })
    .catch((err) => res.status(500).json(err));
};

exports.getPackageByAuthor = (req, res) => {};

exports.getPackageByPrice = (req, res) => {
  Package.find({ price: req.params.price })
    .then((packages) => res.status(200).json(packages))
    .catch((err) => res.status(500).json(err));
};

exports.getPackageById = (req, res) => {
  Package.findById(req.params.packageId)
    .then((package) => res.status(200).json(package))
    .catch((err) => res.status(500).json(err));
};

// exports.updateUser = (req, res) => {
//   Package.findOneAndUpdate(req.query, req.body, { new: true })
//     .then((package) => res.status(200).json(package))
//     .catch((err) => res.status(500).json(err));
// };

// exports.deleteUser = (req, res) => {
//   Package.findByIdAndDelete(req.params.userId)
//     .then((package) => res.status(200).send(package.name + " has been deleted"))
//     .catch((err) => res.status(500).json(err));
// };
