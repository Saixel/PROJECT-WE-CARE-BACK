const router = require("express").Router();

const { authenticate, authorize } = require("../utils/auth");

const {
  createPackage,
  getPackages,
  getPackagesByCollective,
  getPackagesByAuthor,
  getPackagesByPrice,
  getPackageById,
} = require("../controller/package.controller");

router.post("/", authenticate, createPackage);
router.get("/", getPackages);
router.get("/:packageId", getPackageById);
router.get("/collective/:collectiveId", getPackagesByCollective);
router.get("/author/:authorId", getPackagesByAuthor);
router.get("/price/:price", getPackagesByPrice);
// router.put("/:packageId", authenticate, authorize("admin"), updatePackage);
// router.delete("/:packageId", authenticate, authorize("admin"), deletePackage);

module.exports = router;
