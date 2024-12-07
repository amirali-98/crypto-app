import { useState } from "react";

import Layout from "./layouts/Layout";
import SearchForm from "./components/SearchForm";
import CurrencyTable from "./components/CurrencyTable";

function App() {
  const [supportCurrency, setSupportCurrency] = useState("usd");
  return (
    <Layout>
      <SearchForm
        supportCurrency={supportCurrency}
        setSupportCurrency={setSupportCurrency}
      />
      <CurrencyTable supportCurrency={supportCurrency} />
    </Layout>
  );
}

export default App;
