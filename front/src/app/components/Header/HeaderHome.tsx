import classes from "./HeaderHome.module.css";
import Link from "next/link";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { usePathname } from "next/navigation";

type modalOpen = {
  modalIsOpen: boolean;
  reloadHandler: (pathname: string) => void;
};

export default function HeaderHome({ modalIsOpen, reloadHandler }: modalOpen) {
  const pathname = usePathname();

  return (
    <>
      <Link
        href={"/"}
        className={classes.home}
        onClick={() => {
          reloadHandler(pathname);
        }}
      >
        <div
          className={`${classes.icon} ${classes.home_icon} ${
            modalIsOpen && classes.icon_modal_open
          }`}
        >
          {modalIsOpen ? <AiOutlineHome /> : <AiFillHome />}
        </div>
        <div
          className={classes.text}
          style={{ display: modalIsOpen ? "none" : "flex" }}
        >
          <span>홈</span>
        </div>
      </Link>
    </>
  );
}
