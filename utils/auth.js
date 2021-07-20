const jwt = require("jsonwebtoken");
const { User } = require("../models/user.model");

// AUTHENTICATE MIDDLEWARE
exports.authenticate = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    res.status(403).json({ error: "No token found" });
  } else {
    jwt.verify(token, process.env.JWT_SECRET || "secret", (err, token) => {
      if (err) {
        res.status(403).json({ error: "Token not valid" });
      }
      User.findOne({ email: token.email })
        .then((user) => {
          res.locals.user = user;
          next();
        })
        .catch((err) => res.json(err));
    });
  }
};

// AUTHORIZE MIDDLEWARE
exports.authorize = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(res.locals.user.role)) {
      res.status(403).send("Acces denied");
    }
    next();
  };
};
