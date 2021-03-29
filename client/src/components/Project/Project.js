import React from 'react';
import "./styles.css"

function Project(props) {
    return (
        <div className="portfolio-image">
            <div className="row">
                <div className="col-lg-4">
                    <img src={process.env.PUBLIC_URL + props.imgSrc } alt={props.imgAlt} />
                </div>
                <div className="col-lg-7">
                    <h3>Description</h3>
                    <p>{props.description}</p>

                    <h3>Links</h3>

                    <a href={props.repoLink}>Github Repository</a>
                    <br />

                    <a href={props.deployedPage}>Deployed Page</a>
                </div>
            </div>
        </div>);
}


export default Project;