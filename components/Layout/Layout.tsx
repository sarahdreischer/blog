import { NextComponentType, NextPageContext } from 'next';
import { Footer } from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Container } from 'react-bootstrap';
import { Divider } from '@mui/material';
import cn from 'classnames';
import styles from './Layout.module.scss';

interface DefaultLayoutProps {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

export const Layout = ({ Component, pageProps }: DefaultLayoutProps) => {
  return (
    <div>
      <Container className={cn('px-0', styles.container)}>
        <Header />
        <div className='py-2'>
          <Component {...pageProps} />
        </div>
        <div>
          <Divider />
          <Footer />
        </div>
      </Container>
    </div>
  );
};
