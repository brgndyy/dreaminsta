import classes from "./HeaderLogo.module.css";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";

type modalOpenType = {
  modalIsOpen: boolean;
};

export default function HeaderLogo({ modalIsOpen }: modalOpenType) {
  return (
    <>
      <div className={classes.home_container}>
        <Link href={"/"} className={classes.home_link}>
          <BsInstagram
            className={`${classes.insta_icon} ${
              modalIsOpen ? classes.modal_open : ""
            }`}
          />
          <p
            className={`${classes.main_logo} ${
              modalIsOpen ? classes.logo_modal_open : ""
            }`}
          >
            Instagram
          </p>
        </Link>
      </div>
    </>
  );
}
