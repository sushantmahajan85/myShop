import "./index.css";
import React, { Component } from "react";
import contactImg from "./img/core-img/contact_thumb.png";
class Form extends Component {
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
                                    >
                                        <label for="organization">
                                            Organization/Department
                                        </label>
                                        <input type="text" />
                                        <label for="vacancy_type">
                                            Vacancy Type
                                        </label>
                                        <input type="text" />
                                        <label for="no_of_vacancies">
                                            No. of Vacancies
                                        </label>
                                        <input type="text" />
                                        <label for="qualification">
                                            Qualification
                                        </label>
                                        <input type="text" />
                                        <label for="age">Age</label>
                                        <input type="number" />
                                        <label for="last_date">Last Date</label>
                                        <input type="date" />
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
