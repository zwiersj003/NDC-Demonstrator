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
            selectedModules: null,
            selectedLocations: null,
            selectedStatuses: null,
            allModuleNames: [],
            locations: [],
            statuses: [],
            renderDocument: false,
            reportData: []
        }
    }

    componentDidMount() {
        this.getAll()
        this.getModules()
    }

    log(value) {
        console.log(value); //eslint-disable-line
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
        var locations = _.chain(this.state.modules).countBy('locatie').map((count, locatie) => ({ locatie })).value()
        var locationsWithValue = []
        for (let index = 0; index < locations.length; index++) {
            locationsWithValue.push({ label: locations[index].locatie, value: locations[index].locatie })
        }
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

    moduleFilter() {
        const MODULES = this.state.selectedModules
        let moduleFilter

        if (MODULES != null && MODULES.length > 0) {
            for (let i = 0; i < MODULES.length; i++) {
                if (!moduleFilter) {
                    moduleFilter = `(naam='${MODULES[i].value}'`
                } else {
                    moduleFilter = moduleFilter + ` OR naam='${MODULES[i].value}'`
                }
            }
            moduleFilter = moduleFilter + ')'
        }

        return moduleFilter
    }

    locationFilter() {
        const LOCATIONS = this.state.selectedLocations
        let locationFilter

        if (LOCATIONS != null && LOCATIONS.length > 0) {
            for (let i = 0; i < LOCATIONS.length; i++) {
                if (!locationFilter) {
                    locationFilter = `(locatie='${LOCATIONS[i].value}'`
                } else {
                    locationFilter = locationFilter + ` OR locatie='${LOCATIONS[i].value}'`
                }
            }
            locationFilter = locationFilter + ')'
        }

        return locationFilter
    }

    statusFilter() {
        const STATUSES = this.state.selectedStatuses
        let statusFilter

        if (STATUSES != null && STATUSES.length > 0) {
            for (let i = 0; i < STATUSES.length; i++) {
                if (!statusFilter) {
                    statusFilter = `(verblijfstatus='${STATUSES[i].value}'`
                } else {
                    statusFilter = statusFilter + ` OR verblijfstatus='${STATUSES[i].value}'`
                }
            }
            statusFilter = statusFilter + ')'
        }

        return statusFilter
    }

    createReport() {
        let moduleFilter, locationFilter, statusFilter, allFilters

        moduleFilter = this.moduleFilter()
        locationFilter = this.locationFilter()
        statusFilter = this.statusFilter()

        if (moduleFilter != null && locationFilter != null && statusFilter != null) {
            allFilters = moduleFilter + ' AND ' + locationFilter + ' AND ' + statusFilter
        } else if (moduleFilter != null && locationFilter != null) {
            allFilters = moduleFilter + ' AND ' + locationFilter
        } else if (moduleFilter != null && statusFilter != null) {
            allFilters = moduleFilter + ' AND ' + statusFilter
        } else if (statusFilter != null && locationFilter != null) {
            allFilters = statusFilter + ' AND ' + locationFilter
        } else if (moduleFilter != null) {
            allFilters = moduleFilter
        } else if (locationFilter != null) {
            allFilters = locationFilter
        } else if (statusFilter != null) {
            allFilters = statusFilter
        }
        console.log('All Filters: ' + allFilters)

        if (allFilters != null) {
            fetch(`http://localhost:4000/report?filters=${allFilters}`)
                .then(response => response.json())
                .then(response => this.setState({ ...this.state, reportData: response.data }, () => console.log(this.state.reportData)))
                .catch(err => console.log(err))
        } else {
            fetch(`http://localhost:4000/report/all`)
                .then(response => response.json())
                .then(response => this.setState({ ...this.state, reportData: response.data }, () => console.log(this.state.reportData)))
                .catch(err => console.log(err))
        }

    }

    render() {
        //<Range min={1} max={100}allowCross={false} defaultValue={[1, 100]} onChange={this.log}/>
        const ReportRouteButton = withRouter(({ history }) => (
            <Button onClick={() => {
                history.push({
                    pathname: `/rapportage/pdf`
                })
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
                                            <ReportRouteButton />
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
