import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/images/logo-white.png" alt="Projex" />
            <p>Independent advisory, intelligent cost insight, and structured project delivery.</p>
          </div>
          <div>
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Services</div>
            <ul className="footer-links">
              <li><Link to="/services">Client-Side Advisory</Link></li>
              <li><Link to="/services">Project Management</Link></li>
              <li><Link to="/services">Design Management</Link></li>
              <li><Link to="/services">Cost Consultancy</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <ul className="footer-links">
              <li><a href="mailto:info@projectexcellence.lk">info@projectexcellence.lk</a></li>
              <li><span>Mon – Fri, 9AM – 5:30PM</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Project Excellence Pvt Ltd. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
