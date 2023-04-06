const HttpError = require("../error/http-error");

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    const error = new HttpError("로그인이 필요해요!", 403);
    return next(error);
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    const error = new HttpError("이미 로그인이 되어있어요!", 403);
  }
};
