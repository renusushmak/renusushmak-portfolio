import React from "react"

function Projects() {
    const allProjects = [
        {
            name: "CSCC", 
            gitHubLink: "https://github.com/renusushmak/renusushmak-portfolio",
        },
        {
            name: "CSCC", 
            gitHubLink: "https://github.com/renusushmak/renusushmak-portfolio"
        },
    ];
    return (
        <div>
            {
                allProjects.map(project => (
                    <div>
                        <h1>{project.name}</h1>
                        <a href = {project.gitHubLink}> Git Hub Link </a>
                    </div>
                )) 
            }
        </div>
    )
}

export default Projects;