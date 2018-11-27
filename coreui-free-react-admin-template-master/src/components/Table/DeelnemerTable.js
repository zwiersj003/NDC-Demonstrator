import React, { Component } from 'react'
import ReactTable from 'react-table'

class DeelnemerTable extends Component {

    constructor(props) {
        super(props)
    }

    calculateAge(geboortedatum) { // birthday is a date
        // console.log(geboortedatum)
        // var ageDifMs = Date.now() - geboortedatum.getTime();
        // var ageDate = new Date(ageDifMs); // miliseconds from epoch
        // return Math.abs(ageDate.getUTCFullYear() - 1970);
        var geboortedatum = geboortedatum
        var today = new Date();
        var birthDate = new Date(geboortedatum);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age = age - 1;
        }
        return age
    }

    // renderDeelnemer = ({ deelnemerID, voornaam, geboortedatum }) => (
    //     <tr key={deelnemerID} onClick={() => this.props.getSelectedDeelnemer(deelnemerID)}>
    //         <td>{deelnemerID}</td>
    //         <td>{voornaam}</td>
    //         <td>{this.calculateAge(geboortedatum)}</td>
    //     </tr>)

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

export default DeelnemerTable