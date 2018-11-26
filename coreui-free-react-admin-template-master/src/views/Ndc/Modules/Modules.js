import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Card, CardBody, CardHeader, Table } from 'reactstrap'
import ModulesInfo from '../../../components/Card/ModulesInfo'
import ModulesTable from '../../../components/Table/ModulesTable'

class Modules extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      modules: [{
        naam: '',
        locatie: '',
        moduleID: ''
      }],
      currentlySelected: 0
    }

    this.getCurrentlySelected = this.getCurrentlySelected.bind(this)
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

  getCurrentlySelected(data){
    this.setState({ currentlySelected: data - 1 })
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
              <ModulesTable getCurrentlySelected={this.getCurrentlySelected} modules={modules}/>
            </div>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default Modules;
