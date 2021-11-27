import { NextComponentType, NextPageContext } from 'next';
import { Footer } from './components/Footer/Footer';
import { Page } from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import { Container } from 'react-bootstrap';
import { Divider } from '@mui/material';

interface DefaultLayoutProps {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

export const Layout = ({ Component, pageProps }: DefaultLayoutProps) => {
  return (
    <>
      <Container className='px-0'>
        <div className='mb-3'>
          <Header />
          <Component {...pageProps} />
        </div>
        <Divider />
        <Footer />
      </Container>
    </>
  );
};
