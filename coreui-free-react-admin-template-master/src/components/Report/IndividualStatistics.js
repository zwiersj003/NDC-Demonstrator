import React, { Component } from 'react'
import { Card, CardHeader, CardBody} from 'reactstrap'
import { Bar } from 'react-chartjs-2'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'

function Progression(props) {
    const results = props.results
    let all = []

    for (let i = 0; i < results.length - 1; i++) {
        if (results[i].Module_has_DeelnemerID === results[i + 1].Module_has_DeelnemerID && results[i].vragenlijstmoment === 0 && results[i + 1].vragenlijstmoment === 1) {
            let answers0 = results[i]
            let answers1 = results[i + 1]

            let progression = []

            progression.push({ percentage: getPercentage(answers0.vraag1, answers1.vraag1), vraag: 1 })
            progression.push({ percentage: getPercentage(answers0.vraag2, answers1.vraag2), vraag: 2 })
            progression.push({ percentage: getPercentage(answers0.vraag3, answers1.vraag3), vraag: 3 })
            progression.push({ percentage: getPercentage(answers0.vraag4, answers1.vraag4), vraag: 4 })
            progression.push({ percentage: getPercentage(answers0.vraag5, answers1.vraag5), vraag: 5 })
            progression.push({ percentage: getPercentage(answers0.vraag6, answers1.vraag6), vraag: 6 })
            progression.push({ percentage: getPercentage(answers0.vraag7, answers1.vraag7), vraag: 7 })
            progression.push({ percentage: getPercentage(answers0.vraag8, answers1.vraag8), vraag: 8 })
            progression.push({ percentage: getPercentage(answers0.vraag9, answers1.vraag9), vraag: 9 })

            all.push(
                <ProgressionBar progression={progression}/>
            )
        }
    }
    return (
        <Card>
            <CardHeader>
                Vooruitgang(%) per deelnemer, per vraag: {results.Module_has_DeelnemerID}
            </CardHeader>
            <CardBody>
                {all}
            </CardBody>
        </Card>
    )
}

function getPercentage(first, second) {
    const difference = second - first
    switch (difference) {
        case -4:
            return -100
        case -3:
            return -75
        case -2:
            return -50
        case -1:
            return -25
        case 0:
            return 0
        case 1:
            return 25
        case 2:
            return 50
        case 3:
            return 75
        case 4:
            return 100
        default:
            return 0
    }
}

function ProgressionBar(props) {
    // const progression = props.progression || []
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
                    beginAtZero: true,
                    min: -100,
                    max: 100
                }
            }]
        }
    }

    const bar = {
        labels: progression.map(i => i.vraag),
        datasets: [
            {
                label: 'Vooruitgang(%)',
                backgroundColor: '#00aee8',
                borderColor: '#00aee8',
                hoverBackgroundColor: '#00aee8',
                hoverBorderColor: '#00aee8',
                data: progression.map(i => i.percentage),
            },
        ],
    }

    return (
        <div className="chart-wrapper progression-chart">
            <Bar data={bar} options={options}/>
        </div>
    )
}

class IndividualStatistics extends Component {
    render() {
        let { results } = this.props
        return (
            <div>
                <Progression results={results} />
            </div>
        )
    }
}

export default IndividualStatistics
