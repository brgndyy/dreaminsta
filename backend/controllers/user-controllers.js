const User = require("../models/User");
const HttpError = require("../error/http-error");
const passport = require("passport");
const bcrypt = require("bcryptjs");

const getUserData = async (req, res, next) => {};

const singUp = async (req, res, next) => {};

exports.getUserData = getUserData;
exports.singUp = singUp;
