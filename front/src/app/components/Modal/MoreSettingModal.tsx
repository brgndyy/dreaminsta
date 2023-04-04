import classes from "./MoreSettingModal.module.css";

type moreSettingModalType = {
  settingModalHanlder: () => void;
};

export default function MoreSettingModal({
  settingModalHanlder,
}: moreSettingModalType) {
  return (
    <>
      <div id="more_setting_modal"></div>
    </>
  );
}
