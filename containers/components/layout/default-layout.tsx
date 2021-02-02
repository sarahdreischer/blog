import { Divider, Toolbar } from "@material-ui/core";
import { NextComponentType, NextPageContext } from "next";
import Image from "next/image";
import { Container } from "react-bootstrap";
import { Footer } from "./footer";

interface DefaultLayoutProps {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

export const AppToolbar = (props) => {
  return (
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
  );
};

export const AppContainer = ({ Component, pageProps }: DefaultLayoutProps) => {
  return (
    <Container fluid className="px-0">
      <div className="mb-3">
        <Component {...pageProps} />
      </div>
      <Divider />
      <Footer />
    </Container>
  );
};
