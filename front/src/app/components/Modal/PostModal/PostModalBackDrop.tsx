import classes from "./PostModalBackdrop.module.css";

type Children = {
  children: React.ReactNode;
  postModalCloseHandler: () => void;
};

export default function PostModalBackDrop({
  children,
  postModalCloseHandler,
}: Children) {
  return (
    <>
      <div className={classes.backdrop} onClick={postModalCloseHandler}>
        {children}
      </div>
    </>
  );
}
