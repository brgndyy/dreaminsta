const passport = require("passport");
const local = require("./localStrategy");
const User = require("../models/User");

module.exports = () => {
  //passport.authenticate 콜백함수에서 req.login 함수 실행해서 serializeUser 함수 실행.
  // serializeUser 메서드는 req.session 객체에 어떤 정보를 저장할건지 정하는 메서드
  passport.serializeUser((user, done) => {
    done(null, user.id); //req.session에 id 정보를 넣겠다.
  });

  // deserializeUser 메서드는 app.js안에 있는 passport.session() 미들웨어가 실행되면 호출됨
  // 로그인 후에 매 요청마다 실행됨
  passport.deserializeUser((id, done) => {
    // 위에 serializeUser에서 세션에 저장한 id를 받아서 데이터베이스에서 조회
    User.findOne({ where: { id } })
      .then((user) => done(null, user)) //조회가 성공했다면 req.user에 저장됨
      .catch((err) => done(err));
  });

  local(); // 함수가 실행되는것이 아니라 passportConfig() 내에서 로컬 전략을 등록하기 위해서 사용됨.
};
