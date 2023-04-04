import classes from "./HeaderSearch.module.css";
import { AiOutlineSearch } from "react-icons/ai";

type Category = {
  modalIsOpen: boolean;
  selected: string;
  searchModalHanlder: (name: string) => void;
};

export default function HeaderSearch({
  modalIsOpen,
  selected,
  searchModalHanlder,
}: Category) {
  return (
    <>
      <div
        className={`${classes.search} ${
          selected === "search" ? classes.selected : ""
        }`}
        onClick={() => searchModalHanlder("search")}
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
