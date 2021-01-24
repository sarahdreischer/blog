import { Col, Row } from "react-bootstrap";
import { FeaturedSection } from "../../../lib/types/featured-section";
import { OverlayImage } from "../image/overlay-image";

interface FeaturedProps {
  sections: FeaturedSection[];
}

export const FeaturedSections = ({ sections }: FeaturedProps) => {
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
  return sections.map((section) => (
    <OverlayImage
      url={section.imageUrl}
      title={section.title}
      buttonText="Post coming soon"
      onButtonClick={() => console.log("Clicked Read more")}
      key={section.title}
    />
  ));
};
