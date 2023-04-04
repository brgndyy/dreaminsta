"use client";

import classes from "./Header.module.css";
import MoreSetting from "./MoreSetting";
import { useState } from "react";
import Modal from "../Modal/Modal";
import HeaderLogo from "./HeaderLogo";
import HeaderCategory from "./HeaderCategory";
import HeaderHome from "./HeaderHome";
import HeaderProfile from "./HeaderProfile";
import HeaderSearch from "./HeaderSearch";
import HeaderPost from "./HeaderPost";

const category = ["만들기"];

export default function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const modalOpenHandler = (name: string) => {
    setSelected(name);
    setModalIsOpen(true);
  };

  const modalCloseHandler = () => {
    setSelected("");
    setModalIsOpen(false);
  };

  const reloadHandler = (pathname: string) => {
    if (pathname === "/") {
      window.location.reload();
    }
  };

  return (
    <>
      <header
        className={`${classes.header_container} ${
          modalIsOpen ? classes.modal_open : ""
        }`}
      >
        <HeaderLogo modalIsOpen={modalIsOpen} reloadHandler={reloadHandler} />

        <div className={classes.link_container}>
          <HeaderHome modalIsOpen={modalIsOpen} reloadHandler={reloadHandler} />
          <HeaderSearch
            modalOpenHandler={modalOpenHandler}
            modalIsOpen={modalIsOpen}
            selected={selected}
          />

          <HeaderPost
            modalOpenHandler={modalOpenHandler}
            modalIsOpen={modalIsOpen}
            selected={selected}
          />
          <HeaderProfile
            selected={selected}
            modalIsOpen={modalIsOpen}
            setSelected={setSelected}
          />
        </div>

        <MoreSetting modalIsOpen={modalIsOpen} />
      </header>

      <Modal modalCloseHandler={modalCloseHandler} modalIsOpen={modalIsOpen} />
    </>
  );
}
