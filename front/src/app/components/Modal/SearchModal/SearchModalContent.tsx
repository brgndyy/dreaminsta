import classes from "./SearchModalContent.module.css";

export default function SearchModalContent() {
  return (
    <>
      <div className={classes.content_container}>
        <div className={classes.content_banner}>
          <h2>검색</h2>
        </div>
        <div className={classes.content_search_and_history}>
          <div className={classes.search_container}></div>
          <div className={classes.history_container}>
            <div>
              <span>최근 검색 항목</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
