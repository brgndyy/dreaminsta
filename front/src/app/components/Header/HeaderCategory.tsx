"use client";

import classes from "./HeaderCategory.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";

type Category = {
  category: string;
  modalIsOpen: boolean;
  selected: string;
  modalOpenHandler: (name: string) => void;
};

export default function HeaderCategory({
  category,
  modalIsOpen,
  selected,
  modalOpenHandler,
}: Category) {
  let icon;
  let className;

  if (category === "검색") {
    icon = <AiOutlineSearch />;
    className = "search";
  } else if (category === "만들기") {
    icon = <BsPlusSquare />;
    className = "post";
  } else if (category === "프로필") {
    icon = <BsPlusSquare />;
    className = "profile";
  }

  return (
    <>
      <div
        className={`${classes.category} ${
          modalIsOpen === true && selected === category ? classes.selected : ""
        }`}
        onClick={() => modalOpenHandler(category)}
      >
        <div className={`${classes.icon} ${classes[`${className}_icon`]}`}>
          {icon}
        </div>
        <div
          className={classes.text}
          style={{ display: modalIsOpen ? "none" : "flex" }}
        >
          <span>{category}</span>
        </div>
      </div>
    </>
  );
}
