import "../styles/globals.scss";
import { Roboto } from "@next/font/google";
import Layout from "../layouts";
import { ReadLaterContext } from "../Contexts/ReadLaterContext";
import { useState } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"]
});

export default function App({ Component, pageProps }) {
  const [readLater, setReadLater] = useState([]);

  return (
    <main className={roboto.className}>
      <ReadLaterContext.Provider value={{ readLater, setReadLater }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ReadLaterContext.Provider>
    </main>
  );
}
