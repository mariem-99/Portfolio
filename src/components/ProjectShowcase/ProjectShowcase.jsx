import ProjectCard from '../ProjectCard/ProjectCard'
import './ProjectShowcase.css'

function ProjectShowcase({ projects }) {
  return (
    <section className="project-showcase" id='projects'>
      <div className="showcase-content">
        <h2 className="section-title">My Projects</h2>
        
        {/* Grid of project cards */}
        <div className="projects-grid">
          {/* Map through projects array and create a ProjectCard for each */}
          {projects.map((project) => (
            <ProjectCard
              key={project.id}  // Unique key for React
              name={project.name}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectShowcase;