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
  return (
    <div
      className={`${classes.search_modal_cotainer} ${
        modalIsOpen === true && classes.show
      }`}
    >
      모달내용
    </div>
  );
}
