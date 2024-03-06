import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const FooterMenu = () => (
  <footer>
    <Container>
      <Row py={4}>
        <Col>
          <p style={{ marginTop: `${40}px` }}>NAVIGATION</p>
          <hr />
          <div>About Us</div>
          <br />
          <div>Employment</div>
          <br />
          <div>Videos</div>
        </Col>
        <Col>
          <p style={{ marginTop: `${40}px` }}>MAIN MENU</p>
          <hr />
          <div>Men</div>
          <br />
          <div>Women</div>
          <br />
          <div>Kids</div>
        </Col>
        <Col>
          <p style={{ marginTop: `${40}px` }}>CONNECT</p>
          <hr />
          <div>Sign up for the latest updates</div>
          <br />
          <input type="text" placeholder="Enter Email Address" />
          <div className="btn btn-dark">Join</div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FooterMenu();
