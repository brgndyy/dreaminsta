import classes from "./isNotLoginBackdrop.module.css";

type Children = {
  children: React.ReactNode;
};

export default function NotLoginBackDrop({ children }: Children) {
  return (
    <>
      <div className={classes.backdrop}>{children}</div>
    </>
  );
}
