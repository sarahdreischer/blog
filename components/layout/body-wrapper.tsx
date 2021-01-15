import { Container } from '@material-ui/core';
import { Col, Row } from 'react-bootstrap';

interface BodyWrapperProps {
  main: JSX.Element | JSX.Element[];
  sidebar?: JSX.Element | JSX.Element[];
  header?: JSX.Element;
}

export const BodyWrapper = ({ main, sidebar, header }: BodyWrapperProps) => {
  if (header) {
    return (
      <>
        {renderHeader(header)}
        {renderMainContainer({ main, sidebar })}
      </>
    );
  }
  return renderMainContainer({ main, sidebar });
};

const renderMainContainer = ({ main, sidebar }: BodyWrapperProps) => {
  if (sidebar) {
    return (
      <Container maxWidth="lg">
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

const renderHeader = (header: JSX.Element) => {
  return <div className="h-25 overflow-hidden px-0">{header}</div>;
};
