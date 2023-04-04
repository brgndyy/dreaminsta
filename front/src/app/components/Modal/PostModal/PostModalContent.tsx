import classes from "./PostModalContent.module.css";

type modal = {
  postModalCloseHandler: () => void;
};

export default function PostModalContent({ postModalCloseHandler }: modal) {
  return (
    <div className={classes.content_container}>
      <div className={classes.post_banner}>
        <span>새 게시물 만들기</span>
      </div>
    </div>
  );
}
