import "./index.css";
import React, { Component } from "react";
import axios from "axios";

class Applications extends Component {
    constructor() {
        super();

        this.state = {
            applications: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/api/v1/applications")
            .then((response) => {
                console.log(response);
                this.setState({
                    applications: response.data.data.applicationQuery,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { applications } = this.state;
        return (
            <div className="Applications">
                <div className="limiter">
                    <div className="container-table100">
                        <div className="wrap-table100">
                            <div className="table100">
                                <table>
                                    <thead>
                                        <tr className="table100-head">
                                            <th className="column1">
                                                Organization/Department
                                            </th>
                                            <th className="column2">
                                                Vacancy type
                                            </th>
                                            <th className="column3">
                                                No. of Vacancies
                                            </th>
                                            <th className="column4">
                                                Qualification
                                            </th>
                                            <th className="column5">Age</th>
                                            <th className="column6">
                                                Last Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {applications.length
                                            ? applications
                                                  .slice(0, 14)
                                                  .map((application) => (
                                                      <tr>
                                                          <td className="column1">
                                                              {
                                                                  application.organization
                                                              }
                                                          </td>
                                                          <td className="column2">
                                                              {
                                                                  application.vacancyType
                                                              }
                                                          </td>
                                                          <td className="column3">
                                                              {
                                                                  application.noOfVacancies
                                                              }
                                                          </td>
                                                          <td className="column4">
                                                              {
                                                                  application.qualification
                                                              }
                                                          </td>
                                                          <td className="column5">
                                                              {application.age}
                                                          </td>
                                                          <td className="column6">
                                                              {
                                                                  application.lastDate
                                                              }
                                                          </td>
                                                      </tr>
                                                  ))
                                            : null}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Applications;