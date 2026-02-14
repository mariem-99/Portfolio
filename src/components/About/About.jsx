import './About.css'

function About({ profileImage, bio, skills }) {
  return (
    <section className="about" id='about'>
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        
        {/* Profile image */}
        <img 
          src={profileImage} 
          alt="Profile" 
          className="profile-image"
        />
        
        {/* Bio text */}
        <p className="bio-text">{bio}</p>
        
        {/* Skills section */}
        <div className="skills-section">
          <h3 className="skills-title">Skills</h3>
          <ul className="skills-list">
            {/* .map() creates a new <li> for each skill */}
            {/*React needs unique keys for list items (helps it update efficiently) */}
            {skills.map((skill, index) => ( 
              <li key={index} className="skill-item">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;