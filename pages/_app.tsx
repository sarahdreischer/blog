import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { Layout } from "../containers/components/layout/layout";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="yandex-verification" content="68063a32bf98d316" />
        <meta content="Sarah Dreischer" name="author" />
        <meta property="og:locale" content="en_gb" />
        <meta
          content="https://softwarewithsarah.com/favicons/favicon.ico"
          property="og:image"
        />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-config" />
      </Head>
      <div className="app">
        <main>
          <Layout Component={Component} pageProps={pageProps} />
        </main>
      </div>
    </>
  );
};

export default CustomApp;
