const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const HttpError = require("../error/http-error");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done, next) => {
        try {
          const exUser = await User.findOne({ where: { email } });

          if (exUser) {
            const result = await bcrypt.compare(password, exUser.password);
            if (result) {
              // 비밀번호까지 맞다면, done(null, exUser)의 exUser가
              // passport.authenticate('local', (authError, user, info)){}에
              // user 부분으로 들어가서 passport.authenticate 안의 콜백함수 실행 null은 authError로 들어감
              done(null, exUser);
            } else {
              // 아이디는 존재하지만 result값이 존재하지 않을때 done(null, false, message)의 message가
              // passport.authenticate('local', (authError, user, info)){}에
              // info 부분으로 들어감 false는 user부분으로 들어감 null은 authError
              done(null, false, { message: "비밀번호가 일치하지 않아요!" });
            }
          } else {
            // 아이디자체가 존재하지 않는다면 done(null, false, message)의 message가
            // passport.authenticate('local', (authError, user, info)){}에
            // info 부분으로 들어감 false는 user부분으로 들어감 null은 authError
            done(null, false, { message: "가입 되지 않은 회원이에요!" });
          }
        } catch (error) {
          console.error(error);
          //서버 에러시 passport.authenticate('local', (authError, user, info)){} 에
          // authError 로 들어감
          done(error);
        }
      }
    )
  );
};
