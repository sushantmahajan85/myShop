import "./index.css";
import contactImg from "./img/core-img/contact_thumb.png";

const Contact = () => {
    return (
        <div className="Contact" id="contact">
            <div className="contact_form_quote" style={{ paddingTop: "7rem" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="form_wrap">
                                <h3>Get Free Quote</h3>
                                <form
                                    id="form_contacted"
                                    action="https://formspree.io/mahajan.cyber1@gmail.com"
                                    method="POST"
                                >
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                    />
                                    <input type="email" placeholder="Email" />
                                    <textarea
                                        name="#"
                                        id=""
                                        cols="30"
                                        rows="10"
                                        placeholder="Message"
                                    ></textarea>
                                    <button
                                        className="boxed-btn3"
                                        type="submit"
                                        value="Send"
                                    >
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1 col-lg-6">
                            <div className="contact_thumb">
                                <img src={contactImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;
