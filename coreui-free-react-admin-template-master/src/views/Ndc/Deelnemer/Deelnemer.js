import React, { Component } from 'react'
import DeelnemerInfo from '../../../components/Card/DeelnemerInfo'
import DeelnemerTable from '../../../components/Table/DeelnemerTable'

class Deelnemer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            deelnemers: [{
                deelnemerID: '',
                voornaam: '',
                achternaam: '',
                geboortedatum: '',
                verblijfstatus: '',
                moduleNaam: ''
            }],
            currentlySelectedDeelnemer: 0
        }
        this.getSelectedDeelnemer = this.getSelectedDeelnemer.bind(this)
    }

    componentDidMount() {
        this.getDeelnemers()
    }

    getSelectedDeelnemer(data) {
        this.setState({ currentlySelectedDeelnemer: data })
    }

    getDeelnemers = _ => {
        fetch(`http://localhost:4000/moduledeelnemers?modules=${this.props.match.params.id}`)
            .then(response => response.json())
            .then(response => this.setState({ deelnemers: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        const { deelnemers, currentlySelectedDeelnemer } = this.state
        const deelnemersObject = deelnemers[currentlySelectedDeelnemer]
        return (
            <div className="animated fadeIn">
                <div className="card">
                    <div className="card-header">
                        <i className="icon-people"></i>Deelnemers - Module {deelnemers[0].moduleNaam}
                    </div>
                    <div className="card-body">
                        <div className="deelnemer-card">
                            <DeelnemerInfo deelnemersObject={deelnemersObject} />
                            <DeelnemerTable getSelectedDeelnemer={this.getSelectedDeelnemer} deelnemers={deelnemers} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Deelnemer