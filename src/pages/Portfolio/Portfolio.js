import React from "react";
import Project from '../../components/Project/Project';
import "./styles.css"

function Portfolio({ projects }) {

    let projectsJSX = <Project />;

    projectsJSX = projects.map(project => {
        return (<Project description={project.description}
            repoLink={project.repoLink}
            deployedPage={project.deployedPage}
            imgSrc={project.imgSrc}
            imgAlt={project.imgAlt}
        />);
    });

    return (<div class="container">
        <section class="infoBox">
            <div class="row infoBox-row">
                <div class="col-12">
                    <h2>Portfolio</h2>
                    <hr />
                </div>
            </div>

            <div class="row infoBox-row">
                <div class="col-12">
                    {projectsJSX}
                </div>
            </div>


        </section>
    </div>);
}

export default Portfolio;