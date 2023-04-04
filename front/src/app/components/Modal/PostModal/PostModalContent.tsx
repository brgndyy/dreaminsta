import classes from "./PostModalContent.module.css";

type modal = {
  postModalCloseHandler: () => void;
};

export default function PostModalContent({ postModalCloseHandler }: modal) {
  return <div>PostModalContent</div>;
}
