import classes from "./HeaderCategory.module.css";
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

  if (category === "만들기") {
    icon = <BsPlusSquare />;
    className = "post";
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
