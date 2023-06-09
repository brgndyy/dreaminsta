import classes from "./SearchModalBackDrop.module.css";

type Children = {
  children: React.ReactNode;

  modalCloseHandler: () => void;
};

export default function BackDrop({
  children,

  modalCloseHandler,
}: Children) {
  return (
    <>
      <>
        <div className={classes.back_drop} onClick={modalCloseHandler}>
          {children}
        </div>
      </>
    </>
  );
}
