"use client";

import classes from "./Header.module.css";
import MoreSetting from "./MoreSetting";
import { useState } from "react";
import SearchModal from "../Modal/SearchModal/SearchModal";
import HeaderLogo from "./HeaderLogo";
import HeaderHome from "./HeaderHome";
import HeaderProfile from "./HeaderProfile";
import HeaderSearch from "./HeaderSearch";
import HeaderPost from "./HeaderPost";
import PostModal from "../Modal/PostModal/PostModal";

export default function Header() {
  const [postModalIsOpen, setPostModalIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const postModalOpenHandler = () => {
    setPostModalIsOpen(!postModalIsOpen);
  };

  const postModalCloseHandler = () => {
    setPostModalIsOpen(false);
  };

  const modalOpenHandler = () => {
    setPostModalIsOpen(false);
    setModalIsOpen(!modalIsOpen);
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
            postModalOpenHandler={postModalOpenHandler}
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

      <SearchModal
        modalIsOpen={modalIsOpen}
        modalCloseHandler={modalCloseHandler}
      />
      {postModalIsOpen && (
        <PostModal postModalCloseHandler={postModalCloseHandler} />
      )}
    </>
  );
}
