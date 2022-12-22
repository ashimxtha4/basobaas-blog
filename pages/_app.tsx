// add bootstrap css
import "bootstrap/dist/css/bootstrap.css"; //Import Bootstrap CSS
import "../styles/globals.css";
import "../styles/main.scss"
import type { AppProps } from "next/app";
import Head from "next/head";
if(typeof window !=="undefined"){
  console.log("This is client side window")
      //Enable Bootstrap JS Functions
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
}

console.log("This is server side window")
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
