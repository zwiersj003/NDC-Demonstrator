import React, { Component } from 'react'
import { Card, CardHeader, CardBody, Button } from 'reactstrap'
import Question from './../../../components/Card/Question'

class Vragenlijstv2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            questions: [{
                name: 'question1',
                question: 'Vraag1?'
            },
            {
                name: 'question2',
                question: 'Vraag2?'
            },
            {
                name: 'question3',
                question: 'Vraag3?'
            },
            {
                name: 'question4',
                question: 'Vraag4?'
            }]
        }
    }

    saveQuestions() {
        const question1 = document.querySelector('input[name=question1]:checked').value
        const question2 = document.querySelector('input[name=question2]:checked').value
        const question3 = document.querySelector('input[name=question3]:checked').value
        const question4 = document.querySelector('input[name=question4]:checked').value

        alert(question1 + '-----' + question2 + '-----' + question3 + '-----' + question4 )
        fetch(`http://localhost:4000/vragenlijst/add?moduledeelnemerid=3&vragenlijstmoment=2&vraag1=${question1}&vraag2=${question2}&vraag3=${question3}&vraag4=${question4}&vraag5=0&vraag6=0&vraag7=0&vraag8=0&vraag9=1`)
            .catch(err => console.error(err))
    }

    render() {
        const { questions } = this.state
        return (
            <div className="animated fadeIn">
                <div className="vragenlijstv2">
                    <Card>
                        <CardHeader>
                            Vragenlijstv2
                        </CardHeader>
                        <CardBody>
                            <Question questions={questions}/>
                            <div className="save-questions">
                                <Button onClick={() => { this.saveQuestions() }}>Vragenlijst Opslaan</Button>
                            </div>

                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Vragenlijstv2
