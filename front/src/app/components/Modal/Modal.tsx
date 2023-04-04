import classes from "./Modal.module.css";
import BackDrop from "./BackDrop";

type modalOpen = {
  searchModalIsOpen: boolean;
  modalIsOpen: boolean;
  searchModalHanlder: (name: string) => void;
  modalCloseHandler: () => void;
};

export default function SearchModal({
  modalIsOpen,
  searchModalIsOpen,
  searchModalHanlder,
  modalCloseHandler,
}: modalOpen) {
  return (
    <>
      <BackDrop modalCloseHandler={modalCloseHandler}>
        <div
          className={`${classes.search_modal_cotainer} ${
            modalIsOpen ? classes.show : classes.hide
          }`}
        >
          모달내용
        </div>
      </BackDrop>
    </>
  );
}
