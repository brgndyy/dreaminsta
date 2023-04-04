import classes from "./HeaderPost.module.css";
import { BsPlusSquare } from "react-icons/bs";

type Category = {
    modalIsOpen: boolean;
    selected: string;
    modalOpenHandler: (name: string) => void;
  };

export default function HeaderPost({
    modalIsOpen,
    selected,
    modalOpenHandler,
  }: Category) {
  return <>
   <div
        className={`${classes.post} ${
          selected === "post" ? classes.selected : ""
        }`}
        onClick={() => modalOpenHandler("post")}
      >
        <div className={`${classes.icon} ${classes.post_icon}`}>
          <BsPlusSquare/>
        </div>
        <div
          className={classes.text}
          style={{ display: modalIsOpen ? "none" : "flex" }}
        >
          <span>검색</span>
        </div>
      </div>
  </>;
}
