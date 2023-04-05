const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const HttpError = require("./error/http-error");
const userRoutes = require("./routes/user-routes");
const { sequelize } = require("./models");

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 3002);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터 베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
      signed: true,
    },
    name: "user_cookie",
  })
);

app.use("/api/user", userRoutes);

app.use((req, res, next) => {
  const error = new HttpError("해당 페이지를 찾을 수 없어요!", 404);
  throw error;
});

app.use((req, res, next, error) => {
  res.status(error.code || 500);
  res.json({ message: error.message || "오류가 발생했어요!" });
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
