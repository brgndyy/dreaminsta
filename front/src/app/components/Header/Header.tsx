"use client";

import classes from "./Header.module.css";
import MoreSetting from "./MoreSetting";
import { useState } from "react";
import Modal from "../Modal/Modal";
import HeaderLogo from "./HeaderLogo";
import HeaderHome from "./HeaderHome";
import HeaderProfile from "./HeaderProfile";
import HeaderSearch from "./HeaderSearch";
import HeaderPost from "./HeaderPost";

export default function Header() {
  const [searchModalIsOpen, setSearchModalIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const modalOpenHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const searchModalHanlder = (name: string) => {
    modalOpenHandler();
    setSelected(name);
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
            searchModalHanlder={searchModalHanlder}
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

      <Modal
        searchModalHanlder={searchModalHanlder}
        searchModalIsOpen={searchModalIsOpen}
        modalIsOpen={modalIsOpen}
        modalCloseHandler={modalCloseHandler}
      />
    </>
  );
}
