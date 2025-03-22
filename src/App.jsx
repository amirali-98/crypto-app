import { useEffect } from "react";

import Layout from "./layout/Layout";
import SearchForm from "./components/SearchForm";

export default function App() {
  useEffect(() => {
    document.title = "Crypto App";
  }, []);
  return (
    <div className="app">
      <Layout>
        <SearchForm />
      </Layout>
    </div>
  );
}
