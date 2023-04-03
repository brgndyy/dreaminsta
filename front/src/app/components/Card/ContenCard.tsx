import classes from "./ContentCard.module.css";

type childrenType = {
  children: React.ReactNode;
};

export default function ContentCard({ children }: childrenType) {
  return <div className={classes.content_card}>{children}</div>;
}
