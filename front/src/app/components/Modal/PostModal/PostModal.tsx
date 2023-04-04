import PostModalBackDrop from "./PostModalBackDrop";
import PostModalContent from "./PostModalContent";

type postModalType = {
  postModalCloseHandler: () => void;
};

export default function PostModal({ postModalCloseHandler }: postModalType) {
  return (
    <>
      <PostModalBackDrop postModalCloseHandler={postModalCloseHandler}>
        <PostModalContent postModalCloseHandler={postModalCloseHandler} />
      </PostModalBackDrop>
    </>
  );
}
