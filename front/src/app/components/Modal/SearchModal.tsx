import { useEffect, useState } from "react";
import classes from "./SearchModal.module.css";
import BackDrop from "./BackDrop";

type modalOpen = {
  modalIsOpen: boolean;
  modalCloseHandler: () => void;
};

export default function SearchModal({
  modalIsOpen,
  modalCloseHandler,
}: modalOpen) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (modalIsOpen) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [modalIsOpen]);

  return (
    <>
      <BackDrop modalCloseHandler={modalCloseHandler}>
        <div
          className={`${classes.search_modal_cotainer} ${
            isVisible ? (modalIsOpen ? classes.show : classes.hide) : ""
          }`}
        >
          모달내용
        </div>
      </BackDrop>
    </>
  );
}
