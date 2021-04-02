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
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                console.log(response);
                this.setState({ applications: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { applications } = this.state;
        return (
            <div className="Applications">
                <div class="limiter">
                    <div class="container-table100">
                        <div class="wrap-table100">
                            <div class="table100">
                                <table>
                                    <thead>
                                        <tr class="table100-head">
                                            <th class="column1">
                                                Organization/Department
                                            </th>
                                            <th class="column2">
                                                Vacancy type
                                            </th>
                                            <th class="column3">
                                                No. of Vacancies
                                            </th>
                                            <th class="column4">
                                                Qualification
                                            </th>
                                            <th class="column5">Age</th>
                                            <th class="column6">Last Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {applications.length
                                            ? applications
                                                  .slice(0, 14)
                                                  .map((application) => (
                                                      <tr>
                                                          <td class="column1">
                                                              2017-09-29 01:22
                                                          </td>
                                                          <td class="column2">
                                                              200398
                                                          </td>
                                                          <td class="column3">
                                                              iPhone X 64Gb Grey
                                                          </td>
                                                          <td class="column4">
                                                              $999.00
                                                          </td>
                                                          <td class="column5">
                                                              1
                                                          </td>
                                                          <td class="column6">
                                                              $999.00
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
