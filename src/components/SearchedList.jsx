import { useEffect, useState } from "react";

import styles from "./SearchForm.module.css";

function SearchedList({ search }) {
  const [searchedListName, setSearchedListName] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://api.coingecko.com/api/v3/search?query=${search}`, {
      signal: controller.signal,
      method: "GET",
      "x-cg-demo-api-key": "CG-eZkgTF9pPKFWBioyGfENnpdb",
    })
      .then(res => res.json())
      .then(json => setSearchedListName(json.coins))
      .catch(err => {
        if (err.name === "AbortError") {
          return;
        }
      });

    return () => {
      controller.abort();
    };
  }, [search]);
  return (
    <div className={styles.searchedContainer}>
      <ul>
        {searchedListName.map(searched => {
          return (
            <li key={searched.id}>
              <span>
                <img src={searched.thumb} alt={searched.name} />
              </span>
              <span>{searched.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchedList;
