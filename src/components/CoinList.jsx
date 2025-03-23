import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

import api from "../config/api";

import styles from "./CoinList.module.css";
import Pagination from "./Pagination";
import CoinRow from "./CoinRow";

export default function CoinList({
  rate,
  setIsModalOpened,
  setSelectedCoinId,
}) {
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
              <CoinRow
                key={coin.id}
                coin={coin}
                setIsModalOpened={setIsModalOpened}
                setSelectedCoinId={setSelectedCoinId}
              />
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
