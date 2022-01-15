import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import seoConfig from "../config/next-seo.config";
import "../styles/globals.scss";
import "react-typist/dist/Typist.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { ToastProvider } from "react-toast-notifications";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <DefaultSeo {...seoConfig} />

      <ToastProvider>
        <Navbar></Navbar>

        <Component {...pageProps} />

        <Footer></Footer>
      </ToastProvider>
    </>
  );
}

export default MyApp;
