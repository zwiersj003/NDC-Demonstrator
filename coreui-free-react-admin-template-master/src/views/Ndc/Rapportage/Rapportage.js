import React, { Component } from 'react'

class Rapportage extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <div className="row">
                    <div className="col-3">
                        <div className="card card-filters">
                            <div className="card-header">
                                Filters
                            </div>
                            <div className="card-body">
                                <div className="deelnemer-card">

                                    <h2>Filteren op:</h2>
                                    <p>Leeftijd:</p>

                                    <p class="filter">Module:</p>
                                    <form>
                                        <div class="multiselect">
                                            <div class="selectBox" onclick="showCheckboxes()">
                                                <div id="checkboxes"  class="margin">
                                                    <div>
                                                        <label for="one">
                                                            <input type="checkbox" id="one" />Module X</label>
                                                    </div>
                                                    <div>
                                                        <label for="two">
                                                            <input type="checkbox" id="two" />Module Y</label>
                                                    </div>
                                                    <div>
                                                        <label for="three">
                                                            <input type="checkbox" id="three" />Module Z</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <p class="filter">Status:</p>
                                    <form>
                                        <div class="multiselect">
                                            <div class="selectBox" onclick="showCheckboxes()">
                                                <div id="checkboxes"  class="margin">
                                                    <div>
                                                        <label for="one">
                                                            <input type="checkbox" id="one" />Status X</label>
                                                    </div>
                                                    <div>
                                                        <label for="two">
                                                            <input type="checkbox" id="two" />Status Y</label>
                                                    </div>
                                                    <div>
                                                        <label for="three">
                                                            <input type="checkbox" id="three" />Status Z</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <p class="filter">Voortgang per module:</p>
                                    <form>
                                        <div class="multiselect">
                                            <div class="selectBox" onclick="showCheckboxes()">
                                                <div id="checkboxes"  class="margin">
                                                    <div>
                                                        <label for="one">
                                                            <input type="checkbox" id="one" />Module X</label>
                                                    </div>
                                                    <div>
                                                        <label for="two">
                                                            <input type="checkbox" id="two" />Module Y</label>
                                                    </div>
                                                    <div>
                                                        <label for="three">
                                                            <input type="checkbox" id="three" />Module Z</label>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <p class="filter"> Locatie: </p>
                                    <form>
                                        <div class="multiselect">
                                            <div class="selectBox" onclick="showCheckboxes()">
                                                <div id="checkboxes"  class="margin">
                                                    <div>
                                                        <label for="one">
                                                            <input type="checkbox" id="one" />Locatie X</label>
                                                    </div>
                                                    <div>
                                                        <label for="two">
                                                            <input type="checkbox" id="two" />Locatie Y</label>
                                                    </div>
                                                    <div>
                                                        <label for="three">
                                                            <input type="checkbox" id="three" />Locatie Z</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <p class="filter">Voortang per module per periode:</p>
                                    <form>
                                        <div class="multiselect">
                                            <div class="selectBox" onclick="showCheckboxes()">
                                                <div id="checkboxes"  class="margin">
                                                    <div>
                                                        <label for="one">
                                                            <input type="checkbox" id="one" />Periode X</label>
                                                    </div>
                                                    <div>
                                                        <label for="two">
                                                            <input type="checkbox" id="two" />Periode Y</label>
                                                    </div>
                                                    <div>
                                                        <label for="three">
                                                            <input type="checkbox" id="three" />Periode Z</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <p class="filter">Voortgang per locatie:</p>
                                    <form>
                                        <div class="multiselect">
                                            <div class="selectBox" onclick="showCheckboxes()">
                                                <div id="checkboxes"  class="margin">
                                                    <div>
                                                        <label for="one">
                                                            <input type="checkbox" id="one" />Locatie X </label>
                                                    </div>
                                                    <div>
                                                        <label for="two">
                                                            <input type="checkbox" id="two" />Locatie Y</label>
                                                    </div>
                                                    <div>
                                                        <label for="three">
                                                            <input type="checkbox" id="three" />Locatie Z</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <p class="filter">Voortgang module t.o.v vorige periode(n):</p>
                                    <form>
                                        <div class="multiselect">
                                            <div class="selectBox" onclick="showCheckboxes()">
                                                <div id="checkboxes"  class="margin">
                                                    <div>
                                                        <label for="one">
                                                            <input type="checkbox" id="one" />Voortgang X</label>
                                                    </div>
                                                    <div>
                                                        <label for="two">
                                                            <input type="checkbox" id="two" />Voortgang Y</label>
                                                    </div>
                                                    <div>
                                                        <label for="three">
                                                            <input type="checkbox" id="three" />Voortang Z</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <p class="filter">Score van voortgang:</p>
                                    <form>
                                        <div class="multiselect">
                                            <div class="selectBox" onclick="showCheckboxes()">
                                                <div id="checkboxes"  class="margin">
                                                    <div>
                                                        <label for="one">
                                                            <input type="checkbox" id="one" />Score X</label>
                                                    </div>
                                                    <div>
                                                        <label for="two">
                                                            <input type="checkbox" id="two" />Score Y</label>
                                                    </div>
                                                    <div>
                                                        <label for="three">
                                                            <input type="checkbox" id="three" />Score Z</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>



                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-9">
                        <div className="card card-rapportage">
                            <div className="card-header">
                                Rapportage
                            </div>
                            <div className="card-body">
                                <table width="50%" class="table table-striped table-bordered table-hover" id="dataTables-example">
                                    <thead>
                                        <tr>
                                            <th>Deelnemer</th>
                                            <th>Voornaam</th>
                                            <th>Achternaam</th>
                                            <th>leeftijd</th>
                                            <th>locatie</th>
                                            <th>Vooruitgang</th>
                                            <th>Subsidiabel</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="odd gradeX">
                                            <td>0001</td>
                                            <td>Johan</td>
                                            <td>van Hetschip</td>
                                            <td class="center">48</td>
                                            <td class="center">Utrecht</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="even gradeC">
                                            <td>0002</td>
                                            <td>Erica</td>
                                            <td>Peterskerk</td>
                                            <td class="center">53</td>
                                            <td class="center">Amsterdam</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="odd gradeX">
                                            <td>0001</td>
                                            <td>Johan</td>
                                            <td>van Hetschip</td>
                                            <td class="center">48</td>
                                            <td class="center">Utrecht</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="even gradeC">
                                            <td>0002</td>
                                            <td>Erica</td>
                                            <td>Peterskerk</td>
                                            <td class="center">53</td>
                                            <td class="center">Amsterdam</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="odd gradeX">
                                            <td>0001</td>
                                            <td>Johan</td>
                                            <td>van Hetschip</td>
                                            <td class="center">48</td>
                                            <td class="center">Utrecht</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="even gradeC">
                                            <td>0002</td>
                                            <td>Erica</td>
                                            <td>Peterskerk</td>
                                            <td class="center">53</td>
                                            <td class="center">Amsterdam</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="odd gradeX">
                                            <td>0001</td>
                                            <td>Johan</td>
                                            <td>van Hetschip</td>
                                            <td class="center">48</td>
                                            <td class="center">Utrecht</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="even gradeC">
                                            <td>0002</td>
                                            <td>Erica</td>
                                            <td>Peterskerk</td>
                                            <td class="center">53</td>
                                            <td class="center">Amsterdam</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="odd gradeX">
                                            <td>0001</td>
                                            <td>Johan</td>
                                            <td>van Hetschip</td>
                                            <td class="center">48</td>
                                            <td class="center">Utrecht</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="even gradeC">
                                            <td>0002</td>
                                            <td>Erica</td>
                                            <td>Peterskerk</td>
                                            <td class="center">53</td>
                                            <td class="center">Amsterdam</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="odd gradeX">
                                            <td>0001</td>
                                            <td>Johan</td>
                                            <td>van Hetschip</td>
                                            <td class="center">48</td>
                                            <td class="center">Utrecht</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="even gradeC">
                                            <td>0002</td>
                                            <td>Erica</td>
                                            <td>Peterskerk</td>
                                            <td class="center">53</td>
                                            <td class="center">Amsterdam</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="odd gradeX">
                                            <td>0001</td>
                                            <td>Johan</td>
                                            <td>van Hetschip</td>
                                            <td class="center">48</td>
                                            <td class="center">Utrecht</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="even gradeC">
                                            <td>0002</td>
                                            <td>Erica</td>
                                            <td>Peterskerk</td>
                                            <td class="center">53</td>
                                            <td class="center">Amsterdam</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="odd gradeX">
                                            <td>0001</td>
                                            <td>Johan</td>
                                            <td>van Hetschip</td>
                                            <td class="center">48</td>
                                            <td class="center">Utrecht</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="even gradeC">
                                            <td>0002</td>
                                            <td>Erica</td>
                                            <td>Peterskerk</td>
                                            <td class="center">53</td>
                                            <td class="center">Amsterdam</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="odd gradeX">
                                            <td>0001</td>
                                            <td>Johan</td>
                                            <td>van Hetschip</td>
                                            <td class="center">48</td>
                                            <td class="center">Utrecht</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="even gradeC">
                                            <td>0002</td>
                                            <td>Erica</td>
                                            <td>Peterskerk</td>
                                            <td class="center">53</td>
                                            <td class="center">Amsterdam</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rapportage