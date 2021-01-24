import Image from "next/image";
import { Container, Button, Row } from "react-bootstrap";
import styles from "./overlay-image.module.css";

interface OverlayImageProps {
  title: string;
  url: string;
  buttonText: string;
  onButtonClick: () => void;
  className?: string;
}

export const OverlayImage = ({
  title,
  url,
  buttonText,
  onButtonClick,
  className,
}: OverlayImageProps) => {
  return (
    <div className={`${styles.imageContainer} ${className}`}>
      <Image
        src={url}
        alt={title}
        key={title}
        objectFit="cover"
        layout="fill"
        priority
      />
      <div className={styles.overlay}>
        <Container className="h-75">
          <Row className="h-100 justify-content-center align-items-center">
            <div className={`text-white ${styles.overlayTextSize}`}>
              {title}
            </div>
          </Row>
          <Row className="h-25 justify-content-center align-items-center">
            <Button variant="outline-light" onClick={onButtonClick} disabled>
              {buttonText}
            </Button>
          </Row>
        </Container>
      </div>
    </div>
  );
};
