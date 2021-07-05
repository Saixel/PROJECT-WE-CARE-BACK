const router = require("express").Router();

const authRouter = require("./auth.router.js");
const userRouter = require("./user.router.js");

router.use("/auth", authRouter);
router.use("/users", userRouter);

module.exports = router;
