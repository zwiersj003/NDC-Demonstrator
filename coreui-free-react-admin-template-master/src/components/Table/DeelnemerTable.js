import React, { Component } from 'react';
import { Table } from 'reactstrap'

class DeelnemerTable extends Component {

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

    renderDeelnemer = ({ deelnemerID, voornaam, geboortedatum }) => (
        <tr key={deelnemerID} onClick={() => this.props.getSelectedDeelnemer(deelnemerID)}>
            <td>{deelnemerID}</td>
            <td>{voornaam}</td>
            <td>{this.calculateAge(geboortedatum)}</td>
        </tr>)

    render() {
        let { deelnemers } = this.props
        return (
            <div className="deelnemers">
                <Table bordered striped hover className="table-deelnemer">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Naam</th>
                            <th>Leeftijd</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deelnemers.map(this.renderDeelnemer)}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default DeelnemerTable