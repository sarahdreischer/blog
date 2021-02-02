import { Col, Row } from "react-bootstrap";
import { OverlayImage } from "../overlay-image/overlay-image";
import styles from "./featured-sections.module.css";

interface FeaturedProps {}

export const FeaturedSections = (props: FeaturedProps) => {
  const onButtonClick = () => console.log("Clicked Read more");

  return (
    <Row className="p-3 h-100">
      <Col className={`${styles.largeImage} pl-0`} md={8}>
        <OverlayImage
          url="/featured-sections/image-1.jpeg"
          title="Create a blog with Next.JS"
          buttonText="Posts coming soon"
          onButtonClick={onButtonClick}
        />
      </Col>
      <Col md={4}>
        <Row className={`mb-2 ${styles.smallImage}`}>
          <OverlayImage
            url="/featured-sections/image-2.jpeg"
            title="Tutorials"
            buttonText="Posts coming soon"
            onButtonClick={onButtonClick}
            invertedOverlay
          />
        </Row>
        <Row className={`mt-2 ${styles.smallImage}`}>
          <OverlayImage
            url="/featured-sections/image-3.jpeg"
            title="Projects"
            buttonText="Posts coming soon"
            onButtonClick={onButtonClick}
          />
        </Row>
      </Col>
    </Row>
  );
};
