import { Button, Divider, Toolbar, Typography } from '@material-ui/core';
import { NextComponentType, NextPageContext } from 'next';
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Footer } from './footer';

interface DefaultLayoutProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

export const AppToolbar = (props) => {
  return (
    <Toolbar className="w-100">
      <Typography
        className="flex-grow-1 text-left"
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
      >
        Software With Sarah
      </Typography>
      <div className="justify-content-end">
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
