import "./index.css";
import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
    constructor() {
        super();

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
        e.preventDefault();
        axios
            .post(
                "https://quiet-chamber-71605.herokuapp.com/api/v1/applications",
                this.state
            )
            .then((response) => {
                setTimeout(function(){
  window.location = "https://mahajancyberworld.co.in";
 },1000);
 
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        console.log("Hello");
    };

    render() {
        const {
            organization,
            vacancyType,
            noOfVacancies,
            qualification,
            age,
            lastDate,
        } = this.state;
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
                                        onSubmit={this.submitHandler}
                                    >
                                        <label htmlFor="organization">
                                            Organization/Department
                                        </label>
                                        <input
                                            type="text"
                                            name="organization"
                                            value={organization}
                                            onChange={this.changeHandler}
                                        />
                                        <label htmlFor="vacancy_type">
                                            Vacancy Type
                                        </label>
                                        <input
                                            type="text"
                                            name="vacancyType"
                                            value={vacancyType}
                                            onChange={this.changeHandler}
                                        />
                                        <label htmlFor="no_of_vacancies">
                                            No. of Vacancies
                                        </label>
                                        <input
                                            type="text"
                                            name="noOfVacancies"
                                            value={noOfVacancies}
                                            onChange={this.changeHandler}
                                        />
                                        <label htmlFor="qualification">
                                            Qualification
                                        </label>
                                        <input
                                            type="text"
                                            name="qualification"
                                            value={qualification}
                                            onChange={this.changeHandler}
                                        />
                                        <label htmlFor="age">Age</label>
                                        <input
                                            type="text"
                                            name="age"
                                            value={age}
                                            onChange={this.changeHandler}
                                        />
                                        <label htmlFor="last_date">
                                            Last Date
                                        </label>
                                        <input
                                            type="text"
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
