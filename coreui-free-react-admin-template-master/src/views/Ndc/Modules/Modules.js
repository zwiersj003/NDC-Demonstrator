import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import ModulesInfo from '../../../components/Card/ModulesInfo'

class Modules extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i>Modules
          </CardHeader>
          <CardBody>
            <div className="module-card">
              <ModulesInfo />
              <div className="modules">
                <Table responsive striped hover bordered id="table-modules">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Naam</th>
                      <th>Locatie</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>0001</td>
                      <td>Jasper Zwiers</td>
                      <td>21</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Modules;
