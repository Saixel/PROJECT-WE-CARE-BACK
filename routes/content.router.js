const router = require("express").Router();

const { authenticate, authorize } = require("../utils/auth");

const {
  getPackages,
  getPackageByCollective,
  getPackageByAuthor,
  getPackageByPrice,
  getPackageById,
} = require("../controller/content.controller");

// router.post("/", authenticate, authorize(["admin", "professional"]), createPackage);
router.get("/", getPackages);
router.get("/collective/:collectiveId", getPackageByCollective);
router.get("/author/:authorId", getPackageByAuthor);
router.get("/price/:price", getPackageByPrice);
router.get("/:packageId", getPackageById);
// router.put("/:packageId", authenticate, authorize(["master", "admin"]), updatePackage);
// router.delete("/:packageId", authenticate, authorize("admin"), deletePackage);

module.exports = router;
