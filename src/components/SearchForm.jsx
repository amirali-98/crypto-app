import { useState, useEffect } from "react";

import styles from "./SearchForm.module.css";

import SearchedList from "./SearchedList";

function SearchForm({ supportCurrency, setSupportCurrency }) {
  const [search, setSearch] = useState("");
  const [supportCurrencies, setSupportCurrencies] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/simple/supported_vs_currencies", {
      method: "GET",
      headers: {
        "x-cg-demo-api-key": "CG-eZkgTF9pPKFWBioyGfENnpdb",
      },
    })
      .then(res => res.json())
      .then(json => setSupportCurrencies(json));
  }, []);

  function searchHandler(e) {
    setSearch(e.target.value);
  }

  function supportCurrencyHandler(e) {
    setSupportCurrency(e.target.value);
  }

  return (
    <div className={styles.searchForm}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchHandler}
      />
      <select value={supportCurrency} onChange={supportCurrencyHandler}>
        {supportCurrencies.map(sc => (
          <option key={sc} value={sc}>
            {sc}
          </option>
        ))}
      </select>
      {!!search.length && <SearchedList search={search} />}
    </div>
  );
}

export default SearchForm;
