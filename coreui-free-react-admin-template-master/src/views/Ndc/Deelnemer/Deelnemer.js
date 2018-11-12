import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import DeelnemerInfo from '../../../components/Card/DeelnemerInfo'

class Deelnemer extends Component {

    state = {
        deelnemers: []
    }

    componentDidMount() {
        this.getDeelnemers()
    }

    getDeelnemers = _ => {
        fetch('http://localhost:4000/moduledeelnemers?modules=1')
            .then(response => response.json())
            .then(response => this.setState({ deelnemers: response.data }))
            .catch(err => console.log(err))
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
        <tr key={deelnemerID}>
            <td>{deelnemerID}</td>
            <td>{voornaam}</td>
            <td>{this.calculateAge(geboortedatum)}</td>
        </tr>) 

    render() {
        const { deelnemers } = this.state
        return (
            <div className="animated fadeIn">
                <div className="card">
                    <div className="card-header">
                        <i className="icon-people"></i>Deelnemers - Module Bouw
                    </div>
                    <div className="card-body">
                        <div className="deelnemer-card">
                            <DeelnemerInfo />
                            <div className="deelnemers">
                                <table className="table table-bordered table-striped table-hover table-deelnemer">
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
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Deelnemer