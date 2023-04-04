"use client";

import classes from "./Header.module.css";
import MoreSetting from "./MoreSetting";
import { useState } from "react";
import SearchModal from "../Modal/SearchModal";
import HeaderLogo from "./HeaderLogo";
import HeaderCategory from "./HeaderCategory";
import HeaderHome from "./HeaderHome";
import { usePathname } from "next/navigation";

const category = ["검색", "만들기", "프로필"];

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
