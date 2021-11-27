import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import { Body } from '@components';
import styles from './AboutScreen.module.scss';

interface AboutPageProps {}

export const AboutScreen = (props: AboutPageProps) => {
  return (
    <Body
      main={
        <Container className={styles.container}>
          <Row>
            <Col md={4} className='d-flex justify-content-center my-auto'>
              <Image
                className='round-image'
                width={250}
                height={250}
                objectFit='cover'
                src='/profile.jpeg'
                alt='Programming Blog, Sarah Dreischer'
                priority
              />
            </Col>
            <Col md={8}>
              <AboutMeDescription />
            </Col>
          </Row>
        </Container>
      }
    />
  );
};

const AboutMeDescription = (props) => {
  return (
    <>
      <p className='pt-3'>
        <b className='highlight-color'>Hello there!</b>
      </p>
      <p>
        I'm <b>Sarah Dreischer</b> - a 24 year old Software and Electronic Engineer living and
        working in London, UK. Since 2019 I've been working as a professional Software Engineer and
        through this blog I am aiming to share with you what I have learned along the way.
      </p>
      <p>
        This blog was coded from scratch using Next.JS (a framework built on top of React) and is
        deployed on <b>Vercel.com</b>. If you have any questions on how I put this blog together
        (which I so far haven't covered in a blog post), feel free to contact me using the details
        below.
      </p>
      <b>Contact me on</b>{' '}
      <a className={styles.mail} href='mailto:softwarewithsarah@gmail.com'>
        softwarewithsarah@gmail.com
      </a>
    </>
  );
};
