import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import api from "../config/api";

import styles from "./Modal.module.css";

export default function Modal({ setIsModalOpened, selectedCoinId, rate }) {
  const [data, setData] = useState([]);
  const [duration, setDuration] = useState(7);
  useEffect(() => {
    api
      .get(
        `/coins/${selectedCoinId}/market_chart?vs_currency=${rate}&days=${duration}&interval=daily&precision=2'`
      )
      .then(res => {
        setData(
          res.prices.map(([date, price]) => {
            return {
              date: new Date(date).getDate(),
              price,
            };
          })
        );
      });
  }, [selectedCoinId, rate, duration]);

  const closeModalHandler = () => {
    setIsModalOpened(false);
  };

  return (
    <div className={styles.container} onClick={closeModalHandler}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <ResponsiveContainer width="100%" height="93%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={["auto", "auto"]} />
            <Tooltip content={<CustomToolTip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#9ba2ff"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          </LineChart>
        </ResponsiveContainer>
        <div className={styles.actionBtn}>
          <button onClick={() => setDuration(7)}>7 Days</button>
          <button onClick={() => setDuration(30)}>30 Days</button>
        </div>
      </div>
    </div>
  );
}

function CustomToolTip({ active, payload }) {
  if (active) {
    return (
      <div className={styles.tooltip}>
        <p>Date: {payload[0]?.payload?.date}</p>
        <p>Price: ${payload[0]?.payload?.price.toLocaleString()}</p>
      </div>
    );
  }
}
