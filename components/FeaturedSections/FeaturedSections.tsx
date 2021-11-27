import { Col, Row } from 'react-bootstrap';
import { OverlayImage } from '../OverlayImage/OverlayImage';
import styles from './FeaturedSections.module.css';

interface FeaturedProps {}

export const FeaturedSections = (props: FeaturedProps) => {
  return (
    <Row className='p-3 mx-1 h-100'>
      <Col className={`${styles.largeImage} pl-0`} md={8}>
        <OverlayImage
          imageUrl='/featured-sections/image-1.jpeg'
          title='Create a blog with Next.JS'
        />
      </Col>
      <Col md={4}>
        <Row className={`mb-2 ${styles.smallImage}`}>
          <OverlayImage imageUrl='/featured-sections/image-2.jpeg' title='Tutorials' />
        </Row>
        <Row className={`mt-2 ${styles.smallImage}`}>
          <OverlayImage imageUrl='/featured-sections/image-3.jpeg' title='Projects' />
        </Row>
      </Col>
    </Row>
  );
};
