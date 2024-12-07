import { useState } from "react";

import Layout from "./layouts/Layout";
import SearchForm from "./components/SearchForm";
import CurrencyTable from "./components/CurrencyTable";
import Modal from "./components/Modal";

function App() {
  const [supportCurrency, setSupportCurrency] = useState("usd");
  const [selectedCurrency, setSelectedCurrency] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Layout>
      <SearchForm
        supportCurrency={supportCurrency}
        setSupportCurrency={setSupportCurrency}
      />
      <CurrencyTable
        supportCurrency={supportCurrency}
        setSelectedCurrency={setSelectedCurrency}
        setModalOpen={setModalOpen}
      />
      {modalOpen && (
        <Modal
          selectedCurrency={selectedCurrency}
          setModalOpen={setModalOpen}
        />
      )}
    </Layout>
  );
}

export default App;
