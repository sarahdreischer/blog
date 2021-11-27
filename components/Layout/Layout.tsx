import Image from 'next/image';
import { Divider, Toolbar } from '@material-ui/core';
import { NextComponentType, NextPageContext } from 'next';
import { Container } from 'react-bootstrap';
import { Footer } from './components/Footer/Footer';
import { BlogNavbar, Page } from './components/Navbar/Navbar';
import Header from './components/Header/Header';

interface DefaultLayoutProps {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

export const Layout = ({ Component, pageProps }: DefaultLayoutProps) => {
  const pages: Page[] = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
  ];

  return (
    <>
      <Header />
      <Divider className='w-100' />
      <Container fluid className='px-0'>
        <div className='mb-3'>
          <Component {...pageProps} />
        </div>
        <Divider />
        <Footer />
      </Container>
    </>
  );
};
