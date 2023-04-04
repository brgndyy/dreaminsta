"use client";

import classes from "./MoreSetting.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import MoreSettingModal from "../Modal/MoreSettingModal";

type modalType = {
  modalIsOpen: boolean;
};

export default function MoreSetting({ modalIsOpen }: modalType) {
  const [settingModalOpen, setSettingModalOpen] = useState(false);

  const settingModalHanlder = () => {
    setSettingModalOpen(!settingModalOpen);
  };

  return (
    <>
      <MoreSettingModal settingModalHanlder={settingModalHanlder} />
      <div
        className={classes.more_setting_container}
        onClick={settingModalHanlder}
      >
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
    </>
  );
}
