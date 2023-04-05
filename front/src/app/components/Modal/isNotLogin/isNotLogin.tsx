"use client";

import classes from "./isNotLogin.module.css";
import IsNotLoginBackDrop from "./IsNotLoginBackDrop";
import { preventScroll, allowScroll } from "@/app/utils/modal";
import { useEffect } from "react";
import Link from "next/link";

export default function IsNotLogin() {
  useEffect(() => {
    const prevScrollY = preventScroll();

    return () => {
      allowScroll(prevScrollY);
    };
  }, []);

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
