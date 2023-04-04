"use client";

import classes from "./MoreSetting.module.css";
import { RxHamburgerMenu } from "react-icons/rx";

type modalType = {
  modalIsOpen: boolean;
};

export default function MoreSetting({ modalIsOpen }: modalType) {
  return (
    <div className={classes.more_setting_container}>
      <div className={classes.more_setting}>
        <div className={classes.setting_icon}>
          <RxHamburgerMenu />
        </div>
        <div
          className={classes.text}
          style={{ display: modalIsOpen ? "none" : "flex" }}
        >
          <span>더 보기</span>
        </div>
      </div>
    </div>
  );
}
