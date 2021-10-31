import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import seoConfig from "../config/next-seo.config";
import "../styles/globals.scss";
import "react-typist/dist/Typist.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
