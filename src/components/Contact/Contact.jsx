import './Contact.css'

function Contact({ email, github, linkedin }) {
  return (
    <section className="contact" id='contact'>
      <div className="contact-content">
        <h2 className="section-title">Get In Touch</h2>
        
        <p className="contact-intro">
          I'd love to hear from you! Feel free to reach out through any of these channels.
        </p>
        
        <div className="contact-methods">
          {/* Email */}
            <a 
              href={`mailto:${email}`}
              className="contact-item"
            >
              <div className="contact-icon">✉️</div>
              <h3 className="contact-label">Email</h3>
              <p className="contact-value">{email}</p>
              <span className="contact-action">Send Email →</span>
            </a>
          
          {/* GitHub */}
          <a 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <div className="contact-icon">💻</div>
            <h3 className="contact-label">GitHub</h3>
            <span className="contact-action">Visit Profile →</span>
           </a>
          
          {/* LinkedIn */}
          {/* LinkedIn - CLICKABLE */}
            <a 
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">💼</div>
              <h3 className="contact-label">LinkedIn</h3>
              <span className="contact-action">Connect →</span>
            </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;