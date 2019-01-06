import React, { Component } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap'

class SelectedFilters extends Component {

    renderFilter = ({ label, value }) => (
        <li key={value}>{label}</li>
    )

    render() {
        let { selectedLocations, selectedModules, selectedStatuses } = this.props
        console.log(selectedModules)
        return (
            <Card>
                <CardHeader>
                    Geselecteerde Filters
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col sm="4">
                            <h4>Geselecteerde Modules: </h4>
                            <ul>
                                {selectedModules.map(this.renderFilter)}
                            </ul>
                        </Col>
                        <Col sm="4">
                            <h4>Geselecteerde Locatie's: </h4>
                            <ul>
                                {selectedLocations.map(this.renderFilter)}
                            </ul>
                        </Col>
                        <Col sm="4">
                            <h4>Geselecteerde Statussen: </h4>
                            <ul>
                                {selectedStatuses.map(this.renderFilter)}
                            </ul>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        )
    }
}

export default SelectedFilters
