import classes from "./HeaderProfile.module.css";
import { BsPlusSquare } from "react-icons/bs";
import { useRouter } from "next/navigation";

type ModalType = {
  selected: string;
  setSelected: (profile: string) => void;
  modalIsOpen: boolean;
};

export default function HeaderProfile({
  selected,
  setSelected,
  modalIsOpen,
}: ModalType) {
  const router = useRouter();

  const profileClickHandler = () => {
    setSelected("profile");
    router.push("/accounts");
  };

  return (
    <>
      <div
        className={`${classes.profile} ${
          selected === "profile" ? classes.selected : ""
        }`}
        onClick={profileClickHandler}
      >
        <div className={`${classes.icon} ${classes.profile_icon}`}>
          <BsPlusSquare />
        </div>
        <div
          className={classes.text}
          style={{ display: modalIsOpen ? "none" : "flex" }}
        >
          <span>프로필</span>
        </div>
      </div>
    </>
  );
}
