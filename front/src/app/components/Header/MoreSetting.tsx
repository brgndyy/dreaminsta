import classes from "./MoreSetting.module.css";
import { RxHamburgerMenu } from "react-icons/rx";

type modalType = {
  modalIsOpen : boolean
  moreSettingModalOpenHandler: () => void;
};

export default function MoreSetting({
  moreSettingModalOpenHandler,
  modalIsOpen
}: modalType) {
  return (
    <>
      <div
        className={classes.more_setting_container}
        onClick={moreSettingModalOpenHandler}
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
