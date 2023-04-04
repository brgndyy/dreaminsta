import classes from "./HeaderSearch.module.css";
import { AiOutlineSearch } from "react-icons/ai";

type Category = {
  modalIsOpen: boolean;
  selected: string;
  modalOpenHandler: () => void;
};

export default function HeaderSearch({
  modalIsOpen,
  selected,
  modalOpenHandler,
}: Category) {
  return (
    <>
      <div
        className={`${classes.search} ${
          selected === "search" ? classes.selected : ""
        }`}
        onClick={modalOpenHandler}
      >
        <div className={`${classes.icon} ${classes.search_icon}`}>
          <AiOutlineSearch />
        </div>
        <div
          className={classes.text}
          style={{ display: modalIsOpen ? "none" : "flex" }}
        >
          <span>검색</span>
        </div>
      </div>
    </>
  );
}
