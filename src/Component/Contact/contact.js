// Import React
import React from "react";
// Import needed components from lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';

// Importando o componenet UserProfile
import UserProfile from '../UserProfile/user_profile'

const Contact = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5>Contact</h5>
       
    </Col>
  </Row>
);

export default Contact;