import React, { Component } from 'react'
import { Button, Card, CardBody } from 'reactstrap'
import ReactTable from 'react-table'
import toastr from 'toastr'
import _ from 'lodash'
import LocationFilter from '../../../components/Filter/LocationFilter'
import ModuleFilter from '../../../components/Filter/ModuleFilter'
import StatusFilter from '../../../components/Filter/StatusFilter'

class Rapportage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deelnemers: [{
                deelnemerID: '',
                voornaam: '',
                achternaam: '',
                geboortedatum: '',
                verblijfstatus: ''
            }],
            modules: [{
                naam: '',
                locatie: '',
                moduleID: '',
                jaar: '',
                voornaam: '',
                achternaam: '',
                telefoonnummer: '',
                email: '',
                amountOfDeelnemers: ''
            }],
            locations: [],
            statuses: [],
            everything: []
        }
    }

    componentDidMount() {
        this.getDeelnemers()
        this.getModules()
        this.getAll()
    }

    addFilter() {
        var filter = { naam: 'Bouw 1', verblijfstatus: 'Uitgeprocedeerd' }
        var filteredModules = this.state.everything.filter(function (item) {
            for (var key in filter) {
                if (item[key] === undefined || item[key] != filter[key])
                    return false;
            }
            return true;
        });
        console.log('Filtered Array')
        console.log(filteredModules)
    }

    getDeelnemers = _ => {
        fetch(`http://dev.jasperzwiers.eu/deelnemers`)
            .then(response => response.json())
            .then(response => this.setState({ deelnemers: response.data }))
            .catch(err => console.log(err))
    }

    getModules = _ => {
        fetch('http://dev.jasperzwiers.eu/modules')
            .then(response => response.json())
            .then(response => this.setState({ ...this.state, modules: response.data },  () => { this.getAllFilterData() }))
            .catch(err => console.log(err))
        this.forceUpdate()
    }

    getAll = _ => {
        fetch('http://dev.jasperzwiers.eu/moduledeelnemers/all')
            .then(response => response.json())
            .then(response => this.setState({ ...this.state, everything: response.data }, () => { this.addFilter() }))
            .catch(err => console.log(err))
        this.forceUpdate()
    }

    getAllFilterData() {
        this.getAllLocations()
        this.getAllStatuses()
    }

    getAllLocations() {
        var locations = _.chain(this.state.modules).countBy('locatie').map((count, locatie) => ({ locatie })).value()
        console.log(locations)
        this.setState({ locations: locations });
    }

    getAllStatuses() {
        var statuses = _.chain(this.state.deelnemers).countBy('verblijfstatus').map((count, status) => ({ status })).value()
        console.log(statuses)
        this.setState({ statuses: statuses });
    }

    downloadRapportage() {
        this.count = this.count || 1
        toastr.options = {
            positionClass: 'toast-top-right',
            hideDuration: 30,
            timeOut: 10000
        }
        toastr.clear()
        setTimeout(() => toastr.warning(`Rapportage downloaden/printen werkt nog niet`), 300)
    }

    // testLodash() {
    //     console.log(_.filter(this.state.modules, { locatie: 'Amsterdam' }))
    //     console.log(_.chain(this.state.modules).countBy('locatie').map((count, locatie) => ({ locatie })).value())
    // }

    render() {
        let { deelnemers, modules, locations, statuses } = this.state

        const columns = [{
            Header: 'ID',
            accessor: 'deelnemerID'
        },
        {
            Header: 'Voornaam',
            accessor: 'voornaam'
        },
        {
            Header: 'Achternaam',
            accessor: 'achternaam'
        },
        {
            Header: 'Geboortedatum',
            accessor: 'geboortedatum'
        },
        {
            Header: 'Verblijfstatus',
            accessor: 'verblijfstatus'
        }]

        return (
            <div className="animated fadeIn">
                <div className="rapportage">
                    <div className="row">
                        <div className="col-3">
                            <Card>
                                <CardBody>
                                    <Button id="download-button" onClick={() => { this.downloadRapportage() }}>Download Rapportage</Button>
                                </CardBody>
                            </Card>
                            <div className="card card-filters">
                                <div className="card-header">
                                    Filters
                                </div>
                                <div className="card-body">
                                    <div className="deelnemer-card">
                                        <h2>Filteren op:</h2>
                                        <LocationFilter locations={locations} />
                                        <ModuleFilter modules={modules} />
                                        <StatusFilter statuses={statuses}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="card card-rapportage">
                                <div className="card-header">
                                    Rapportage
                                </div>
                                <div className="card-body">
                                    <ReactTable className="-striped -highlight" data={deelnemers} columns={columns} defaultPageSize={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rapportage