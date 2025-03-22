import { useEffect, useState } from "react";

import api from "../config/api";

import styles from "./SearchForm.module.css";
import SearchedCoindList from "./SearchedCoindList";

export default function SearchForm() {
  const [rates, setRates] = useState([]);
  const [rate, setRate] = useState("jpy");
  const [search, setSearch] = useState("");
  const [searchedCoins, setSearchedCoins] = useState([]);

  const rateHanlder = e => {
    setRate(e.target.value);
  };

  useEffect(() => {
    api.get("/exchange_rates").then(res => {
      setRates(
        Object.entries(res.rates).map(([n, { name, unit }], index) => ({
          index,
          rate: n,
          name,
          unit,
        }))
      );
    });
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    if (search.length >= 3) {
      api
        .get(`/search?query=${search}`, { signal: controller.signal })
        .then(res => setSearchedCoins(res.coins))
        .catch(e => {
          if (e.name === "CanceledError") {
            return;
          } else {
            console.log(e);
          }
        });
      return () => {
        controller.abort();
      };
    }
  }, [search]);

  return (
    <div className={styles.container}>
      <div className={styles.searchForm}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select value={rate} onChange={rateHanlder}>
          {rates.map(rate => (
            <option key={rate.index} value={rate.rate}>
              {rate.name} ({rate.unit})
            </option>
          ))}
        </select>
      </div>
      {search.length >= 3 && (
        <SearchedCoindList searchedCoins={searchedCoins} />
      )}
    </div>
  );
}
