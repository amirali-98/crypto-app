import { useEffect, useState } from "react";

import CurrencyRow from "./CurrencyRow";
import Pagination from "./Pagination";

import styles from "./CurrencyTable.module.css";

function CurrencyTable({ supportCurrency, setSelectedCurrency, setModalOpen }) {
  const [currencies, setCurrencies] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${supportCurrency}&per_page=20&page=${page}`,
      {
        method: "GET",
        headers: {
          "x-cg-demo-api-key": "CG-eZkgTF9pPKFWBioyGfENnpdb",
        },
      }
    )
      .then(res => res.json())
      .then(json => setCurrencies(json));
  }, [supportCurrency, page]);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.currencyTable}>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>Total Volume</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map(cr => (
            <CurrencyRow
              key={cr.id}
              currency={cr}
              setSelectedCurrency={setSelectedCurrency}
              setModalOpen={setModalOpen}
            />
          ))}
        </tbody>
      </table>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default CurrencyTable;
