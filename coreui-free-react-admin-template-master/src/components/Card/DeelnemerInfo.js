import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class DeelnemerInfo extends Component {
    render() {
        return (
            <div className="deelnemer-info">
                <Row>
                    <Col lg="3">
                        <img src="../../../../assets/img/placeholder_avatar.jpg" />
                    </Col>
                    <Col md="6" lg="4">
                        <h4>Persoonlijke Informatie:</h4>
                        <p><b>Naam: </b>Jasper Zwiers</p>
                        <p><b>Leeftijd: </b>21</p>
                        <p><b>Status: </b>Uitgeprocedeerd</p>
                    </Col>
                    <Col md="6" lg="4">
                        <h4>Vragenlijsten:</h4>
                        <p><a href="/#/modules/deelnemers/vragenlijst">0-Meting</a></p>
                        <p><a href="/#/modules/deelnemers/vragenlijst">Tussentijdse Meting</a></p>
                        <p><a href="/#/modules/deelnemers/vragenlijst">Eind Meting</a></p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DeelnemerInfo
