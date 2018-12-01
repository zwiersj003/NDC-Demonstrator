import React, { Component } from 'react'
import { Input } from 'reactstrap'

class Question extends Component {

    constructor(props){
        super(props)
    }

    renderQuestion = ({ name, question }) => (
        <div>
            <h5>{question}</h5>
            <input type="radio" name={name} value="1" />
            <input type="radio" name={name} value="2" />
            <input type="radio" name={name} value="3" />
            <input type="radio" name={name} value="4" />
            <input type="radio" name={name} value="5" />
        </div>)

    render() {
        const { questions } = this.props
        return (
            <div className="question">
                {questions.map(this.renderQuestion)}
            </div>
        )
    }
}

export default Question
