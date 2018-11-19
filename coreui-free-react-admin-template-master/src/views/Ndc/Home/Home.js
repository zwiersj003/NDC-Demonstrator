import React, { Component } from 'react';
import {
    Badge,
    Button,
    ButtonDropdown,
    ButtonGroup,
    ButtonToolbar,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardTitle,
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Progress,
    Row,
    Table,
    CardColumns,
} from 'reactstrap'

import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

var Utrecht = 10
var Rotterdam = 100
var Emmen = 20
var Burgum = 60
var Arnhem = 80
var Tilburg = 108

var colors = ["", "", ""]

// TODO: create array with different colors, so you can loop trough based on amount of locations

const pie = {
    labels: [
        'Utrecht',
        'Rotterdam',
        'Emmen',
        'Burgum',
        'Arnhem',
        'Tilburg',
    ],

    datasets: [
        {
            data: [Utrecht, Rotterdam, Emmen, Burgum, Arnhem, Tilburg],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#7CFC00',
                '#FF0000',
                '#FFFF00',

            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#7CFC00',
                '#FF0000',
                '#FFFF00',
            ],
        }],
};

const bar = {
    labels: ['Utrecht', 'Rotterdam', 'Emmen', 'Burgum', 'Arnhem', 'Tilburg',],
    datasets: [
        {
            label: 'Lopende modules',
            backgroundColor: 'rgb(0,0,255)',
            borderColor: 'rgb(0,0,0)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [2, 3, 6, 4, 5, 1,],
        },
    ],
};

const options = {
    tooltips: {
        enabled: false,
        custom: CustomTooltips
    },
    maintainAspectRatio: false
}



class Home extends Component {
    constructor() {
        super();

        var today = new Date(),
            date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

        this.state = {
            date: date
        };
    }

    render() {
        return (
            <div className="animated fadeIn">
                <div className="home">
                    <Card>
                        <CardHeader>
                            <Row>
                                <Col sm="6">
                                    <p className="date-align1">Welkom (User)</p>
                                </Col>
                                <Col sm="6">
                                    <div> <p className="date-align"> {this.state.date}</p> </div>
                                </Col>
                            </Row>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader>
                            <i className="icon-home" />Overzicht
                    </CardHeader>
                        <CardBody>
                            <div className="link-buttons-card">
                                <Row>
                                    <Col xs="12" sm="6" lg="3">
                                        <Card className="text-white bg-info">
                                            <CardBody>
                                                <div className="text-value"> <a href="url">Modules</a></div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xs="12" sm="6" lg="3">
                                        <Card className="text-white bg-info">
                                            <CardBody>
                                                <div className="text-value"> <a href="url">Deelnemers</a></div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xs="12" sm="6" lg="3">
                                        <Card className="text-white bg-info">
                                            <CardBody>
                                                <div className="text-value"> <a href="url">Locatie(s)</a> </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xs="12" sm="6" lg="3">
                                        <Card className="text-white bg-info">
                                            <CardBody>
                                                <div className="text-value"> <a href="url">Rapportage</a></div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>
                            <i className="icon-graph" />Statistiek
                    </CardHeader>
                        <CardBody>
                            <div className="statistics-card">
                                <Row>
                                    <Col sm="4">
                                        <div class="callout callout-info">
                                            <small class="text-muted">Aantal Deelnemers</small>
                                            <div><h4>9145</h4></div>
                                            <div class="chart-wrapper">
                                                <canvas id="sparkline-chart-1" width="100" height="30"></canvas>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs="6" sm="4">
                                        <div class="callout callout-warning">
                                            <small class="text-muted">Lopende Modules</small>
                                            <div><strong class="h4">10</strong></div>
                                            <div class="chart-wrapper">
                                                <canvas id="sparkline-chart-1" width="100" height="30"></canvas>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs="6" sm="4">
                                        <div class="callout callout-warning">
                                            <small class="text-muted">Voortgang Modules</small>
                                            <div><strong class="h4">10</strong></div>
                                            <div class="chart-wrapper">
                                                <canvas id="sparkline-chart-1" width="100" height="30"></canvas>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                    </Card>
                    <Row>
                        <Col md="6">
                            <Card>
                                <CardHeader>
                                    <i className="icon-people" />Deelnemers per locatie
                            </CardHeader>
                                <CardBody>
                                    <div className="chart-wrapper">
                                        <Pie data={pie} />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Card>
                                <CardHeader>
                                    <i className="icon-hourglass" />Aantal lopende modules per locatie
                            </CardHeader>
                                <CardBody>
                                    <div className="chart-wrapper">
                                        <Bar data={bar} options={options} />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Home
