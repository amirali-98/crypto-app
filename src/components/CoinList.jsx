import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

import api from "../config/api";

import down from "../assets/chart-down.svg";
import up from "../assets/chart-up.svg";

import styles from "./CoinList.module.css";
import Pagination from "./Pagination";

export default function CoinList({ rate }) {
  const [coins, setCoins] = useState({
    total: 0,
    data: [],
  });
  const [page, setPage] = useState(1);
  useEffect(() => {
    api
      .get(`/coins/markets?vs_currency=${rate}&per_page=20&page=${page}`)
      .then(res => {
        setCoins({
          total: 100,
          data: res,
        });
      })
      .catch(err => console.log(err));
  }, [rate, page]);

  return (
    <div className={styles.container}>
      {coins.data.length ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24H</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.data.map(coin => (
              <tr key={coin.id}>
                <td>
                  <div className={styles.coinImage}>
                    <img src={coin.image} alt={coin.name} />
                    <p>{coin.name}</p>
                  </div>
                </td>
                <td>{coin.name}</td>
                <td>${coin.current_price.toLocaleString()}</td>
                <td
                  style={{
                    color:
                      coin.price_change_percentage_24h >= 0 ? "green" : "red",
                  }}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td>${coin.total_volume.toLocaleString()}</td>
                <td>
                  <img
                    src={coin.price_change_percentage_24h >= 0 ? up : down}
                    alt="chart"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={styles.loaderContainer}>
          <MoonLoader color="#9ba2ff" loading size={100} />
        </div>
      )}
      <Pagination totalCoins={coins.total} page={page} setPage={setPage} />
    </div>
  );
}
