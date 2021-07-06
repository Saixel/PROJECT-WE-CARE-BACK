const router = require("express").Router();

const { authenticate, authorize } = require("../utils/auth");

const { signup } = require("../controller/auth.controller");

const {
  // createUser,
  whoami,
  getUsers,
  getUserById,
  getProfessionals,
  // getProfessionalById,
  // updateUser,
  deleteUser,
} = require("../controller/user.controller");

// router.post("/", authenticate, authorize("admin"), signup);
router.get("/me", authenticate, whoami);
router.get("/", authenticate, authorize("admin"), getUsers);
router.get("/professionals", getProfessionals);
router.get("/:userId", authenticate, authorize("admin"), getUserById);
// router.get("/professionals/:userId", getProfessionalById);
// router.put("/", authenticate, authorize(["master", "admin"]), updateUser);
router.delete("/:userId", authenticate, authorize("admin"), deleteUser);

module.exports = router;
