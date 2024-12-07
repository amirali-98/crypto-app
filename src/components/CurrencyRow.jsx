import styles from "./CurrencyTable.module.css";

import imgChartDown from "../assets/chart-down.svg";
import imgChartUp from "../assets/chart-up.svg";

import { printCurrencyFormat, printPercentageFormat } from "../utils/helper";

function CurrencyRow({ currency }) {
  return (
    <tr className={styles.currencyRow}>
      <td>
        <img src={currency.image} alt={currency.name} />
      </td>
      <td>{currency.name}</td>
      <td>{printCurrencyFormat(currency.current_price)}</td>
      <td
        style={{
          color: currency.price_change_percentage_24h < 0 ? "red" : "green",
        }}
      >
        {printPercentageFormat(currency.price_change_percentage_24h)}
      </td>
      <td>{printCurrencyFormat(currency.total_volume)}</td>
      <td>
        <img
          className={styles.chart}
          src={
            currency.price_change_percentage_24h < 0 ? imgChartDown : imgChartUp
          }
          alt="Chart"
        />
      </td>
    </tr>
  );
}

export default CurrencyRow;
