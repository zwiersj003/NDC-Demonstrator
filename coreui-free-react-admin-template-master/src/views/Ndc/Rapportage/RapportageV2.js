import React, { Component } from 'react'
import { Button, Card, CardHeader, CardBody, Label, Row, Col } from 'reactstrap'
import Select from 'react-select'
import makeAnimated from 'react-select/lib/animated'
import _ from 'lodash'
import AgeSlider from '../../../components/Filter/AgeSlider'
import { withRouter } from 'react-router-dom'

class RapportageV2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            everything: [],
            modules: [],
            selectedModules: [],
            selectedLocations: [],
            selectedStatuses: [],
            allModuleNames: [],
            locations: [],
            statuses: []
        }
    }

    componentDidMount() {
        this.getAll()
        this.getModules()
    }

    handleChangeModules = (selectedOption) => {
        this.setState({ selectedModules: selectedOption })
    }

    handleChangeLocations = (selectedOption) => {
        this.setState({ selectedLocations: selectedOption })
    }

    handleChangeStatuses = (selectedOption) => {
        this.setState({ selectedStatuses: selectedOption })
    }

    getAll = _ => {
        fetch('http://dev.jasperzwiers.eu/moduledeelnemers/all')
            .then(response => response.json())
            .then(response => this.setState({ ...this.state, everything: response.data }, () => this.setAllFilterData()))
            .catch(err => console.log(err))
        this.forceUpdate()
    }

    getModules = _ => {
        fetch('http://dev.jasperzwiers.eu/modules')
            .then(response => response.json())
            .then(response => this.setState({ ...this.state, modules: response.data }, () => this.setAllFilterData()))
            .catch(err => console.log(err))
        this.forceUpdate()
    }

    setAllFilterData() {
        this.getAllModuleNames()
        this.getAllLocations()
        this.getAllStatuses()
    }

    getAllModuleNames() {
        const modules = this.state.modules
        var moduleNames = []
        for (let index = 0; index < modules.length; index++) {
            moduleNames.push({ label: modules[index].naam, value: modules[index].naam })
        }
        this.setState({ allModuleNames: moduleNames })
    }

    getAllLocations() {
        var locations = _.chain(this.state.modules).countBy('locatie').map((count, locatie) => ({ locatie, count })).value()
        var locationsWithValue = []
        for (let index = 0; index < locations.length; index++) {
            locationsWithValue.push({ label: locations[index].locatie, value: locations[index].locatie, count: locations[index].count})
        }
        console.log(locationsWithValue)
        this.setState({ locations: locationsWithValue });
    }

    getAllStatuses() {
        var statuses = _.chain(this.state.everything).countBy('verblijfstatus').map((count, status) => ({ status })).value()
        var statusesWithValue = []
        for (let index = 0; index < statuses.length; index++) {
            statusesWithValue.push({ label: statuses[index].status, value: statuses[index].status })
        }
        this.setState({ statuses: statusesWithValue });
    }

    render() {
        //<Range min={1} max={100}allowCross={false} defaultValue={[1, 100]} onChange={this.log}/>
        const ResultRouteButton = withRouter(({ history }) => (
            <Button onClick={() => {
                if(!this.state.selectedLocations.length == 0) {
                    history.push({
                        pathname: `/rapportage/resultaat`,
                        state: {
                            selectedModules: this.state.selectedModules,
                            selectedLocations: this.state.selectedLocations,
                            selectedStatuses: this.state.selectedStatuses
                        }
                    })
                } else {
                    history.push({
                        pathname: `/rapportage/resultaat`,
                        state: {
                            selectedModules: this.state.selectedModules,
                            selectedLocations: this.state.locations,
                            selectedStatuses: this.state.selectedStatuses
                        }
                    })
                }
                
            }}>
                <b>Bekijk Rapportage</b>
            </Button>
        ))

        return (
            <div className="animated fadeIn">
                <div className="rapportagev2">
                    <Card>
                        <CardHeader>
                            Rapportage Selectie
                        </CardHeader>
                        <Row>
                            <Col xl="2"></Col>
                            <Col xl="8">
                                <CardBody className="report-card">
                                    <div className="filter-multi-select">
                                        <Label>Modules</Label>
                                        <Select
                                            components={makeAnimated()}
                                            value={this.state.selectedModules}
                                            onChange={this.handleChangeModules}
                                            options={this.state.allModuleNames}
                                            isMulti
                                        />
                                    </div>
                                    <div className="filter-multi-select">
                                        <Label>Locatie's</Label>
                                        <Select
                                            components={makeAnimated()}
                                            value={this.state.selectedLocations}
                                            onChange={this.handleChangeLocations}
                                            options={this.state.locations}
                                            isMulti
                                        />
                                    </div>
                                    <div className="filter-multi-select">
                                        <Label>Verblijfstatussen</Label>
                                        <Select
                                            components={makeAnimated()}
                                            value={this.state.selectedStatuses}
                                            onChange={this.handleChangeStatuses}
                                            options={this.state.statuses}
                                            isMulti
                                        />
                                    </div>
                                    <div className="filter-multi-select">
                                        <Label>Leeftijd</Label>
                                        <AgeSlider />
                                    </div>
                                    <Row>
                                        <Col xl="3"></Col>
                                        <Col xl="6">
                                            <ResultRouteButton>Download me</ResultRouteButton>
                                        </Col>
                                        <Col xl="3"></Col>
                                    </Row>
                                </CardBody>
                            </Col>
                            <Col xl="2"></Col>
                        </Row>
                    </Card>
                </div>
            </div>
        )
    }
}

export default RapportageV2
