const router = require("express").Router();

const { authenticate, authorize } = require("../utils/auth");

const {
  createActivity,
  getActivities,
  getActivityById,
  getActivitiesByCollec,
  getActivitiesByAuthor,
} = require("../controller/activity.controller");

router.post("/", authenticate, createActivity);
router.get("/", authenticate, getActivities);
router.get("/:activityId", authenticate, getActivityById);
router.get("/collectives/:collectiveId", authenticate, getActivitiesByCollec);
router.get("/author/:authorId", authenticate, getActivitiesByAuthor);
// router.put("/:activityId", authenticate, authorize("admin"), updateActivity);
// router.delete("/:activityId", authenticate, authorize("admin"), deleteActivity);

module.exports = router;
