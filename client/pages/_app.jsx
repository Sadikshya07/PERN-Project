import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "reactjs-popup/dist/index.css";
import "../styles/popup.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head> */}
      <Component {...pageProps} />
    </>
  );
}
