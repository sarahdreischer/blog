import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./feature.module.css";
import { FeaturedSection } from "../../../lib/types/featured-section";

interface FeaturedProps {
  sections: FeaturedSection[];
}

interface OverlayImageProps {
  title: string;
  url: string;
  buttonText: string;
  onButtonClick: () => void;
}

export const Featured = ({ sections }: FeaturedProps) => {
  const overlays: JSX.Element[] = generateOverlays(sections);

  return (
    <Row className="p-3">
      <Col md={8}>{overlays[0]}</Col>
      <Col md={4}>
        <Row className="mb-2">{overlays[1]}</Row>
        <Row className="mt-2">{overlays[2]}</Row>
      </Col>
    </Row>
  );
};

const generateOverlays = (sections: FeaturedSection[]) => {
  if (sections) {
    return sections.map((section) => (
      <OverlayImage
        url={section.imageUrl}
        title={section.title}
        buttonText="Post coming soon"
        onButtonClick={() => console.log("Clicked Read more")}
        key={section.title}
      />
    ));
  }
  return [];
};

const OverlayImage = ({
  title,
  url,
  buttonText,
  onButtonClick,
}: OverlayImageProps) => {
  return (
    <div className={styles.imageContainer}>
      <img className="d-block w-100 h-100" src={url} key={title} alt={title} />
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
