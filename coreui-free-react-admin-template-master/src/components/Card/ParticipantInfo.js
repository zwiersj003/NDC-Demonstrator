import React, { Component } from 'react'
import { Col, Row, Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'

class ParticipantInfo extends Component {

    calculateAge(geboortedatum) {
        var today = new Date();
        var birthDate = new Date(geboortedatum);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age = age - 1;
        }
        return age
    }

    render() {
        let { deelnemersObject } = this.props

        const VragenlijstRouteButton = withRouter(({ history }) => (
            <div className="questionlist-button-group">
                <div className="questionlist-button">
                    <Button onClick={() => { history.push(`/modules/deelnemers/${deelnemersObject.Module_has_DeelnemerID}/vragenlijst/0`) }}>
                        <b>0-Meting</b>
                    </Button>
                </div>
                <div className="questionlist-button">
                    <Button onClick={() => { history.push(`/modules/deelnemers/${deelnemersObject.Module_has_DeelnemerID}/vragenlijst/1`) }}>
                        <b>Tussentijdse meting</b>
                    </Button>
                </div>
                <div className="questionlist-button">
                    <Button onClick={() => { history.push(`/modules/deelnemers/${deelnemersObject.Module_has_DeelnemerID}/vragenlijst/2`) }}>
                        <b>Eind meting</b>
                    </Button>
                </div>
            </div>
        ))

        return (
            <div className="deelnemer-info">
                <Row>
                    <Col lg="3">
                        <img src="../../../../assets/img/placeholder_avatar.jpg" alt="Profile placeholder"/>
                    </Col>
                    <Col md="6" lg="4">
                        <h4>Persoonlijke Informatie:</h4>
                        <p><b>Naam: </b>{deelnemersObject.voornaam + ' ' + deelnemersObject.achternaam}</p>
                        <p><b>Leeftijd: </b>{this.calculateAge(deelnemersObject.geboortedatum)}</p>
                        <p><b>Status: </b>{deelnemersObject.verblijfstatus}</p>
                    </Col>
                    <Col md="6" lg="4">
                        <h4>Vragenlijsten:</h4>
                        <VragenlijstRouteButton />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ParticipantInfo
