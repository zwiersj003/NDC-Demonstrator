import React, { Component } from 'react'
import { Button, Collapse } from 'reactstrap'

class ModuleFilter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            custom: [false]
        };

        this.toggleCustom = this.toggleCustom.bind(this);
    }

    toggleCustom(tab) {
        const prevState = this.state.custom;
        const state = prevState.map((x, index) => tab === index ? !x : false);

        this.setState({
            custom: state,
        });
    }

    renderFilterOptions = ({ naam }) => (
        <div className="filter-options" key={naam}>
            <label>
                <input type="checkbox" id="one" />{naam}
            </label>
        </div>
    )

    render() {
        return (
            <div className="moduleFilter filter" data-children=".item">
                <div className="item">
                    <Button onClick={() => this.toggleCustom(0)} aria-expanded={this.state.custom[0]} aria-controls="ModuleAccordion">
                        Module
                    </Button>
                    <Collapse isOpen={this.state.custom[0]} data-parent="#exampleAccordion">
                        <div className="multiselect">
                            <div className="selectBox">
                                {this.props.modules.map(this.renderFilterOptions)}
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
        )
    }
}

export default ModuleFilter
