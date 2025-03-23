import { useEffect, useState } from "react";

import Layout from "./layout/Layout";
import SearchForm from "./components/SearchForm";
import CoinList from "./components/CoinList";
import Modal from "./components/Modal";

export default function App() {
  const [rate, setRate] = useState("usd");
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedCoinId, setSelectedCoinId] = useState(null);

  useEffect(() => {
    document.title = "Crypto App";
  }, []);
  return (
    <>
      <div className="app">
        <Layout>
          <SearchForm rate={rate} setRate={setRate} />
          <CoinList
            rate={rate}
            setIsModalOpened={setIsModalOpened}
            setSelectedCoinId={setSelectedCoinId}
          />
        </Layout>
      </div>
      {isModalOpened && (
        <Modal
          setIsModalOpened={setIsModalOpened}
          selectedCoinId={selectedCoinId}
          rate={rate}
        />
      )}
    </>
  );
}
