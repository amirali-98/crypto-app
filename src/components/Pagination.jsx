import { useState } from "react";

import styles from "./Pagination.module.css";

function Pagination({ page, setPage }) {
  function prevClickHandler() {
    if (page > 1) {
      setPage(page => page - 1);
    }
  }

  function nextClickHandler() {
    if (page < 13) {
      setPage(page => page + 1);
    }
  }

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.pagination}>
        <button
          className={page === 1 ? styles.disabled : ""}
          onClick={prevClickHandler}
        >
          Previous
        </button>
        <p className={page === 1 ? styles.active : ""}>1</p>
        <p className={page === 2 ? styles.active : ""}>2</p>
        {page > 2 && page < 12 ? (
          <>
            <span>...</span>
            <p className={styles.active}>{page}</p>
            <span>...</span>
          </>
        ) : (
          <span>...</span>
        )}
        <p className={page === 12 ? styles.active : ""}>12</p>
        <p className={page === 13 ? styles.active : ""}>13</p>
        <button
          className={page === 13 ? styles.disabled : ""}
          onClick={nextClickHandler}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
