const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user-controllers");

router.get("/", userControllers.getUserData);

router.post("/signup", userControllers.singUp);

module.exports = router;
