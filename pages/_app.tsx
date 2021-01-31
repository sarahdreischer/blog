import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import {
  AppToolbar,
  AppContainer,
} from "../containers/components/layout/default-layout";
import { Divider } from "@material-ui/core";
import { BlogNavbar, Page } from "../containers/components/layout/navbar";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const pages: Page[] = [
  { label: "Home", path: "/" },
  { label: "Blog", path: "/blog" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
];

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const pageTitle = "Software With Sarah | Simple Software Tutorials";
  const pageDescription =
    "A blog to guide aspiring developers through the jungle of technology through easy tutorials and projects for your free time.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="yandex-verification" content="68063a32bf98d316" />
        <meta content={pageDescription} name="description" />
        <meta
          content="javascript, js, typescript, ts, react, next.js, esp8266, web development, embedded software, IoT"
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
        <AppToolbar />
        <Divider className="w-100" />
        <BlogNavbar pages={pages} />
        <Divider className="w-100" />
        <main>
          <AppContainer Component={Component} pageProps={pageProps} />
        </main>
      </div>
    </>
  );
};

export default CustomApp;
