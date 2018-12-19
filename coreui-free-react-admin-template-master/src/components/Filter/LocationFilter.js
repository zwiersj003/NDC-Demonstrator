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

    renderFilterOptions = ({ locatie }) => (
        <div className="filter-options" key={locatie}>
            <label>
                <input type="checkbox" id={locatie + '-filter'} />{locatie}
            </label>
        </div>
    )

    render() {
        return (
            <div className="locationFilter filter" data-children=".item">
                <div className="item">
                    <Button onClick={() => this.toggleCustom(0)} aria-expanded={this.state.custom[0]} aria-controls="LocationAccordion">
                        Locatie
                        <i className="arrow"></i>
                    </Button>
                    <Collapse isOpen={this.state.custom[0]} data-parent="#exampleAccordion">
                        <div className="multiselect">
                            <div className="selectBox">
                                <div id="location-list">
                                    {this.props.locations.map(this.renderFilterOptions)}
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
