import Projects from '../components/pages/Projects';

const ProjectCard = ({ projects }) => {
    const { title, description, deployedLink, image, githubLink } = Projects;
  
    return (
      <div className="card m-3" style={{ width: "18rem", height: "25rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body position-absolute bottom-0">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={deployedLink} className="btn btn-outline-primary btn-sm">
            Deployment
          </a>
          <a href={githubLink} className="btn btn-outline-primary btn-sm">
            GitHub Repo
          </a>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;