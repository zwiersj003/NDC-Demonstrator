import React, { Component } from 'react'
import { Button, Card, CardHeader, CardBody, Label, Row, Col } from 'reactstrap'
import SelectedFilters from '../../../components/Report/SelectedFilters'
import GroupStatistics from '../../../components/Report/GroupStatistics'

class Results extends Component {

    constructor(props) {
        super(props)
        this.state = {
            results: []
        }
    }

    componentDidMount() {
        this.getResults()
    }

    getResults = _ => {
        fetch('http://dev.jasperzwiers.eu/report/all')
            .then(response => response.json())
            .then(response => this.setState({ ...this.state, results: response.data }))
            .catch(err => console.log(err))
        this.forceUpdate()
    }

    render() {
        let { selectedLocations, selectedModules, selectedStatuses } = this.props.location.state
        let { results } = this.state
        return (
            <div className="animated fadeIn">
                <div className="report-result">
                    <Button id="back-button" onClick={() => { window.history.back() }}>Terug</Button>
                    <SelectedFilters selectedLocations={selectedLocations} selectedModules={selectedModules} selectedStatuses={selectedStatuses}/>
                    <GroupStatistics results={results} selectedLocations={selectedLocations}/>
                    <Row>
                        <Col sm="6">
                            <Card>
                                <CardHeader>
                                    Rapportage Resultaat
                                </CardHeader>
                                <CardBody>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card>
                                <CardHeader>
                                    Rapportage Resultaat
                                </CardHeader>
                                <CardBody>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Results
