import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class ModulesInfo extends Component {
    render() {
        return (
            <div className="module-info">
                <Row>
                    <Col xs="12" md="6" lg="4">
                        <h4>Module Informatie:</h4>
                        <p><b>Naam: </b>Module Bouw</p>
                        <p><b>Locatie: </b>Utrecht</p>
                        <p><b>Aantal Deelnemers: </b>10</p>
                        <p><a href="/#/modules/deelnemers"><b>Bekijk deelnemers van deze module</b></a></p>
                    </Col>
                    <Col xs="12" md="6" lg="4">
                        <h4>Contactpersoon:</h4>
                        <p><b>Naam: </b>Jasper Zwiers</p>
                        <p><b>Telefoonnummer: </b>06 12 34 56 78</p>
                        <p><b>Email: </b>example@example.com</p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ModulesInfo
