import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import ModulesInfo from '../../../components/Card/ModulesInfo'

class Modules extends Component {
  
  state = {
    modules: []
  }

  componentDidMount() {
    this.getModules()
  }

  getModules = _ => {
    fetch('http://localhost:4000/modules')
      .then(response =>response.json())
      .then(response => this.setState({ modules: response.data }))
      .catch(err => console.log(err))
  }

  renderModule = ({ moduleID, naam, locatie }) => <tr><td>{moduleID}</td><td>{naam}</td><td>{locatie}</td></tr>
  
  render() {
    const { modules } = this.state
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i>Modules
          </CardHeader>
          <CardBody>
            <div className="module-card">
              <ModulesInfo />
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
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Modules;
