import classes from "./MoreSettingModal.module.css";

type moreSettingModalType = {
  moreSettingModalCloseHandler: () => void;
};

export default function MoreSettingModal({
  moreSettingModalCloseHandler,
}: moreSettingModalType) {
  return (
    <>
      <div
        className={classes.modal_container}
        onClick={moreSettingModalCloseHandler}
      >
        <h1>더보기 모달</h1>
      </div>
    </>
  );
}
