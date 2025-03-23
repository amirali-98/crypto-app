import styles from "./Pagination.module.css";

const PER_PAGE = 20;

export default function Pagination({ totalCoins, page, setPage }) {
  const prevPageHandler = () => {
    if (page > 1) {
      setPage(page => page - 1);
    }
  };
  const nextPageHandler = () => {
    if (page < totalCoins / PER_PAGE) {
      setPage(page => page + 1);
    }
  };

  return (
    <div>
      <div className={styles.pagination}>
        <button
          className={page === 1 ? styles.disabled : ""}
          onClick={prevPageHandler}
        >
          Prev
        </button>
        <p className={page === 1 && styles.current}>1</p>
        {page > 1 && page < totalCoins / PER_PAGE ? (
          <div>
            <span>...</span>
            <p className={styles.current}>{page}</p>
            <span>...</span>
          </div>
        ) : (
          <p>...</p>
        )}
        <p className={page === totalCoins / PER_PAGE && styles.current}>
          {totalCoins / PER_PAGE}
        </p>
        <button
          className={page === totalCoins / PER_PAGE ? styles.disabled : ""}
          onClick={nextPageHandler}
        >
          Next
        </button>
      </div>
    </div>
  );
}
