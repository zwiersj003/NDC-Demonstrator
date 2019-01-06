import React, { Component } from 'react'
import { Range } from 'rc-slider'
import { Row, Col } from 'reactstrap'

class AgeSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            min: 0,
            max: 100,
            value: [0, 100]
        }
    }

    onSliderChange = (value) => {
        console.log('jasper')
        console.log(value)
        console.log('jasper')
        this.setState({
            min: value[0],
            max: value[1]
        })
    }

    onMinChange = (e) => {
        this.setState({
            min: parseInt(e.target.value) || 0
        })
    }

    onMaxChange = (e) => {
        this.setState({
            max: parseInt(e.target.value) || 100
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
                <Range min={0} max={100} value={[this.state.min, this.state.max]}
                onChange={this.onSliderChange}
                />
            </div>
        )
    }
}

export default AgeSlider
