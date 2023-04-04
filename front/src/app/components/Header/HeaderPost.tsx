import classes from "./HeaderPost.module.css";
import { BsPlusSquare } from "react-icons/bs";

type Category = {
  modalIsOpen: boolean;
  selected: string;
  postModalOpenHandler: () => void;
};

export default function HeaderPost({
  modalIsOpen,
  selected,
  postModalOpenHandler,
}: Category) {
  return (
    <>
      <div
        className={`${classes.post} ${
          selected === "post" ? classes.selected : ""
        }`}
        onClick={postModalOpenHandler}
      >
        <div className={`${classes.icon} ${classes.post_icon}`}>
          <BsPlusSquare />
        </div>
        <div
          className={classes.text}
          style={{ display: modalIsOpen ? "none" : "flex" }}
        >
          <span>만들기</span>
        </div>
      </div>
    </>
  );
}
