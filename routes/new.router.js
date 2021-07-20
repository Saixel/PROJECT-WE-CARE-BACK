const router = require("express").Router();

const { authenticate, authorize } = require("../utils/auth");

const {
  // createNew,
  getNews,
  getNewsByCollective,
  getNewById,
} = require("../controller/new.controller");

// router.post("/", createNew);
router.get("/", getNews);
router.get("/:newId", getNewById);
router.get("/collectives/:collectiveId", getNewsByCollective);
// router.put("/:newId", authenticate, authorize("admin"), updateNew);
// router.delete("/:newId", authenticate, authorize("admin"), deleteNew);

module.exports = router;
