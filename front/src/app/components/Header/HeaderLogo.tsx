import classes from "./HeaderLogo.module.css";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { usePathname } from "next/navigation";

type modalOpenType = {
  modalIsOpen: boolean;
  reloadHandler: (pathname: string) => void;
};

export default function HeaderLogo({
  modalIsOpen,
  reloadHandler,
}: modalOpenType) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={classes.home_container}
        onClick={() => {
          reloadHandler(pathname);
        }}
      >
        <Link href={"/"} className={classes.home_link}>
          <BsInstagram
            className={`${classes.insta_icon} ${
              modalIsOpen ? classes.modal_open : ""
            }`}
          />
          <p
            className={`${classes.main_logo} ${
              modalIsOpen ? classes.logo_modal_open : ""
            }`}
          >
            Instagram
          </p>
        </Link>
      </div>
    </>
  );
}
