"use client";

import classes from "./Header.module.css";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { BsPlusSquare } from "react-icons/bs";
import MoreSetting from "./MoreSetting";
import { useState } from "react";

export default function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalHandler = () => {
    setModalIsOpen(true);
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
            Instagram
          </Link>
        </div>
        <div className={classes.link_container}>
          <Link href={"/"} className={classes.home} onClick={modalHandler}>
            <div
              className={`${classes.icon} ${classes.home_icon} ${
                modalIsOpen && classes.icon_modal_open
              }`}
            >
              <AiFillHome />
            </div>
            <div className={classes.text}>
              <span>홈</span>
            </div>
          </Link>
          <div className={classes.search} onClick={modalHandler}>
            <div className={`${classes.icon} ${classes.search_icon}`}>
              <AiOutlineSearch />
            </div>
            <div className={classes.text}>
              <span>검색</span>
            </div>
          </div>
          <div className={classes.post} onClick={modalHandler}>
            <div className={`${classes.icon} ${classes.post_icon}`}>
              <BsPlusSquare />
            </div>
            <div className={classes.text}>
              <span>만들기</span>
            </div>
          </div>
          <div className={classes.profile} onClick={modalHandler}>
            <div className={`${classes.icon} ${classes.profile_icon}`}>
              <BsPlusSquare />
            </div>
            <div className={classes.text}>
              <span>프로필</span>
            </div>
          </div>
        </div>
        <div id="modal"></div>
        <MoreSetting />
      </header>
    </>
  );
}
