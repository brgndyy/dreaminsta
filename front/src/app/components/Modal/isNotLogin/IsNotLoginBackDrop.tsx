"use client";
import classes from "./IsNotLoginBackdrop.module.css";
import { useEffect } from "react";
import { preventScroll, allowScroll } from "@/utils/modal";

type Children = {
  children: React.ReactNode;
};

export default function IsNotLoginBackDrop({ children }: Children) {
  useEffect(() => {
    const preventScrollY = preventScroll();

    return () => {
      allowScroll(preventScrollY);
    };
  }, []);

  return (
    <>
      <div className={classes.backdrop}>{children}</div>
    </>
  );
}
