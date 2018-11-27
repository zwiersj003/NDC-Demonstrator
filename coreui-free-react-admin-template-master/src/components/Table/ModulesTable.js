import React, { Component } from 'react';
import ReactTable from 'react-table'

class ModulesTable extends Component {

    constructor(props) {
        super(props)
    }

    renderModule = ({ moduleID, naam, locatie }) => <tr onClick={() => this.props.getCurrentlySelected(moduleID)}><td>{moduleID}</td><td>{naam}</td><td>{locatie}</td></tr>

    render() {
        let { modules } = this.props
        const modulesLength = modules.length

        const columns = [{
            Header: 'ID',
            accessor: 'moduleID'
        },
        {
            Header: 'Module',
            accessor: 'naam'
        },
        {
            Header: 'Locatie',
            accessor: 'locatie'
        }]

        return (
            <div className="modules">
                <ReactTable className="-striped -highlight" data={modules} columns={columns} pageSize={modulesLength} showPagination={false} getTdProps={(state, rowInfo, column, instance) => {
                    return {
                        onClick: () => {
                            console.log("It was in this row:", rowInfo)
                            this.props.getSelectedModule(parseInt(rowInfo.nestingPath))
                        }
                    };
                }} />
            </div>
        )
    }
}

export default ModulesTable