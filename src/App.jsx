import { useEffect, useState } from "react";

import Layout from "./layout/Layout";
import SearchForm from "./components/SearchForm";
import CoinList from "./components/CoinList";

export default function App() {
  const [rate, setRate] = useState("usd");

  useEffect(() => {
    document.title = "Crypto App";
  }, []);
  return (
    <div className="app">
      <Layout>
        <SearchForm rate={rate} setRate={setRate} />
        <CoinList rate={rate} />
      </Layout>
    </div>
  );
}
