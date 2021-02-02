import Image from "next/image";
import { Divider, Toolbar } from "@material-ui/core";
import { NextComponentType, NextPageContext } from "next";
import { Container } from "react-bootstrap";
import { Footer } from "./footer";
import { BlogNavbar, Page } from "./navbar";

interface DefaultLayoutProps {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

export const Layout = ({ Component, pageProps }: DefaultLayoutProps) => {
  const pages: Page[] = [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/blog" },
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
  ];

  return (
    <>
      <Toolbar className="w-100">
        <Image
          alt="Software with Sarah"
          src="/logo/logo-min.svg"
          width={200}
          height={36}
          objectFit="contain"
          priority
        />
      </Toolbar>
      <Divider className="w-100" />
      <BlogNavbar pages={pages} />
      <Divider className="w-100" />
      <Container fluid className="px-0">
        <div className="mb-3">
          <Component {...pageProps} />
        </div>
        <Divider />
        <Footer />
      </Container>
    </>
  );
};
