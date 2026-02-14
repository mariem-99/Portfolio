import './ProjectCard.css'

function ProjectCard({ name, description, technologies }) {
  return (
    <div className="project-card">
      <div className="project-star">⭐</div>
      
      <h3 className="project-name">{name}</h3>

      <p className="project-description">{description}</p>

      <div className="project-tech">
        <h4 className="tech-title">Technologies:</h4>
        <ul className="tech-list">
          {technologies.map((tech, index) => (
            <li key={index} className="tech-item">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;