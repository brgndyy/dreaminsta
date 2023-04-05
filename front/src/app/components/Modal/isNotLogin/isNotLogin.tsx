import classes from "./isNotLogin.module.css";
import IsNotLoginBackDrop from "./IsNotLoginBackDrop";

import Link from "next/link";

export default function IsNotLogin() {
  return (
    <>
      <IsNotLoginBackDrop>
        <div className={classes.container}>
          <h1>회원가입 후 이용해보세요!</h1>
          <Link href={"/signup"}>회원가입 하러 가기</Link>
        </div>
      </IsNotLoginBackDrop>
    </>
  );
}
