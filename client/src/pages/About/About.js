import React from "react";
import "./styles.css";

function About(){
    return(
        <div className="container">
    
            <section className="infoBox">
            <div className="row infoBox-row">
                    <div className="col-12">
                        <h1>About Me</h1>
                        <hr id="seperator-line" />
                    </div>
                </div>
    
                <div className="row infoBox-row">
                    <div className="col-12">
                        <img className="about-image" src={process.env.PUBLIC_URL + "/img/portrait.png" } alt="andrew ehrman" />
                        <p>My Name is Andrew Ehrman. I am a 22 year old aspiring web developer. I have a bachelors degree in physics
                            and a minor in computer science from Ohio State University.
                         I enjoy web development because of its problem solving and design apsects. My strengths are my strong problem solving skills, 
                         and my adaptibility when it comes to new challenges.</p>
                    </div>
                </div>
               
                <div className="row infoBox-row">
                    <div className="col-12">
                        <p>I have worked many programming related projects both in my 
                            undergrad and as personal endeavors. I've done physics animations for my final project in computational physics.
                        I've also completed a small unity game project modeling the royal game of ur. Screenshots of these images are available in the portfolio section. 
    
                        <a href={process.env.PUBLIC_URL + "/img/ResumeProject.pdf"}>Resume</a>
                    </p>
                    </div>
                </div>
            </section>
        </div>);
}

export default About;