import "./index.css";
import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
    constructor() {
        super(props);

        this.state = {
            organization: "",
            vacancyType: "",
            noOfVacancies: "",
            qualification: "",
            age: "",
            lastDate: "",
        };
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitHandler = (e) => {
        axios
            .post("http://localhost:5000/api/vi/application", this.state)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="Form">
                <div
                    className="contact_form_quote"
                    style={{ paddingTop: "7rem" }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6">
                                <div className="form_wrap">
                                    <h3>Application Form</h3>
                                    <form
                                        id="form_contacted"
                                        action=""
                                        method="POST"
                                        onSubmit={this.submitHandler}
                                    >
                                        <label for="organization">
                                            Organization/Department
                                        </label>
                                        <input
                                            type="text"
                                            name="organization"
                                            value={organization}
                                            onChange={this.changeHandler}
                                        />
                                        <label for="vacancy_type">
                                            Vacancy Type
                                        </label>
                                        <input
                                            type="text"
                                            name="vacancyType"
                                            value={vacancyType}
                                            onChange={this.changeHandler}
                                        />
                                        <label for="no_of_vacancies">
                                            No. of Vacancies
                                        </label>
                                        <input
                                            type="text"
                                            name="noOfVacancies"
                                            value={noOfVacancies}
                                            onChange={this.changeHandler}
                                        />
                                        <label for="qualification">
                                            Qualification
                                        </label>
                                        <input
                                            type="text"
                                            name="qualification"
                                            value={qualification}
                                            onChange={this.changeHandler}
                                        />
                                        <label for="age">Age</label>
                                        <input
                                            type="number"
                                            name="age"
                                            value={age}
                                            onChange={this.changeHandler}
                                        />
                                        <label for="last_date">Last Date</label>
                                        <input
                                            type="date"
                                            name="lastDate"
                                            value={lastDate}
                                            onChange={this.changeHandler}
                                        />
                                        <button
                                            className="boxed-btn3"
                                            type="submit"
                                            value="Send"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;
