import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { AppToolbar, AppContainer } from "../components/layout/default-layout";
import { Divider } from "@material-ui/core";
import { BlogNavbar, Page } from "../components/layout/navbar";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const pages: Page[] = [
  { label: "Home", path: "/" },
  { label: "Blog", path: "/blog" },
  { label: "Projects", path: "/", comingSoon: true },
  { label: "About", path: "/about" },
];

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Welcome to ssr-blog!</title>
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
