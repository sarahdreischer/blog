import { Col, Row } from "react-bootstrap";
import { FeaturedSection } from "../../../lib/types/featured-section";
import { OverlayImage } from "../image/overlay-image";
import styles from "./featured-sections.module.css";

interface FeaturedProps {
  sections: FeaturedSection[];
}

export const FeaturedSections = ({ sections }: FeaturedProps) => {
  const onButtonClick = () => console.log("Clicked Read more");

  return (
    <Row className="p-3 h-100">
      <Col className={styles.largeImage} md={8}>
        <OverlayImage
          url={sections[0].imageUrl}
          title={sections[0].title}
          buttonText="Posts coming soon"
          onButtonClick={onButtonClick}
          key={sections[0].title}
        />
      </Col>
      <Col md={4}>
        <Row className={`mb-2 ${styles.smallImage}`}>
          <OverlayImage
            url={sections[1].imageUrl}
            title={sections[1].title}
            buttonText="Posts coming soon"
            onButtonClick={onButtonClick}
            key={sections[1].title}
            invertedOverlay
          />
        </Row>
        <Row className={`mt-2 ${styles.smallImage}`}>
          <OverlayImage
            url={sections[2].imageUrl}
            title={sections[2].title}
            buttonText="Posts coming soon"
            onButtonClick={onButtonClick}
            key={sections[2].title}
          />
        </Row>
      </Col>
    </Row>
  );
};
