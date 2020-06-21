import React from 'react';
import {Row, Col, Card} from 'react-materialize';
import avatar from '../../img/avatar.png';

const UserProfile = () =>(
    <Card>
        <Row>
            <Col s={6} m={6} offset="s2 m2">
                <img src={avatar} className="circle responsive-img" />
            </Col>
        </Row>
        <Row className="center-align">
            <h5 >Lisiane Lima </h5>
            <p className="grey darken-2 white-text"></p>
        </Row>
    </Card>
);

export default UserProfile;