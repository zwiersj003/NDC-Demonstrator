import React, { Component } from 'react'
import DeelnemerInfo from '../../../components/Card/DeelnemerInfo'
import DeelnemerTable from '../../../components/Table/DeelnemerTable'

class Deelnemer extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <div className="card">
                    <div className="card-header">
                        <i className="icon-people"></i>Deelnemers - Module Bouw
                    </div>
                    <div className="card-body">
                        <div className="deelnemer-card">
                            <DeelnemerInfo />
                            <DeelnemerTable />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Deelnemer