const User = require("../models/User");
const HttpError = require("../error/http-error");
const passport = require("passport");
const bcrypt = require("bcryptjs");

const getUserData = async (req, res, next) => {
  res.json({});
};

const signUp = async (req, res, next) => {
  const { email, nick, password } = req.body;

  let newUser;

  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      const error = new HttpError("이미 존재하는 회원이에요!", 422);
      return next(error);
    }
    const hash = await bcrypt.hash(password, 12);

    newUser = await User.create({
      email,
      nick,
      password: hash,
    });

    req.login(newUser, (err) => {
      if (err) {
        console.error(err);
        return next(err);
      }
      res.json({ newUser });
    });
  } catch (err) {
    const error = new HttpError("회원가입 중 문제가 발생했어요!", 500);

    return next(error);
  }
};

exports.getUserData = getUserData;
exports.signUp = signUp;
