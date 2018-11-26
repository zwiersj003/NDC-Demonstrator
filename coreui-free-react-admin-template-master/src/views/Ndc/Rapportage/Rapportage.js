import React, { Component } from 'react'
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Col, Collapse, Fade, Row } from 'reactstrap';


class Rapportage extends Component {
    constructor(props) {
        super(props);
        this.onEntering = this.onEntering.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.toggle = this.toggle.bind(this);
        this.toggleAccordion = this.toggleAccordion.bind(this);
        this.toggleCustom = this.toggleCustom.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
          collapse: false,
          accordion: [true, true, false],
          custom: [false, false, false, false, false, false, false, false, false],
          status: 'Closed',
          fadeIn: true,
          timeout: 300,
        };
      }
    
      onEntering() {
        this.setState({ status: 'Opening...' });
      }
    
      onEntered() {
        this.setState({ status: 'Opened' });
      }
    
      onExiting() {
        this.setState({ status: 'Closing...' });
      }
    
      onExited() {
        this.setState({ status: 'Closed' });
      }
    
      toggle() {
        this.setState({ collapse: !this.state.collapse });
      }
    
      toggleAccordion(tab) {
    
        const prevState = this.state.accordion;
        const state = prevState.map((x, index) => tab === index ? !x : false);
    
        this.setState({
          accordion: state,
        });
      }
    
      toggleCustom(tab) {
    
        const prevState = this.state.custom;
        const state = prevState.map((x, index) => tab === index ? !x : false);
    
        this.setState({
          custom: state,
        });
      }
    
      toggleFade() {
        this.setState({ fadeIn: !this.state.fadeIn });
      }
    render() {
        return (
            <div className="animated fadeIn">
                <div className="row">
                    <div className="col-3">
                        <div className="card card-filters">
                            <div className="card-header">
                                Filters
                            </div>
                            <div className="card-body">
                                <div className="deelnemer-card">

                                    <h2>Filteren op:</h2>
                                
                                <button class='accordion'className="accordion" onClick={() => this.toggleCustom(0)} aria-expanded={this.state.custom[0]} aria-controls="exampleAccordion1">Leeftijd</button>
                                <dev class="accordion-content">
                                <Collapse isOpen={this.state.custom[0]} data-parent="#exampleAccordion" id="exampleAccordion1">
                                <p>
                                To do
                                </p>
                                </Collapse>
                                </dev>

                                <button class='accordion'className="accordion" onClick={() => this.toggleCustom(1)} aria-expanded={this.state.custom[1]} aria-controls="exampleAccordion2">Module</button>
                                <dev class="accordion-content">
                                <Collapse isOpen={this.state.custom[1]} data-parent="#exampleAccordion" id="exampleAccordion2">
                                
                                    <form>
                                        <div class="multiselect">
                                            <div class="selectBox" onclick="showCheckboxes()">
                                                <div id="checkboxes"  class="margin">
                                                    <div>
                                                        <label for="one">
                                                            <input type="checkbox" id="one" />Module X</label>
                                                    </div>
                                                    <div>
                                                        <label for="two">
                                                            <input type="checkbox" id="two" />Module Y</label>
                                                    </div>
                                                    <div>
                                                        <label for="three">
                                                            <input type="checkbox" id="three" />Module Z</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </Collapse>
                                </dev>


                                <button class='accordion'className="accordion" onClick={() => this.toggleCustom(2)} aria-expanded={this.state.custom[2]} aria-controls="exampleAccordion3">Status</button>
                                <dev class="accordion-content">
                                <Collapse isOpen={this.state.custom[2]} data-parent="#exampleAccordion" id="exampleAccordion3">
                                    
                                    <form>
                                        <div class="multiselect">
                                            <div class="selectBox" onclick="showCheckboxes()">
                                                <div id="checkboxes"  class="margin">
                                                    <div>
                                                        <label for="one">
                                                            <input type="checkbox" id="one" />Status X</label>
                                                    </div>
                                                    <div>
                                                        <label for="two">
                                                            <input type="checkbox" id="two" />Status Y</label>
                                                    </div>
                                                    <div>
                                                        <label for="three">
                                                            <input type="checkbox" id="three" />Status Z</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </Collapse>
                                </dev>

                                <button class='accordion'className="accordion" onClick={() => this.toggleCustom(3)} aria-expanded={this.state.custom[3]} aria-controls="exampleAccordion4">Voorgang per module</button>
                                <dev class="accordion-content">
                                <Collapse isOpen={this.state.custom[3]} data-parent="#exampleAccordion" id="exampleAccordion4">
                                    <form>
                                        <div class="multiselect">
                                            <div class="selectBox" onclick="showCheckboxes()">
                                                <div id="checkboxes"  class="margin">
                                                    <div>
                                                        <label for="one">
                                                            <input type="checkbox" id="one" />Module X</label>
                                                    </div>
                                                    <div>
                                                        <label for="two">
                                                            <input type="checkbox" id="two" />Module Y</label>
                                                    </div>
                                                    <div>
                                                        <label for="three">
                                                            <input type="checkbox" id="three" />Module Z</label>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </Collapse>
                                </dev>

                                <button class='accordion'className="accordion" onClick={() => this.toggleCustom(4)} aria-expanded={this.state.custom[4]} aria-controls="exampleAccordion5">Locatie</button>
                                <dev class="accordion-content">
                                <Collapse isOpen={this.state.custom[4]} data-parent="#exampleAccordion" id="exampleAccordion5">
                                    <form>
                                        <div class="multiselect">
                                            <div class="selectBox" onclick="showCheckboxes()">
                                                <div id="checkboxes"  class="margin">
                                                    <div>
                                                        <label for="one">
                                                            <input type="checkbox" id="one" />Locatie X</label>
                                                    </div>
                                                    <div>
                                                        <label for="two">
                                                            <input type="checkbox" id="two" />Locatie Y</label>
                                                    </div>
                                                    <div>
                                                        <label for="three">
                                                            <input type="checkbox" id="three" />Locatie Z</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </Collapse>
                                </dev>

                                <button class='accordion'className="accordion" onClick={() => this.toggleCustom(5)} aria-expanded={this.state.custom[5]} aria-controls="exampleAccordion6">Voorgang per module per periode</button>
                                <dev class="accordion-content">
                                <Collapse isOpen={this.state.custom[5]} data-parent="#exampleAccordion" id="exampleAccordion6">
                                    <form>
                                        <div class="multiselect">
                                            <div class="selectBox" onclick="showCheckboxes()">
                                                <div id="checkboxes"  class="margin">
                                                    <div>
                                                        <label for="one">
                                                            <input type="checkbox" id="one" />Periode X</label>
                                                    </div>
                                                    <div>
                                                        <label for="two">
                                                            <input type="checkbox" id="two" />Periode Y</label>
                                                    </div>
                                                    <div>
                                                        <label for="three">
                                                            <input type="checkbox" id="three" />Periode Z</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </Collapse>
                                </dev>   
                                    
                                <button class='accordion'className="accordion" onClick={() => this.toggleCustom(6)} aria-expanded={this.state.custom[6]} aria-controls="exampleAccordion7">Voortgang per locatie</button>
                                <dev class="accordion-content">
                                <Collapse isOpen={this.state.custom[6]} data-parent="#exampleAccordion" id="exampleAccordion7">
                                    <form>
                                        <div class="multiselect">
                                            <div class="selectBox" onclick="showCheckboxes()">
                                                <div id="checkboxes"  class="margin">
                                                    <div>
                                                        <label for="one">
                                                            <input type="checkbox" id="one" />Locatie X </label>
                                                    </div>
                                                    <div>
                                                        <label for="two">
                                                            <input type="checkbox" id="two" />Locatie Y</label>
                                                    </div>
                                                    <div>
                                                        <label for="three">
                                                            <input type="checkbox" id="three" />Locatie Z</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </Collapse>
                                </dev>    

                                <button class='accordion'className="accordion" onClick={() => this.toggleCustom(7)} aria-expanded={this.state.custom[7]} aria-controls="exampleAccordion8">Voortgang module t.o.v. vorige periode(n)</button>
                                <dev class="accordion-content">
                                <Collapse isOpen={this.state.custom[7]} data-parent="#exampleAccordion" id="exampleAccordion8">
                                    <form>
                                        <div class="multiselect">
                                            <div class="selectBox" onclick="showCheckboxes()">
                                                <div id="checkboxes"  class="margin">
                                                    <div>
                                                        <label for="one">
                                                            <input type="checkbox" id="one" />Voortgang X</label>
                                                    </div>
                                                    <div>
                                                        <label for="two">
                                                            <input type="checkbox" id="two" />Voortgang Y</label>
                                                    </div>
                                                    <div>
                                                        <label for="three">
                                                            <input type="checkbox" id="three" />Voortang Z</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </Collapse>
                                </dev>

                                <button class='accordion'className="accordion" onClick={() => this.toggleCustom(8)} aria-expanded={this.state.custom[8]} aria-controls="exampleAccordion9">Score van voortgang</button>
                                <dev class="accordion-content">
                                <Collapse isOpen={this.state.custom[8]} data-parent="#exampleAccordion" id="exampleAccordion9">
                                    <form>
                                        <div class="multiselect">
                                            <div class="selectBox" onclick="showCheckboxes()">
                                                <div id="checkboxes"  class="margin">
                                                    <div>
                                                        <label for="one">
                                                            <input type="checkbox" id="one" />Score X</label>
                                                    </div>
                                                    <div>
                                                        <label for="two">
                                                            <input type="checkbox" id="two" />Score Y</label>
                                                    </div>
                                                    <div>
                                                        <label for="three">
                                                            <input type="checkbox" id="three" />Score Z</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </Collapse>
                                </dev>


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
                                <table width="50%" class="table table-striped table-bordered table-hover" id="dataTables-example">
                                    <thead>
                                        <tr>
                                            <th>Deelnemer</th>
                                            <th>Voornaam</th>
                                            <th>Achternaam</th>
                                            <th>leeftijd</th>
                                            <th>locatie</th>
                                            <th>Vooruitgang</th>
                                            <th>Subsidiabel</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="odd gradeX">
                                            <td>0001</td>
                                            <td>Johan</td>
                                            <td>van Hetschip</td>
                                            <td class="center">48</td>
                                            <td class="center">Utrecht</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="even gradeC">
                                            <td>0002</td>
                                            <td>Erica</td>
                                            <td>Peterskerk</td>
                                            <td class="center">53</td>
                                            <td class="center">Amsterdam</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="odd gradeX">
                                            <td>0001</td>
                                            <td>Johan</td>
                                            <td>van Hetschip</td>
                                            <td class="center">48</td>
                                            <td class="center">Utrecht</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="even gradeC">
                                            <td>0002</td>
                                            <td>Erica</td>
                                            <td>Peterskerk</td>
                                            <td class="center">53</td>
                                            <td class="center">Amsterdam</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="odd gradeX">
                                            <td>0001</td>
                                            <td>Johan</td>
                                            <td>van Hetschip</td>
                                            <td class="center">48</td>
                                            <td class="center">Utrecht</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="even gradeC">
                                            <td>0002</td>
                                            <td>Erica</td>
                                            <td>Peterskerk</td>
                                            <td class="center">53</td>
                                            <td class="center">Amsterdam</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="odd gradeX">
                                            <td>0001</td>
                                            <td>Johan</td>
                                            <td>van Hetschip</td>
                                            <td class="center">48</td>
                                            <td class="center">Utrecht</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="even gradeC">
                                            <td>0002</td>
                                            <td>Erica</td>
                                            <td>Peterskerk</td>
                                            <td class="center">53</td>
                                            <td class="center">Amsterdam</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="odd gradeX">
                                            <td>0001</td>
                                            <td>Johan</td>
                                            <td>van Hetschip</td>
                                            <td class="center">48</td>
                                            <td class="center">Utrecht</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="even gradeC">
                                            <td>0002</td>
                                            <td>Erica</td>
                                            <td>Peterskerk</td>
                                            <td class="center">53</td>
                                            <td class="center">Amsterdam</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="odd gradeX">
                                            <td>0001</td>
                                            <td>Johan</td>
                                            <td>van Hetschip</td>
                                            <td class="center">48</td>
                                            <td class="center">Utrecht</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="even gradeC">
                                            <td>0002</td>
                                            <td>Erica</td>
                                            <td>Peterskerk</td>
                                            <td class="center">53</td>
                                            <td class="center">Amsterdam</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="odd gradeX">
                                            <td>0001</td>
                                            <td>Johan</td>
                                            <td>van Hetschip</td>
                                            <td class="center">48</td>
                                            <td class="center">Utrecht</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="even gradeC">
                                            <td>0002</td>
                                            <td>Erica</td>
                                            <td>Peterskerk</td>
                                            <td class="center">53</td>
                                            <td class="center">Amsterdam</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="odd gradeX">
                                            <td>0001</td>
                                            <td>Johan</td>
                                            <td>van Hetschip</td>
                                            <td class="center">48</td>
                                            <td class="center">Utrecht</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="even gradeC">
                                            <td>0002</td>
                                            <td>Erica</td>
                                            <td>Peterskerk</td>
                                            <td class="center">53</td>
                                            <td class="center">Amsterdam</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="odd gradeX">
                                            <td>0001</td>
                                            <td>Johan</td>
                                            <td>van Hetschip</td>
                                            <td class="center">48</td>
                                            <td class="center">Utrecht</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="even gradeC">
                                            <td>0002</td>
                                            <td>Erica</td>
                                            <td>Peterskerk</td>
                                            <td class="center">53</td>
                                            <td class="center">Amsterdam</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rapportage