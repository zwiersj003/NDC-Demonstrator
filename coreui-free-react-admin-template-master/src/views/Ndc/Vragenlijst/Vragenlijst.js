import React, { Component } from 'react'
import { Col, Row, Table } from 'reactstrap'

class Vragenlijst extends Component {
    handleClick() {
        console.log('dfgdfgdfgdg')
    }

    render() {
        return (
            <div className="animated fadeIn">
                <div className="card">
                    <div className="card-header">
                        <i className="fa fa-list-ol"></i> Vragenlijst
                    </div>
                    <div className="card-body">
                        <div className="vragenlijst">
                            <Table responsive striped bordered id="dataTables-example" >

                                <thead>
                                    <tr>
                                        <th colSpan="7">0.Ik kan een maaltijd klaar maken</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="gradeA">
                                        <td>
                                            <center><img src="../../../../assets/img/Smileyrood.png" height="40px" width="45px" position="text-center" /></center>
                                        </td>
                                        <td className="center">Helemaal oneens
                                        <div>
                                                <input type="radio" className="question0" name="question0" value="meting" />
                                            </div>
                                            Niet te eten
                                        </td>

                                        <td className="center">Oneens
                                    <div>
                                                <input type="radio" className="question0" name="question0" value="meting" />
                                            </div>
                                            Niet lekker
                                        </td>

                                        <td className="center">Neutraal
                                    <div>
                                                <input type="radio" className="question0" name="question0" value="meting" />
                                            </div>
                                            Niet vies/Niet lekker
                                        </td>
                                        <td className="center">Eens
                                    <div>
                                                <input type="radio" className="question0" name="question0" value="meting" />
                                            </div>
                                            Lekker
                                        </td>
                                        <td className="center">Helemaal mee eens
                                    <div>
                                                <input type="radio" className="question0" name="question0" value="meting" />
                                            </div>
                                            Heerlijk
                                        </td>
                                        <td className="center">
                                            <center><img src="../../../../assets/img/Smileygroen.png" height="40px" width="45px" position="text-center" /></center>
                                        </td>
                                    </tr>

                                </tbody>
                            </Table>

                            <Table responsive striped bordered hover id="dataTables-example" >
                                <thead>
                                    <tr>
                                        <th colSpan="7">1.Ik weet waar ik goed in ben classNamelijk:</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr className="gradeA">
                                        <td className="center">
                                            <center><img src="../../../../assets/img/Smileyrood.png" height="40px" width="45px" position="text-center" /></center>
                                        </td>
                                        <td className="center">Helemaal oneens
                                <div>
                                                <input type="radio" className="question1" name="question1" value="meting" />
                                            </div>
                                        </td>

                                        <td className="center">Oneens
                                <div>
                                                <input type="radio" className="question1" name="question1" value="meting" />
                                            </div>
                                        </td>

                                        <td className="center">Neutraal
                                <div>
                                                <input type="radio" className="question1" name="question1" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">Eens
                                <div>
                                                <input type="radio" className="question1" name="question1" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">Helemaal mee eens
                                <div>
                                                <input type="radio" className="question1" name="question1" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">
                                            <center><img src="../../../../assets/img/Smileygroen.png" height="40px" width="45px" position="text-center" /></center>
                                        </td>
                                    </tr>

                                </tbody>
                                <thead >
                                    <tr>
                                        <th colSpan="7">2.Waar ik goed in ben kan ik gebruiken voor mijn studie of mijn werk</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="gradeA">
                                        <td className>
                                            <center><img src="../../../../assets/img/Smileyrood.png" height="40px" width="45px" position="text-center" /></center>
                                        </td>
                                        <td className="center">Helemaal oneens
                                    <div>
                                                <input type="radio" className="question2" name="question2" value="meting" />
                                            </div>
                                        </td>

                                        <td className="center">Oneens
                                    <div>
                                                <input type="radio" className="question2" name="question2" value="meting" />
                                            </div>
                                        </td>

                                        <td className="center">Neutraal
                                    <div>
                                                <input type="radio" className="question2" name="question2" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">Eens
                                    <div>
                                                <input type="radio" className="question2" name="question2" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">Helemaal mee eens
                                    <div>
                                                <input type="radio" className="question2" name="question2" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">
                                            <center><img src="../../../../assets/img/Smileygroen.png" height="40px" width="45px" position="text-center" /></center>
                                        </td>
                                    </tr>
                                </tbody>
                                <thead >
                                    <tr>
                                        <th colSpan="7">3.Ik weet wat voor studie of werk ik wil doen</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="gradeA">
                                        <td >
                                            <center><img src="../../../../assets/img/Smileyrood.png" height="40px" width="45px" position="text-center" /></center>
                                        </td>
                                        <td className="center">Helemaal oneens
                                    <div>
                                                <input type="radio" className="question3" name="question3" value="meting" />
                                            </div>
                                        </td>

                                        <td className="center">Oneens
                                    <div>
                                                <input type="radio" className="question3" name="question3" value="meting" />
                                            </div>
                                        </td>

                                        <td className="center">Neutraal
                                    <div>
                                                <input type="radio" className="question3" name="question3" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">Eens
                                    <div>
                                                <input type="radio" className="question3" name="question3" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">Helemaal mee eens
                                    <div>
                                                <input type="radio" className="question3" name="question3" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">
                                            <center><img src="../../../../assets/img/Smileygroen.png" height="40px" width="45px" position="text-center" /></center>
                                        </td>
                                    </tr>
                                </tbody>
                                <thead >
                                    <tr>
                                        <th colSpan="7">4.Ik kan hulp vragen bij het vinden van een studie of werk</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="gradeA">
                                        <td >
                                            <center><img src="../../../../assets/img/Smileyrood.png" height="40px" width="45px" position="text-center" /></center>
                                        </td>
                                        <td className="center">Helemaal oneens
                                    <div>
                                                <input type="radio" className="question4" name="question4" value="meting" />
                                            </div>
                                        </td>

                                        <td className="center">Oneens
                                    <div>
                                                <input type="radio" className="question4" name="question4" value="meting" />
                                            </div>
                                        </td>

                                        <td className="center">Neutraal
                                    <div>
                                                <input type="radio" className="question4" name="question4" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">Eens
                                    <div>
                                                <input type="radio" className="question4" name="question4" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">Helemaal mee eens
                                    <div>
                                                <input type="radio" className="question4" name="question4" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">
                                            <center><img src="../../../../assets/img/Smileygroen.png" height="40px" width="45px" position="text-center" /></center>
                                        </td>
                                    </tr>
                                </tbody>
                                <thead >
                                    <tr>
                                        <th colSpan="7">5.Ik kan zelfstandig taken voor studie , werk en hobby's doen</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="gradeA">
                                        <td >
                                            <center><img src="../../../../assets/img/Smileyrood.png" height="40px" width="45px" position="text-center" /></center>
                                        </td>
                                        <td className="center">Helemaal oneens
                                <div>
                                                <input type="radio" className="question5" name="question5" value="meting" />
                                            </div>
                                        </td>

                                        <td className="center">Oneens
                                <div>
                                                <input type="radio" className="question5" name="question5" value="meting" />
                                            </div>
                                        </td>

                                        <td className="center">Neutraal
                                <div>
                                                <input type="radio" className="question5" name="question5" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">Eens
                                <div>
                                                <input type="radio" className="question5" name="question5" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">Helemaal mee eens
                                <div>
                                                <input type="radio" className="question5" name="question5" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">
                                            <center><img src="../../../../assets/img/Smileygroen.png" height="40px" width="45px" position="text-center" /></center>
                                        </td>
                                    </tr>
                                </tbody>
                                <thead >
                                    <tr>
                                        <th colSpan="7">6.Ik ben op dit momenbezig met studie, werk of hobby's</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="gradeA">
                                        <td >
                                            <center><img src="../../../../assets/img/Smileyrood.png" height="40px" width="45px" position="text-center" /></center>
                                        </td>
                                        <td className="center">Helemaal oneens
                                <div>
                                                <input type="radio" className="question6" name="question6" value="meting" />
                                            </div>
                                        </td>

                                        <td className="center">Oneens
                                <div>
                                                <input type="radio" className="question6" name="question6" value="meting" />
                                            </div>
                                        </td>

                                        <td className="center">Neutraal
                                <div>
                                                <input type="radio" className="question6" name="question6" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">Eens
                                <div>
                                                <input type="radio" className="question6" name="question6" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">Helemaal mee eens
                                <div>
                                                <input type="radio" className="question6" name="question6" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">
                                            <center><img src="../../../../assets/img/Smileygroen.png" height="40px" width="45px" position="text-center" /></center>
                                        </td>
                                    </tr>
                                </tbody>
                                <thead >
                                    <tr>
                                        <th colSpan="7">7.Ik heb contact met Nederlanders</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="gradeA">
                                        <td >
                                            <center><img src="../../../../assets/img/Smileyrood.png" height="40px" width="45px" position="text-center" /></center>
                                        </td>
                                        <td className="center">Helemaal oneens
                                    <div>
                                                <input type="radio" className="question7" name="question7" value="meting" />
                                            </div>
                                        </td>

                                        <td className="center">Oneens
                                    <div>
                                                <input type="radio" className="question7" name="question7" value="meting" />
                                            </div>
                                        </td>

                                        <td className="center">Neutraal
                                    <div>
                                                <input type="radio" className="question7" name="question7" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">Eens
                                    <div>
                                                <input type="radio" className="question7" name="question7" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">Helemaal mee eens
                                    <div>
                                                <input type="radio" className="question7" name="question7" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">
                                            <center><img src="../../../../assets/img/Smileygroen.png" height="40px" width="45px" position="text-center" /></center>
                                        </td>
                                    </tr>
                                </tbody>
                                <thead >
                                    <tr>
                                        <th colSpan="7">8.Ik ken scholen of bedrijven in mijn omgeving die mij informatie of hulp kunnen bieden</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="gradeA">
                                        <td >
                                            <center><img src="../../../../assets/img/Smileyrood.png" height="40px" width="45px" position="text-center" /></center>
                                        </td>
                                        <td className="center">Helemaal oneens
                                    <div>
                                                <input type="radio" className="question8" name="question8" value="meting" />
                                            </div>
                                        </td>

                                        <td className="center">Oneens
                                    <div>
                                                <input type="radio" className="question8" name="question8" value="meting" />
                                            </div>
                                        </td>

                                        <td className="center">Neutraal
                                    <div>
                                                <input type="radio" className="question8" name="question8" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">Eens
                                    <div>
                                                <input type="radio" className="question8" name="question8" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">Helemaal mee eens
                                    <div>
                                                <input type="radio" className="question8" name="question8" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">
                                            <center><img src="../../../../assets/img/Smileygroen.png" height="40px" width="45px" position="text-center" /></center>
                                        </td>
                                    </tr>
                                </tbody>
                                <thead >
                                    <tr>
                                        <th colSpan="7">9.Ik ben trots op wat ik in Nederland heb bereikt</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="gradeA">
                                        <td >
                                            <center><img src="../../../../assets/img/Smileyrood.png" height="40px" width="45px" position="text-center" /></center>
                                        </td>
                                        <td className="center">Helemaal oneens
                                    <div>
                                                <input type="radio" className="question9" name="question9" value="meting" />
                                            </div>
                                        </td>

                                        <td className="center">Oneens
                                    <div>
                                                <input type="radio" className="question9" name="question9" value="meting" />
                                            </div>
                                        </td>

                                        <td className="center">Neutraal
                                            <div>
                                                <input type="radio" className="question9" name="question9" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">Eens
                                    <div>
                                                <input type="radio" className="question9" name="question9" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">Helemaal mee eens
                                    <div>
                                                <input type="radio" className="question9" name="question9" value="meting" />
                                            </div>
                                        </td>
                                        <td className="center">
                                            <center><img src="../../../../assets/img/Smileygroen.png" height="40px" width="45px" position="text-center" /></center>
                                        </td>
                                    </tr>
                                </tbody>

                            </Table>
                            <div className="extra-info">
                                <b>Heeft de deelnemer een baan/opleiding overgehouden na het deelnemen van de drie modules?</b>
                                <div>
                                    <input type="radio" className="question9" name="question9" value="meting" /> Ja
                                </div>
                                <div>
                                    <input type="radio" className="question9" name="question9" value="meting" /> Nee
                                </div>
                                <div>
                                    <p><b>Opmerkingen</b></p>
                                    <textarea name="comment" form="usrform">
                                        Plaats uw opmerking hier.....</textarea>
                                    <form>
                                        <button onClick={this.handleClick()}>Opslaan</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Vragenlijst