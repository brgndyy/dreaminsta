"use client";

import classes from "./SignUpModal.module.css";
import IsNotLoginBackDrop from "../IsNotLogin/IsNotLoginBackDrop";
import { useRef } from "react";
import { useRouter } from "next/navigation";

type SignUp = {
  email: string;
  nick: string;
  password: string;
};

export default function SignUpModal() {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const nickRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailRef.current && nickRef.current && passwordRef.current) {
      const email = emailRef.current.value;
      const nick = nickRef.current.value;
      const password = passwordRef.current.value;

      await sendForm({ email, nick, password });

      emailRef.current.value = "";
      nickRef.current.value = "";
      passwordRef.current.value = "";
    }
  };

  const sendForm = async ({ email, nick, password }: SignUp) => {
    const res = await fetch("http://localhost:3002/api/user/signup", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        nick: nick,
        password: password,
      }),
    });

    if (!res.ok) {
      throw new Error("에러가 발생했습니다!");
    }

    const data = await res.json();

    console.log(data);

    router.push("/");
  };

  return (
    <>
      <IsNotLoginBackDrop>
        <div className={classes.signup_container}>
          <div className={classes.logo_banner}>
            <h2>회원가입</h2>
          </div>
          <form
            method="POST"
            className={classes.signup_form}
            onSubmit={formSubmitHandler}
          >
            <div className={classes.section}>
              <div className={classes.label}>
                <label htmlFor="email">이메일</label>
              </div>
              <div className={classes.input}>
                <input ref={emailRef} type="text" name="email" />
              </div>
            </div>
            <div className={classes.section}>
              <div className={classes.label}>
                <label htmlFor="nick">닉네임</label>
              </div>
              <div className={classes.input}>
                <input ref={nickRef} type="text" name="nick" />
              </div>
            </div>
            <div className={classes.section}>
              <div className={classes.label}>
                <label htmlFor="password">비밀번호</label>
              </div>
              <div className={classes.input}>
                <input ref={passwordRef} type="password" name="password" />
              </div>
            </div>
            <button className={classes.form_button}>가입</button>
          </form>
        </div>
      </IsNotLoginBackDrop>
    </>
  );
}
