import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

class Question extends Component {

    constructor(props) {
        super(props)
    }

    setInputChecked(input) {
        document.querySelector(`input[id=${input}]`).checked = true
    }

    renderQuestion = ({ name, question }) => (
        <div className={"input " + name}>
            <h5 className="required">{question}</h5>
            <Row>
                <Col className="border" md="1">
                    <center><img src="../../../../assets/img/Smileyrood.png" height="40px" width="45px" position="text-center" /></center>
                </Col>
                <Col className="border" md="2" onClick={() => { this.setInputChecked(name + '-1') }}>
                    <label>Helemaal mee oneens</label>
                    <center><input type="radio" name={name} value="1" id={name + '-1'} /></center>
                </Col>
                <Col className="border" md="2" onClick={() => { this.setInputChecked(name + '-2') }}>
                    <label>Oneens</label>
                    <center><input type="radio" name={name} value="2" id={name + '-2'} /></center>
                </Col>
                <Col className="border" md="2" onClick={() => { this.setInputChecked(name + '-3') }}>
                    <label>Neutraal</label>
                    <center><input type="radio" name={name} value="3" id={name + '-3'} /></center>
                </Col>
                <Col className="border" md="2" onClick={() => { this.setInputChecked(name + '-4') }}>
                    <label>Eens</label>
                    <center><input type="radio" name={name} value="4" id={name + '-4'} /></center>
                </Col>
                <Col className="border" md="2" onClick={() => { this.setInputChecked(name + '-5') }}>
                    <label>Helemaal mee eens</label>
                    <center><input type="radio" name={name} value="5" id={name + '-5'} /></center>
                </Col>
                <Col className="border" md="1">
                    <center><img src="../../../../assets/img/Smileygroen.png" height="40px" width="45px" position="text-center" /></center>
                </Col>
            </Row>
        </div>)

    render() {
        const { questions } = this.props
        return (
            <div className="questions">
                {questions.map(this.renderQuestion)}
            </div>
        )
    }
}

export default Question
