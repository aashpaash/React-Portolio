import React from 'react';
import ProjectsCard from '../ProjectsCard';
import WeatherApp from '../../assets/projects/weather.png';
import MeetIO from '../../assets/projects/meetio.png';


const Projects = () => {
    const projectList = [
        {
            title: "Weather Dashboard",
            description:"A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS",
            deployedLink:"https://aashpaash.github.io/Server-Side-APIs-Challenge-Weather-Dashboard/",
            githubLink:"https://github.com/aashpaash/Server-Side-APIs-Challenge-Weather-Dashboard",
            image: WeatherApp
        },
        {
            title: "MeetIO",
            description:"A community scheduling app",
            deployedLink:"https://meetio.herokuapp.com/",
            githubLink:"https://github.com/aashpaash/Meet-IO",
            image: MeetIO,
        },
    ];

    return (
        <div className="d-flex flex-wrap justify-content-around h-100">
            {projectList.map((Projects) => {
                return <ProjectsCard project={Projects} />;
            })
            }
        </div>
    )
}


export default Projects;