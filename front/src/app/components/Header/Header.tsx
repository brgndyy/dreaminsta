"use client";

import classes from "./Header.module.css";
import { AiFillHome, AiOutlineSearch, AiOutlineHome } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";
import { BsPlusSquare } from "react-icons/bs";
import MoreSetting from "./MoreSetting";
import { useState } from "react";
import { createPortal } from "react-dom";
import SearchModal from "../Modal/SearchModal";
import BackDrop from "../Modal/BackDrop";

export default function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const modalOpenHandler = (name: string) => {
    setSelected(name);
    setModalIsOpen(!modalIsOpen);
  };

  const modalCloseHandler = () => {
    setSelected("");
    setModalIsOpen(false);
  };

  return (
    <>
      <header
        className={`${classes.header_container} ${
          modalIsOpen ? classes.modal_open : ""
        }`}
      >
        {selected === "search" &&
          modalIsOpen &&
          document.getElementById("search_modal") &&
          createPortal(
            <BackDrop modalCloseHandler={modalCloseHandler}>
              <SearchModal
                modalCloseHandler={modalCloseHandler}
                modalIsOpen={modalIsOpen}
              />
            </BackDrop>,
            document.getElementById("search_modal")!
          )}
        <div id="search_modal"></div>
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
              Instagram{" "}
            </p>
          </Link>
        </div>
        <div className={classes.link_container}>
          <Link href={"/"} className={classes.home}>
            <div
              className={`${classes.icon} ${classes.home_icon} ${
                modalIsOpen && classes.icon_modal_open
              }`}
            >
              {modalIsOpen ? <AiOutlineHome /> : <AiFillHome />}
            </div>
            <div
              className={classes.text}
              style={{ display: modalIsOpen ? "none" : "flex" }}
            >
              <span>홈</span>
            </div>
          </Link>
          <div
            className={`${classes.search} ${
              modalIsOpen === true && selected === "search"
                ? classes.selected
                : ""
            }`}
            onClick={() => modalOpenHandler("search")}
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
          <div
            className={`${classes.post} ${
              modalIsOpen === true && selected === "post"
                ? classes.selected
                : ""
            }`}
            onClick={() => modalOpenHandler("post")}
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
          <div
            className={`${classes.profile} ${
              modalIsOpen === true && selected === "profile"
                ? classes.selected
                : ""
            }`}
            onClick={() => modalOpenHandler("profile")}
          >
            <div className={`${classes.icon} ${classes.profile_icon}`}>
              <BsPlusSquare />
            </div>
            <div
              className={classes.text}
              style={{ display: modalIsOpen ? "none" : "flex" }}
            >
              <span>프로필</span>
            </div>
          </div>
        </div>
        <div id="modal"></div>
        <MoreSetting modalIsOpen={modalIsOpen} />
      </header>
    </>
  );
}
