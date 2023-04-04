import classes from "./SearchModal.module.css";
import SearchModalBackDrop from "./SearchModalBackDrop";
import SearchModalContent from "./SearchModalContent";

type modalOpen = {
  modalIsOpen: boolean;

  modalCloseHandler: () => void;
};

export default function SearchModal({
  modalIsOpen,

  modalCloseHandler,
}: modalOpen) {
  return (
    <>
      <SearchModalBackDrop modalCloseHandler={modalCloseHandler}>
        <div
          className={`${classes.search_modal_cotainer} ${
            modalIsOpen ? classes.show : classes.hide
          }`}
        >
          <SearchModalContent />
        </div>
      </SearchModalBackDrop>
    </>
  );
}
