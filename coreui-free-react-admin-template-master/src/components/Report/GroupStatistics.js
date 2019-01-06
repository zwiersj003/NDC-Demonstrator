import React, { Component } from 'react'
import { Button, Card, CardHeader, CardBody, Label, Row, Col } from 'reactstrap'
import { Pie } from 'react-chartjs-2'

function Welcome(props) {
    var naam = props.naam + 'kaas'
    return <h1>Hello, {naam}</h1>;
}

function LocationsChart(props) {
    const locations = props.selectedLocations
    const pie = {
        labels: locations.map(i => i.label),
        datasets: [{
            data: locations.map(i => i.count),
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#7CFC00',
                '#FF0000',
                '#FFFF00'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#7CFC00',
                '#FF0000',
                '#FFFF00'
            ],
        }]
    }
    return (
        <Card>
            <CardHeader>
                Aantal deelnemers per locatie
            </CardHeader>
            <CardBody>
                <div className="chart-wrapper">
                    <Pie data={pie} />
                </div>
            </CardBody>
        </Card>
    )
}

class GroupStatistics extends Component {
    render() {
        let { results, selectedLocations } = this.props
        return (
            <Row>
                <Col sm="6">
                    <LocationsChart selectedLocations={selectedLocations} />
                </Col>
                <Col sm="6">
                    <LocationsChart selectedLocations={selectedLocations} />
                </Col>
            </Row>
        )
    }
}

export default GroupStatistics
