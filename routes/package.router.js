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

router.post("/", createPackage);
router.get("/", getPackages);
router.get("/collective/:collectiveId", getPackagesByCollective);
router.get("/author/:authorId", getPackagesByAuthor);
router.get("/price/:price", getPackagesByPrice);
router.get("/:packageId", getPackageById);
// router.put("/:packageId", authenticate, authorize("admin"), updatePackage);
// router.delete("/:packageId", authenticate, authorize("admin"), deletePackage);

module.exports = router;
