import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Col, Row, Button } from 'reactstrap'

class ModulesInfo extends Component {
    
    render() {
        let { modulesObject } = this.props

        const DeelnemerRouteButton = withRouter(({ history }) => (
        <Button onClick={() => { history.push(`/modules/${modulesObject.moduleID}/deelnemers`) }}>
                <b>Bekijk deelnemers van deze module</b>
        </Button>
        ))

        return (
            <div className="module-info" >
                <Row>
                    <Col xs="12" md="6" lg="4">
                        <h4>Module Informatie:</h4>
                        <p><b>Naam: </b>{modulesObject.naam}</p>
                        <p><b>Locatie: </b>{modulesObject.locatie}</p>
                        <p><b>Aantal Deelnemers: </b>{modulesObject.amountOfDeelnemers}</p>
                        <p><DeelnemerRouteButton /></p>
                    </Col>
                    <Col xs="12" md="6" lg="4">
                        <h4>Contactpersoon:</h4>
                        <p><b>Naam: </b>{modulesObject.voornaam + ' ' + modulesObject.achternaam}</p>
                        <p><b>Telefoonnummer: </b>{modulesObject.telefoonnummer}</p>
                        <p><b>Email: </b>{modulesObject.email}</p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ModulesInfo
