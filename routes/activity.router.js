const router = require("express").Router();

const { authenticate, authorize } = require("../utils/auth");

const {
  // createActivity,
  getActivities,
  getActivitiesByType,
  getActivitiesByCollective,
  getActivityById,
} = require("../controller/activity.controller");

// router.post("/", createActivity);
router.get("/", getActivities);
router.get("/type/:type", getActivitiesByType);
router.get("/collectives/:collectiveId", getActivitiesByCollective);
router.get("/:activityId", getActivityById);
// router.put("/:activityId", authenticate, authorize("admin"), updateActivity);
// router.delete("/:activityId", authenticate, authorize("admin"), deleteActivity);

module.exports = router;
