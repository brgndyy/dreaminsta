"use client";

import classes from "./Header.module.css";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import Link from "next/link";
import MoreSetting from "./MoreSetting";
import { useState } from "react";
import SearchModal from "../Modal/SearchModal";
import HeaderLogo from "./HeaderLogo";
import HeaderCategory from "./HeaderCategory";

const category = ["검색", "만들기", "프로필"];

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
        <HeaderLogo modalIsOpen={modalIsOpen} />

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

          {category.map((category, index) => {
            return (
              <HeaderCategory
                modalOpenHandler={modalOpenHandler}
                modalIsOpen={modalIsOpen}
                selected={selected}
                key={index}
                category={category}
              />
            );
          })}
        </div>

        <MoreSetting modalIsOpen={modalIsOpen} />
      </header>
      {modalIsOpen && (
        <SearchModal
          modalCloseHandler={modalCloseHandler}
          modalIsOpen={modalIsOpen}
        />
      )}
    </>
  );
}
