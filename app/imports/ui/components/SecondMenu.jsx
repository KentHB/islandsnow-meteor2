import React from 'react';
import { Col, Nav, NavDropdown, Row } from 'react-bootstrap';

const SecondMenu = () => (
  <Row style={{ marginTop: `${60}px` }} className="justify-content-center">
    <Col xs={1}>
      <Nav>
        <NavDropdown
          title="MEN"
          menuVariant="dark"
          className="custom-dropdown"
        >
          <NavDropdown.Item href="#action/3.1" />
        </NavDropdown>
      </Nav>
    </Col>
    <Col xs={1}>
      <Nav>
        <NavDropdown
          title="WOMEN"
          menuVariant="dark"
          className="custom-dropdown"
        >
          <NavDropdown.Item href="#action/3.1" />
        </NavDropdown>
      </Nav>
    </Col>
    <Col xs={1}>
      <Nav>
        <NavDropdown
          title="KIDS"
          menuVariant="dark"
          className="custom-dropdown"
        >
          <NavDropdown.Item href="#action/3.1" />
        </NavDropdown>
      </Nav>
    </Col>
    <Col xs={1}>
      <Nav>
        <NavDropdown
          title="BRANDS"
          menuVariant="dark"
          className="custom-dropdown"
        >
          <NavDropdown.Item href="#action/3.1" />
        </NavDropdown>
      </Nav>
    </Col>
    <Col xs={1}>
      <Nav>
        <p style={{ marginTop: `${8}px` }}>SEARCH</p>
      </Nav>
    </Col>
  </Row>
);

export default SecondMenu;
