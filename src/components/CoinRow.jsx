import styles from "./CoinRow.module.css";

import down from "../assets/chart-down.svg";
import up from "../assets/chart-up.svg";

export default function CoinRow({ coin }) {
  return (
    <tr className={styles.coinRow}>
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
          color: coin.price_change_percentage_24h >= 0 ? "green" : "red",
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
  );
}
