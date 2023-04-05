import classes from "./isNotLogin.module.css";
import NotLoginBackDrop from "./NotLoginBackDrop";

export default function isNotLogin() {
  return (
    <>
      <NotLoginBackDrop>
        <div className={classes.container}>
          <h1>로그인 후 이용해보세요!</h1>
        </div>
      </NotLoginBackDrop>
    </>
  );
}
