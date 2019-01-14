import React, { Component } from 'react'
import ReactTable from 'react-table'

class ParticipantTable extends Component {

    render() {
        let { deelnemers } = this.props
        const deelnemersLength = deelnemers.length

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
        }]

        return (
            <div className="deelnemers">
                <ReactTable className="-striped -highlight" data={deelnemers} columns={columns} pageSize={deelnemersLength} showPagination={false} getTdProps={(state, rowInfo, column, instance) => {
                    return {
                        onClick: () => {
                            console.log("It was in this row:", rowInfo)
                            this.props.getSelectedDeelnemer(parseInt(rowInfo.nestingPath))
                        }
                    };
                }}/>
            </div>
        )
    }
}

export default ParticipantTable