import Image from 'next/image';
import { Container } from 'react-bootstrap';
import styles from './OverlayImage.module.css';

interface OverlayImageProps {
  title: string;
  imageUrl: string;
}

export const OverlayImage = ({ title, imageUrl }: OverlayImageProps) => {
  return (
    <div className={styles.imageContainer}>
      <Image src={imageUrl} alt={title} objectFit='cover' layout='fill' priority />
      <div className={`${styles.overlay} h-100 w-100 position-absolute`}>
        <Container className='h-100 d-flex justify-content-center align-items-center'>
          <div className='flex-column'>
            <h1 className='h5 text-white'>{title}</h1>
            <p>
              <a className='text-white'>Coming Soon</a>
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};
