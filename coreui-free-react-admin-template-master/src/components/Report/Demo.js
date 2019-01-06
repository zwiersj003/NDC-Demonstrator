import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap'
import PDF, { Text, AddPage, Line, Table, Html } from 'jspdf-react'

export default class Example extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('Component did mount')
        console.log(this.props.location.state)
        this.createReport()
    }

    moduleFilter() {
        const MODULES = this.props.location.state.selectedModules
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
        const LOCATIONS = this.props.location.state.selectedLocations
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
        const STATUSES = this.props.location.state.selectedStatuses
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
            fetch(`http://dev.jasperzwiers.eu/report?filters=${allFilters}`)
                .then(response => response.json())
                .then(response => this.setState({ ...this.state, reportData: response.data }, () => console.log(this.state.reportData)))
                .catch(err => console.log(err))
        } else {
            fetch(`http://dev.jasperzwiers.eu/report/all`)
                .then(response => response.json())
                .then(response => this.setState({ ...this.state, reportData: response.data }, () => console.log(this.state.reportData)))
                .catch(err => console.log(err))
        }
    }

    render() {
        const properties = { title: 'Acme' }
        const columns = ["ID", "Name", "Country"]
        const rows = [
            [1, "Shaw", "Tanzania"],
            [2, "Nelson", "Kazakhstan"],
            [3, "Garcia", "Madagascar"],
        ]
        let { selectedModules, selectedLocations, selectedStatuses } = this.props.location.state
        return (
            <div className="report-pdf">
                <Card>
                    <CardBody>
                        <div>
                        </div>
                        <React.Fragment>
                            <PDF properties={properties} preview={true}>
                                <AddPage />
                                <Table columns={columns} rows={rows} />
                                <AddPage format='a6' orientation='l' />
                                <Text x={10} y={10} color='red'>Sample</Text>
                                <Line lines={30} x={11} y={11} scale={11} />
                                <AddPage />
                                <Html sourceById='page' />
                            </PDF>
                            <div id="page" style={{
                                visibility: "hidden"
                            }}>
                                <h1>Source Html</h1>
                                <p>
                                    <strong>lorem ipsumLorem </strong>Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                    since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book. It has survived not only five centuries, but also the
                                    leap into electronic typesetting, remaining essentially unchanged. It was popularised
                                    in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including
                                    versions of Lorem Ipsum.
                            </p>
                            </div>
                        </React.Fragment>
                    </CardBody>
                </Card>
            </div>
        )
    }
}