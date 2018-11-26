import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class DeelnemerInfo extends Component {

    constructor(props) {
        super(props)
    }

    calculateAge(geboortedatum) { // birthday is a date
        // console.log(geboortedatum)
        // var ageDifMs = Date.now() - geboortedatum.getTime();
        // var ageDate = new Date(ageDifMs); // miliseconds from epoch
        // return Math.abs(ageDate.getUTCFullYear() - 1970);
        var geboortedatum = geboortedatum
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
        return (
            <div className="deelnemer-info">
                <Row>
                    <Col lg="3">
                        <img src="../../../../assets/img/placeholder_avatar.jpg" />
                    </Col>
                    <Col md="6" lg="4">
                        <h4>Persoonlijke Informatie:</h4>
                        <p><b>Naam: </b>{deelnemersObject.voornaam + ' ' + deelnemersObject.achternaam}</p>
                        <p><b>Leeftijd: </b>{this.calculateAge(deelnemersObject.geboortedatum)}</p>
                        <p><b>Status: </b>{deelnemersObject.verblijfstatus}</p>
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
