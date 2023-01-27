import "../styles/globals.scss";
import { Roboto } from "@next/font/google";
import Layout from "../layouts";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"]
});

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
