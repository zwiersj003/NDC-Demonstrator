import React, { Component } from 'react';
import { Table } from 'reactstrap'

class ModulesTable extends Component {

    constructor(props) {
        super(props)
    }

    renderModule = ({ moduleID, naam, locatie }) => <tr onClick={() => this.props.getCurrentlySelected(moduleID)}><td>{moduleID}</td><td>{naam}</td><td>{locatie}</td></tr>

    render() {
        let { modules } = this.props
        return (
            <div className="modules">
                <Table responsive striped hover bordered id="table-modules">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Naam</th>
                            <th>Locatie</th>
                        </tr>
                    </thead>
                    <tbody>
                        {modules.map(this.renderModule)}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ModulesTable