const router = require("express").Router();

const { authenticate, authorize } = require("../utils/auth");

const { signup } = require("../controller/auth.controller");

const {
  whoami,
  getUsers,
  getProfessionals,
  getProfessionalById,
  getUserById,
} = require("../controller/user.controller");

// router.post("/", authenticate, authorize("admin"), signup);
router.post("/", signup);
router.get("/me", whoami);
router.get("/", getUsers);
router.get("/professionals", getProfessionals);
router.get("/professionals/:userId", getProfessionalById);
router.get("/:userId", getUserById);
// router.put("/:userId", authenticate, authorize("admin"), updateUser);
// router.delete("/:userId", authenticate, authorize("admin"), deleteUser);

module.exports = router;
