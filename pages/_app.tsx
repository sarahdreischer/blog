import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { Layout } from "../containers/components/layout/layout";
import { DefaultBlogMeta } from "lib/seo/meta-tags";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Software With Sarah | Simple Software Tutorials</title>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="yandex-verification" content="68063a32bf98d316" />
        <meta content={DefaultBlogMeta.DESCRIPTION} name="description" />
        <meta
          content="software, javascript, js, typescript, ts, react, next.js, esp8266, web development, embedded software, IoT, software with sarah, softwarewithsarah"
          name="keywords"
        />
        <meta content="Sarah Dreischer" name="author" />
        <meta property="og:locale" content="en_gb" />
        <meta
          content="https://softwarewithsarah.com/favicons/favicon.ico"
          property="og:image"
        />
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
