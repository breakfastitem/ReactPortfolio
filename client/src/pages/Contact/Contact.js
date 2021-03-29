import React from "react";
import "./styles.css"

function Contact() {
    return (
        <div className="container">
            <section className="infoBox">
                <div className="row infoBox-row">
                    <div className="col-12">
                        <h1>Contact</h1>
                        <hr id="seperator-line" />

                        <h2>Links</h2>
                        <a href="https://github.com/breakfastitem">Github Profile</a>
                        <br />
                        <a href="https://www.linkedin.com/in/andrew-ehrman-bb9205173/">Linkedin Profile</a>
                        <br />
                        <p>Email: andrew.ehrman@gmail.com</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;