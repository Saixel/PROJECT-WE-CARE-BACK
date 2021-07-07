const router = require("express").Router();

const { authenticate, authorize } = require("../utils/auth");

const {
  createActivity,
  getActivities,
  getActivitiesByCollective,
  getActivitiesByAuthor,
  getActivitiesByType,
  getActivityById,
} = require("../controller/activity.controller");

router.post("/", createActivity);
router.get("/", getActivities);
router.get("/collectives/:collectiveId", getActivitiesByCollective);
router.get("/author/:authorId", getActivitiesByAuthor);
router.get("/type/:type", getActivitiesByType);
router.get("/:activityId", getActivityById);
// router.put("/:activityId", authenticate, authorize("admin"), updateActivity);
// router.delete("/:activityId", authenticate, authorize("admin"), deleteActivity);

module.exports = router;
