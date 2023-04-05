const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user-controllers");

router.get("/", userControllers.getUserData);

module.exports = router;
