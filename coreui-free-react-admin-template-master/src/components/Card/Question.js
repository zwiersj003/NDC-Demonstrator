import React, { Component } from 'react'

class Question extends Component {

    constructor(props){
        super(props)
    }

    renderQuestion = ({ name, question }) => (
        <div className={"input " + name}>
            <h5>{question}</h5>
            <input type="radio" name={name} value="1" id={name + '-1'} />
            <input type="radio" name={name} value="2" id={name + '-2'}/>
            <input type="radio" name={name} value="3" id={name + '-3'}/>
            <input type="radio" name={name} value="4" id={name + '-4'}/>
            <input type="radio" name={name} value="5" id={name + '-5'}/>
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
