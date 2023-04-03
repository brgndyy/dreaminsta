"use client";

import classes from "./MoreSetting.module.css";
import { RxHamburgerMenu } from "react-icons/rx";

export default function MoreSetting() {
  return (
    <div className={classes.more_setting_container}>
      <div className={classes.more_setting}>
        <div className={classes.setting_icon}>
          <RxHamburgerMenu />
        </div>
        <span>더 보기</span>
      </div>
    </div>
  );
}
