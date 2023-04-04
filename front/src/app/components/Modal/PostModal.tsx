import classes from "./PostModal.module.css";
import BackDrop from "./BackDrop";

type postModalType = {
  postModalCloseHandler: () => void;
};

export default function PostModal({ postModalCloseHandler }: postModalType) {
  return <div>Post</div>;
}
