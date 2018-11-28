import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import ModulesInfo from '../../../components/Card/ModulesInfo'
import ModulesTable from '../../../components/Table/ModulesTable'

class Modules extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
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
      currentlySelected: 0
    }

    this.getSelectedModule = this.getSelectedModule.bind(this)
  }

  componentDidMount(){
    this.getModules()
  }

  getModules = _ => {
    fetch('http://localhost:4000/modules')
      .then(response =>response.json())
      .then(response => this.setState({...this.state, modules: response.data}))
      .catch(err => console.log(err))
    this.forceUpdate()
  }

  getSelectedModule(data){
    this.setState({ currentlySelected: data })
  }
  
  render() {
    let { modules, currentlySelected } = this.state
    const modulesObject = modules[currentlySelected]
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i>Modules
          </CardHeader>
          <CardBody>
            <div className="module-card">
              <ModulesInfo modulesObject={modulesObject}/>
              <ModulesTable getSelectedModule={this.getSelectedModule} modules={modules}/>
            </div>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default Modules;
