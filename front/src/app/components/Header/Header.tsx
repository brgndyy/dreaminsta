"use client";

import classes from "./Header.module.css";
import { AiFillHome, AiOutlineSearch, AiOutlineHome } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";
import { BsPlusSquare } from "react-icons/bs";
import MoreSetting from "./MoreSetting";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <header
        className={`${classes.header_container} ${
          modalIsOpen ? classes.modal_open : ""
        }`}
      >
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
          <div className={classes.search} onClick={modalHandler}>
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
          <div className={classes.post} onClick={modalHandler}>
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
          <div className={classes.profile} onClick={modalHandler}>
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
