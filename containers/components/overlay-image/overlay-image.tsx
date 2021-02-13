import Image from "next/image";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Container, Row } from "react-bootstrap";
import styles from "./overlay-image.module.css";

interface OverlayImageProps {
  title: string;
  imageUrl: string;
}

export const OverlayImage = ({ title, imageUrl }: OverlayImageProps) => {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={imageUrl}
        alt={title}
        objectFit="cover"
        layout="fill"
        priority
      />
      <Container className="h-100 justify-content-center align-items-center">
        <Row className="h-75 justify-content-center align-items-end">
          <button
            className={`d-flex align-items-center text-white px-1 ${styles.imageTitle}`}
          >
            {title} <ArrowForwardIosIcon className={styles.arrow} />
          </button>
        </Row>
      </Container>
    </div>
  );
};
