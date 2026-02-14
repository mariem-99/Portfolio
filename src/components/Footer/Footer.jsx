// Footer.jsx - Footer with copyright
// PROPS IT RECEIVES: name

import './Footer.css'

function Footer({ name }) {
  // Get current year dynamically
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <p className="footer-text">
        © {currentYear} {name}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;