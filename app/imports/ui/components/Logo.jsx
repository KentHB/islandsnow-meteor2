import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';

const Logo = () => (
  <Row className="justify-content-md-center py-3">
    <Col md="auto">
      <Image src="https://courses.ics.hawaii.edu/ics314s24/morea/ui-frameworks/experience-islandsnow-bootstrap-logo.png" alt="Island Snow Logo" />
    </Col>
  </Row>
);

export default Logo;
