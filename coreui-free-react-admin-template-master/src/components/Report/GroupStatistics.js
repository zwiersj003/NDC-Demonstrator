import React, { Component } from 'react'
import { Button, Card, CardHeader, CardBody, Row, Col } from 'reactstrap'
import { Bar, Pie } from 'react-chartjs-2'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'

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

function getPercentage(first, second) {
    const difference = second - first
    switch (difference) {
        case -4:
            return 0
        case -3:
            return 1
        case -2:
            return 2
        case -1:
            return 3
        case 0:
            return 4
        case 1:
            return 5
        case 2:
            return 6
        case 3:
            return 7
        case 4:
            return 8
        default:
            return 0
    }
}

function Progression(props) {
    const results = props.results
    let averageProgression1 = SetProgressionArray()
    let averageProgression2 = SetProgressionArray()
    let averageProgression3 = SetProgressionArray()
    let averageProgression4 = SetProgressionArray()
    let averageProgression5 = SetProgressionArray()
    let averageProgression6 = SetProgressionArray()
    let averageProgression7 = SetProgressionArray()
    let averageProgression8 = SetProgressionArray()
    let averageProgression9 = SetProgressionArray()

    for (let i = 0; i < results.length - 1; i++) {
        if (results[i].Module_has_DeelnemerID === results[i + 1].Module_has_DeelnemerID && results[i].vragenlijstmoment === 0 && results[i + 1].vragenlijstmoment === 1) {
            let answers0 = results[i]
            let answers1 = results[i + 1]

            averageProgression1[getPercentage(answers0.vraag1, answers1.vraag1)].count += 1
            averageProgression2[getPercentage(answers0.vraag2, answers1.vraag2)].count += 1
            averageProgression3[getPercentage(answers0.vraag3, answers1.vraag3)].count += 1
            averageProgression4[getPercentage(answers0.vraag4, answers1.vraag4)].count += 1
            averageProgression5[getPercentage(answers0.vraag5, answers1.vraag5)].count += 1
            averageProgression6[getPercentage(answers0.vraag6, answers1.vraag6)].count += 1
            averageProgression7[getPercentage(answers0.vraag7, answers1.vraag7)].count += 1
            averageProgression8[getPercentage(answers0.vraag8, answers1.vraag8)].count += 1
            averageProgression9[getPercentage(answers0.vraag9, answers1.vraag9)].count += 1
        }
    }

    return (
        <Card>
            <CardHeader>
                Vooruitgang(%) per vraag
            </CardHeader>
            <CardBody>
                <div className="progressionbar">
                    <h5>Vraag 1: Ik weet waar ik goed in ben namelijk</h5>
                    <ProgressionBar progression={averageProgression1} />
                </div>
                <div className="progressionbar">
                    <h5>Vraag 2: Waar ik goed in ben kan ik gebruiken voor mijn studie of mijn werk</h5>
                    <ProgressionBar progression={averageProgression2} />
                </div>
                <div className="progressionbar">
                    <h5>Vraag 3: Ik weet wat voor studie of werk ik wil doen</h5>
                    <ProgressionBar progression={averageProgression3} />
                </div>
                <div className="progressionbar">
                    <h5>Vraag 4: Ik kan hulp vragen bij het vinden van een studie of werk</h5>
                    <ProgressionBar progression={averageProgression4} />
                </div>
                <div className="progressionbar">
                    <h5>Vraag 5: Ik kan zelfstandig taken voor studie, werk en hobby's doen</h5>
                    <ProgressionBar progression={averageProgression5} />
                </div>
                <div className="progressionbar">
                    <h5>Vraag 6: Ik ben op dit moment bezig met studie, werk of hobby's</h5>
                    <ProgressionBar progression={averageProgression6} />
                </div>
                <div className="progressionbar">
                    <h5>Vraag 7: Ik heb contact met Nederlanders</h5>
                    <ProgressionBar progression={averageProgression7} />
                </div>
                <div className="progressionbar">
                    <h5>Vraag 8: Ik ken scholen of bedrijven in mijn omgeving die mij informatie of hulp kunnen bieden</h5>
                    <ProgressionBar progression={averageProgression8} />
                </div>
                <div className="progressionbar">
                    <h5>Vraag 9: Ik ben trots op wat ik in Nederland heb bereikt</h5>
                    <ProgressionBar progression={averageProgression9} />
                </div>
            </CardBody>
        </Card>
    )
}

function ProgressionBar(props) {
    const progression = props.progression || []

    const options = {
        maintainAspectRatio: false,
        tooltips: {
            enabled: false,
            custom: CustomTooltips
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

    const bar = {
        labels: progression.map(i => i.percentage),
        datasets: [
            {
                label: 'Aantal Deelnemers',
                backgroundColor: '#00aee8',
                borderColor: '#00aee8',
                hoverBackgroundColor: '#00aee8',
                hoverBorderColor: '#00aee8',
                data: progression.map(i => i.count),
            },
        ],
    }

    return (
        <div className="chart-wrapper progression-chart">
            <Bar data={bar} options={options} height={300} />
        </div>
    )
}

function SetProgressionArray() {
    return [
        { percentage: '-100%', count: 0 },
        { percentage: '-75%', count: 0 },
        { percentage: '-50%', count: 0 },
        { percentage: '-25%', count: 0 },
        { percentage: '0%', count: 0 },
        { percentage: '25%', count: 0 },
        { percentage: '50%', count: 0 },
        { percentage: '75%', count: 0 },
        { percentage: '100%', count: 0 }
    ]
}

class GroupStatistics extends Component {
    render() {
        let { results, selectedLocations } = this.props
        return (
            <div className="group-statistics">
                <Row>
                    <Col sm="6">
                        <LocationsChart selectedLocations={selectedLocations} />
                    </Col>
                    <Col sm="6">
                        <LocationsChart selectedLocations={selectedLocations} />
                    </Col>
                </Row>
                <Progression results={results} />

            </div>
        )
    }
}

export default GroupStatistics
