import React, { Component } from 'react'
import { Card, CardHeader, CardBody, Button, Input } from 'reactstrap'
import Question from './../../../components/Card/Question'

class Vragenlijstv2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            questions: [{
                name: 'question1',
                question: '1. Ik weet waar ik goed in ben namelijk:',
            },
            {
                name: 'question2',
                question: '2. Waar ik goed in ben kan ik gebruiken voor mijn studie of mijn werk'
            },
            {
                name: 'question3',
                question: '3. Ik weet wat voor studie of werk ik wil doen'
            },
            {
                name: 'question4',
                question: '4. Ik kan hulp vragen bij het vinden van een studie of werk'
            },
            {
                name: 'question5',
                question: `5. Ik kan zelfstandig taken voor studie, werk en hobby's doen`
            },
            {
                name: 'question6',
                question: `6. Ik ben op dit momenbezig met studie, werk of hobby's`
            },
            {
                name: 'question7',
                question: '7. Ik heb contact met Nederlanders'
            },
            {
                name: 'question8',
                question: '8. Ik ken scholen of bedrijven in mijn omgeving die mij informatie of hulp kunnen bieden'
            },
            {
                name: 'question9',
                question: '9. Ik ben trots op wat ik in Nederland heb bereikt'
            }],
            vragenlijst: []
        }
    }

    componentDidMount() {
        this.getVragenlijst()
    }

    setVragenlijst() {
        var vraag1 = null
        var vraag2 = null
        var vraag3 = null
        var vraag4 = null
        var vraag5 = null
        var vraag6 = null
        var vraag7 = null
        var vraag8 = null
        var vraag9 = null
        var opmerkingen = null

        if (this.state.vragenlijst[0] != null) {
            vraag1 = this.state.vragenlijst[0].vraag1
            vraag2 = this.state.vragenlijst[0].vraag2
            vraag3 = this.state.vragenlijst[0].vraag3
            vraag4 = this.state.vragenlijst[0].vraag4
            vraag5 = this.state.vragenlijst[0].vraag5
            vraag6 = this.state.vragenlijst[0].vraag6
            vraag7 = this.state.vragenlijst[0].vraag7
            vraag8 = this.state.vragenlijst[0].vraag8
            vraag9 = this.state.vragenlijst[0].vraag9
            opmerkingen = this.state.vragenlijst[0].opmerkingen
        }

        switch (vraag1) {
            case 1:
                document.querySelector('input[id=question1-1]').checked = true
                break
            case 2:
                document.querySelector('input[id=question1-2]').checked = true
                break
            case 3:
                document.querySelector('input[id=question1-3]').checked = true
                break
            case 4:
                document.querySelector('input[id=question1-4]').checked = true
                break
            case 5:
                document.querySelector('input[id=question1-5]').checked = true
                break
        }

        switch (vraag2) {
            case 1:
                document.querySelector('input[id=question2-1]').checked = true
                break
            case 2:
                document.querySelector('input[id=question2-2]').checked = true
                break
            case 3:
                document.querySelector('input[id=question2-3]').checked = true
                break
            case 4:
                document.querySelector('input[id=question2-4]').checked = true
                break
            case 5:
                document.querySelector('input[id=question2-5]').checked = true
                break
        }

        switch (vraag3) {
            case 1:
                document.querySelector('input[id=question3-1]').checked = true
                break
            case 2:
                document.querySelector('input[id=question3-2]').checked = true
                break
            case 3:
                document.querySelector('input[id=question3-3]').checked = true
                break
            case 4:
                document.querySelector('input[id=question3-4]').checked = true
                break
            case 5:
                document.querySelector('input[id=question3-5]').checked = true
                break
        }

        switch (vraag4) {
            case 1:
                document.querySelector('input[id=question4-1]').checked = true
                break
            case 2:
                document.querySelector('input[id=question4-2]').checked = true
                break
            case 3:
                document.querySelector('input[id=question4-3]').checked = true
                break
            case 4:
                document.querySelector('input[id=question4-4]').checked = true
                break
            case 5:
                document.querySelector('input[id=question4-5]').checked = true
                break
        }

        switch (vraag5) {
            case 1:
                document.querySelector('input[id=question5-1]').checked = true
                break
            case 2:
                document.querySelector('input[id=question5-2]').checked = true
                break
            case 3:
                document.querySelector('input[id=question5-3]').checked = true
                break
            case 4:
                document.querySelector('input[id=question5-4]').checked = true
                break
            case 5:
                document.querySelector('input[id=question5-5]').checked = true
                break
        }

        switch (vraag6) {
            case 1:
                document.querySelector('input[id=question6-1]').checked = true
                break
            case 2:
                document.querySelector('input[id=question6-2]').checked = true
                break
            case 3:
                document.querySelector('input[id=question6-3]').checked = true
                break
            case 4:
                document.querySelector('input[id=question6-4]').checked = true
                break
            case 5:
                document.querySelector('input[id=question6-5]').checked = true
                break
        }

        switch (vraag7) {
            case 1:
                document.querySelector('input[id=question7-1]').checked = true
                break
            case 2:
                document.querySelector('input[id=question7-2]').checked = true
                break
            case 3:
                document.querySelector('input[id=question7-3]').checked = true
                break
            case 4:
                document.querySelector('input[id=question7-4]').checked = true
                break
            case 5:
                document.querySelector('input[id=question7-5]').checked = true
                break
        }

        switch (vraag8) {
            case 1:
                document.querySelector('input[id=question8-1]').checked = true
                break
            case 2:
                document.querySelector('input[id=question8-2]').checked = true
                break
            case 3:
                document.querySelector('input[id=question8-3]').checked = true
                break
            case 4:
                document.querySelector('input[id=question8-4]').checked = true
                break
            case 5:
                document.querySelector('input[id=question8-5]').checked = true
                break
        }

        switch (vraag9) {
            case 1:
                document.querySelector('input[id=question9-1]').checked = true
                break
            case 2:
                document.querySelector('input[id=question9-2]').checked = true
                break
            case 3:
                document.querySelector('input[id=question9-3]').checked = true
                break
            case 4:
                document.querySelector('input[id=question9-4]').checked = true
                break
            case 5:
                document.querySelector('input[id=question9-5]').checked = true
                break
        }

        document.querySelector('textarea[name=extra-question-1]').value = opmerkingen

    }

    saveQuestions() {
        const QUESTION1 = document.querySelector('input[name=question1]:checked').value
        const QUESTION2 = document.querySelector('input[name=question2]:checked').value
        const QUESTION3 = document.querySelector('input[name=question3]:checked').value
        const QUESTION4 = document.querySelector('input[name=question4]:checked').value
        const QUESTION5 = document.querySelector('input[name=question5]:checked').value
        const QUESTION6 = document.querySelector('input[name=question6]:checked').value
        const QUESTION7 = document.querySelector('input[name=question7]:checked').value
        const QUESTION8 = document.querySelector('input[name=question8]:checked').value
        const QUESTION9 = document.querySelector('input[name=question9]:checked').value
        const EXTRA_QUESTION1 = document.querySelector('textarea[name=extra-question-1]').value

        fetch(`http://localhost:4000/vragenlijst/add?moduledeelnemerid=${this.props.match.params.id}&vragenlijstmoment=${this.props.match.params.lijst}&vraag1=${QUESTION1}&vraag2=${QUESTION2}&vraag3=${QUESTION3}&vraag4=${QUESTION4}&vraag5=${QUESTION5}&vraag6=${QUESTION6}&vraag7=${QUESTION7}&vraag8=${QUESTION8}&vraag9=${QUESTION9}&opmerkingen=${EXTRA_QUESTION1}`)
            .then(alert('Vragenlijst opgeslagen'))
            .catch(err => console.error(err))
    }

    getVragenlijst = _ => {
        fetch(`http://localhost:4000/vragenlijst?moduledeelnemerid=${this.props.match.params.id}&vragenlijstmoment=${this.props.match.params.lijst}`)
            .then(response => response.json())
            .then(response => this.setState({ vragenlijst: response.data }, () => { this.setVragenlijst() }))
            .catch(err => console.log(err))
        this.forceUpdate()
    }

    render() {
        const { questions } = this.state
        return (
            <div className="animated fadeIn">
                <div className="vragenlijstv2">
                    <Card>
                        <CardHeader>
                            Vragenlijst
                        </CardHeader>
                        <CardBody>
                            <Question questions={questions} setVragenlijst={this.setVragenlijst} />
                            <div className="extra-questions">
                                <div className="extra-question">
                                    <p><b>Opmerkingen</b></p>
                                    <Input type="textarea" name="extra-question-1" />
                                </div>
                            </div>
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
