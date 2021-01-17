import { Button, Divider, Toolbar } from "@material-ui/core";
import { NextComponentType, NextPageContext } from "next";
import Image from "next/image";
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Footer } from "./footer";

interface DefaultLayoutProps {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

export const AppToolbar = (props) => {
  return (
    <Toolbar className="w-100">
      <Image src="/logo.svg" width={200} height={70} objectFit="contain" />
      <div className="ml-auto mt-2 justify-content-end">
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="sign-up-tooltip">Coming soon</Tooltip>}
        >
          <Button variant="outlined" size="small">
            Sign up
          </Button>
        </OverlayTrigger>
      </div>
    </Toolbar>
  );
};

export const AppContainer = ({ Component, pageProps }: DefaultLayoutProps) => {
  return (
    <Container fluid className="px-0">
      <div className="pb-3">
        <Component {...pageProps} />
      </div>
      <Divider />
      <Footer
        title=""
        description="Contact me for any questions or suggestions."
      />
    </Container>
  );
};
