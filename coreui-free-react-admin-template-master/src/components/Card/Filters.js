import React, { Component } from 'react'
import { Collapse } from 'reactstrap'

class Filters extends Component {

    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.toggleAccordion = this.toggleAccordion.bind(this)
        this.toggleCustom = this.toggleCustom.bind(this)
        this.toggleFade = this.toggleFade.bind(this)
        this.state = {
            collapse: false,
            accordion: [true, true, false],
            custom: [true, false, false, false, false, false, false, false, false],
            status: 'Closed',
            fadeIn: true,
            timeout: 300
        }
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse })
    }

    toggleAccordion(tab) {
        const prevState = this.state.accordion
        const state = prevState.map((x, index) => tab === index ? !x : false)

        this.setState({
            accordion: state,
        })
    }

    toggleCustom(tab) {
        const prevState = this.state.custom
        const state = prevState.map((x, index) => tab === index ? !x : false)

        this.setState({
            custom: state,
        })
    }

    downloadRapportage() {
        this.count = this.count || 1
        toastr.options = {
            positionClass: 'toast-top-right',
            hideDuration: 30,
            timeOut: 10000
        }
        toastr.clear()
        setTimeout(() => toastr.warning(`Rapportage downloaden/printen werkt nog niet`), 300)
    }

    toggleFade() {
        this.setState({ fadeIn: !this.state.fadeIn })
    }

    render() {
        return (
            <h2>Filteren op:</h2>
            <button className="accordion" onClick={() => this.toggleCustom(0)} aria-expanded={this.state.custom[0]} aria-controls="exampleAccordion1">Leeftijd</button>
            <dev class="accordion-content">
                <Collapse isOpen={this.state.custom[0]} data-parent="#exampleAccordion" id="exampleAccordion1">
                    <p>
                        To do
                    </p>
                </Collapse>
            </dev>
            <button className="accordion" onClick={() => this.toggleCustom(1)} aria-expanded={this.state.custom[1]} aria-controls="exampleAccordion2">Module</button>
            <dev class="accordion-content">
                <Collapse isOpen={this.state.custom[1]} data-parent="#exampleAccordion" id="exampleAccordion2">
                    <form>
                        <div class="multiselect">
                            <div class="selectBox" onclick="showCheckboxes()">
                                <div id="checkboxes" class="margin">
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
            <button className="accordion" onClick={() => this.toggleCustom(2)} aria-expanded={this.state.custom[2]} aria-controls="exampleAccordion3">Status</button>
            <dev class="accordion-content">
                <Collapse isOpen={this.state.custom[2]} data-parent="#exampleAccordion" id="exampleAccordion3">
                    <form>
                        <div class="multiselect">
                            <div class="selectBox" onclick="showCheckboxes()">
                                <div id="checkboxes" class="margin">
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
            <button className="accordion" onClick={() => this.toggleCustom(3)} aria-expanded={this.state.custom[3]} aria-controls="exampleAccordion4">Voorgang per module</button>
            <dev class="accordion-content">
                <Collapse isOpen={this.state.custom[3]} data-parent="#exampleAccordion" id="exampleAccordion4">
                    <form>
                        <div class="multiselect">
                            <div class="selectBox" onclick="showCheckboxes()">
                                <div id="checkboxes" class="margin">
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

            <button className="accordion" onClick={() => this.toggleCustom(4)} aria-expanded={this.state.custom[4]} aria-controls="exampleAccordion5">Locatie</button>
            <dev class="accordion-content">
                <Collapse isOpen={this.state.custom[4]} data-parent="#exampleAccordion" id="exampleAccordion5">
                    <form>
                        <div class="multiselect">
                            <div class="selectBox" onclick="showCheckboxes()">
                                <div id="checkboxes" class="margin">
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

            <button className="accordion" onClick={() => this.toggleCustom(5)} aria-expanded={this.state.custom[5]} aria-controls="exampleAccordion6">Voorgang per module per periode</button>
            <dev class="accordion-content">
                <Collapse isOpen={this.state.custom[5]} data-parent="#exampleAccordion" id="exampleAccordion6">
                    <form>
                        <div class="multiselect">
                            <div class="selectBox" onclick="showCheckboxes()">
                                <div id="checkboxes" class="margin">
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

            <button className="accordion" onClick={() => this.toggleCustom(6)} aria-expanded={this.state.custom[6]} aria-controls="exampleAccordion7">Voortgang per locatie</button>
            <dev class="accordion-content">
                <Collapse isOpen={this.state.custom[6]} data-parent="#exampleAccordion" id="exampleAccordion7">
                    <form>
                        <div class="multiselect">
                            <div class="selectBox" onclick="showCheckboxes()">
                                <div id="checkboxes" class="margin">
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

            <button className="accordion" onClick={() => this.toggleCustom(7)} aria-expanded={this.state.custom[7]} aria-controls="exampleAccordion8">Voortgang module t.o.v. vorige periode(n)</button>
            <dev class="accordion-content">
                <Collapse isOpen={this.state.custom[7]} data-parent="#exampleAccordion" id="exampleAccordion8">
                    <form>
                        <div class="multiselect">
                            <div class="selectBox" onclick="showCheckboxes()">
                                <div id="checkboxes" class="margin">
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

            <button className="accordion" onClick={() => this.toggleCustom(8)} aria-expanded={this.state.custom[8]} aria-controls="exampleAccordion9">Score van voortgang</button>
            <dev class="accordion-content">
                <Collapse isOpen={this.state.custom[8]} data-parent="#exampleAccordion" id="exampleAccordion9">
                    <form>
                        <div class="multiselect">
                            <div class="selectBox" onclick="showCheckboxes()">
                                <div id="checkboxes" class="margin">
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
    )
    }
}

export default Filters
