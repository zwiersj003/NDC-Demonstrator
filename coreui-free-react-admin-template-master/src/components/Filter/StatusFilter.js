import React, { Component } from 'react'
import { Button, Collapse } from 'reactstrap'

class LocationFilter extends Component {

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

    renderFilterOptions = ({ status }) => (
        <div className="filter-options" key={status}>
            <label>
                <input type="checkbox" id={status + '-filter'} />{status}
            </label>
        </div>
    )

    render() {
        return (
            <div className="statusFilter filter" data-children=".item">
                <div className="item">
                    <Button onClick={() => this.toggleCustom(0)} aria-expanded={this.state.custom[0]} aria-controls="StatusAccordion">
                        Status
                        <i className="arrow"></i>
                    </Button>
                    <Collapse isOpen={this.state.custom[0]} data-parent="#exampleAccordion">
                        <div className="multiselect">
                            <div className="selectBox">
                                <div id="status-list">
                                    {this.props.statuses.map(this.renderFilterOptions)}
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
        )
    }
}

export default LocationFilter
