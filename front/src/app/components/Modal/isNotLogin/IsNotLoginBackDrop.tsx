import classes from "./IsNotLoginBackdrop.module.css";

type Children = {
  children: React.ReactNode;
};

export default function IsNotLoginBackDrop({ children }: Children) {
  return (
    <>
      <div className={classes.backdrop}>{children}</div>
    </>
  );
}
