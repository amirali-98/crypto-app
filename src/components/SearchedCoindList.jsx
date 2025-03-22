import styles from "./SearchedCoindList.module.css";

export default function SearchedCoindList({ searchedCoins }) {
  return (
    <>
      {!!searchedCoins.length && (
        <div className={styles.searchedList}>
          <ul>
            {searchedCoins.map(sc => (
              <li key={sc.id}>
                <img src={sc.thumb} alt={sc.name} />
                <p>{sc.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
