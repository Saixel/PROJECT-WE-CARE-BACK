const router = require("express").Router();

const authRouter = require("./auth.router.js");
const userRouter = require("./user.router.js");
const newRouter = require("./new.router.js");
const packageRouter = require("./package.router.js");
const activityRouter = require("./activity.router.js");

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/news", newRouter);
router.use("/content", packageRouter);
router.use("/activities", activityRouter);

module.exports = router;
