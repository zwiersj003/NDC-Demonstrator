import React, { Component } from 'react'
import { Range } from 'rc-slider'
import { Row, Col } from 'reactstrap'

class AgeSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            min: 0,
            max: 100
        }
    }

    onSliderChange = (value) => {
        console.log(value)
        console.log()
    }

    onMinChange = (e) => {
        console.log(e.target.value + ' - Value')
        this.setState({
            min: e.target.value,
        })
    }

    onMaxChange = (e) => {
        console.log(e.target.value + ' - Value')
        this.setState({
            max: e.target.value,
        })
    }

    render() {
        return (
            <div className="age-slider">
                <Row>
                    <Col xs="4" className="slider-min">
                        <label>Minimale Leeftijd: </label>
                        <input type="text" value={this.state.min} onChange={this.onMinChange} />
                    </Col>
                    <Col xs="4"></Col>
                    <Col xs="4" className="slider-max">
                        <label>Maximale Leeftijd: </label>
                        <input type="text" value={this.state.max} onChange={this.onMaxChange} />
                    </Col>
                </Row>
                <Range min={0} max={100}
                    onChange={this.onSliderChange}
                />
            </div>
        )
    }
}

export default AgeSlider
