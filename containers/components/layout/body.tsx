import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/layout.module.css";

interface BodyWrapperProps {
  main: JSX.Element | JSX.Element[];
  sidebar?: JSX.Element | JSX.Element[];
  header?: JSX.Element;
}

export const Body = ({ main, sidebar, header }: BodyWrapperProps) => {
  return (
    <>
      {<div className="h-25 overflow-hidden px-0">{header}</div> || null}
      {renderMainContainer({ main, sidebar })}
    </>
  );
};

const renderMainContainer = ({ main, sidebar }: BodyWrapperProps) => {
  if (sidebar) {
    return (
      <Container fluid className={styles.bodyContainer}>
        <Row>
          <Col sm={12} lg={9}>
            <div>{main}</div>
          </Col>
          <Col sm={12} lg={3} className="p-4">
            {sidebar}
          </Col>
        </Row>
      </Container>
    );
  }
  return <div className="pt-2">{main}</div>;
};
