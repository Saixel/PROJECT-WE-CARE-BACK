const router = require("express").Router();

const authRouter = require("./auth.router.js");
const userRouter = require("./user.router.js");
const contentRouter = require("./content.router.js");

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/content", userRouter);

module.exports = router;
