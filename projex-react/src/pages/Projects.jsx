import { Link } from 'react-router-dom';
import useScrollAnimation from '../components/useScrollAnimation';

const projects = [
  {
    id: 1,
    name: 'No. 77, Horton Place',
    category: 'Residential',
    status: 'Ongoing',
    location: 'Colombo 07, Sri Lanka',
    client: 'Samudhi Group, Maligawatta Road, Colombo 10',
    role: 'Client Advisory · Project Management',
    image: '/images/5.jpg',
    overview: 'A prestigious residential development located in the heart of Colombo 07, one of Sri Lanka\'s most sought-after addresses. The project represents a significant investment in high-quality residential construction, demanding the highest standards of advisory and management.',
  },
];

export default function Projects() {
  useScrollAnimation();
  return (
    <>
      <section className="page-hero-mm" style={{backgroundImage:"url('/images/6.jpg')"}}>
        <div className="page-hero-mm-overlay"></div>
        <div className="page-hero-mm-inner">
          <ul className="bc-nav"><li><Link to="/">Home</Link></li><li className="bc-sep">/</li><li className="bc-active">Projects</li></ul>
          <h1 className="page-hero-mm-title">Our Projects</h1>
          <p className="page-hero-mm-sub">A selection of projects where we have delivered strategic clarity, commercial protection, and structured execution for our clients.</p>
        </div>
      </section>

      <section className="section-pad white-bg">
        <div className="container">
          <div className="project-grid">
            {projects.map(p => (
              <div key={p.id} className="project-card fade-up">
                <div className="project-img"><img src={p.image} alt={p.name} loading="lazy" /></div>
                <div className="project-body">
                  <div className="mb-2">
                    <span className="project-badge">{p.category}</span>
                    {p.status === 'Ongoing'
                      ? <span className="status-ongoing">Ongoing</span>
                      : <span className="status-completed">{p.status}</span>}
                  </div>
                  <div className="project-name">{p.name}</div>
                  <div className="project-meta">
                    {p.location && <span><i className="bi bi-geo-alt"></i> {p.location}</span>}
                    {p.client && <span><i className="bi bi-building"></i> {p.client}</span>}
                    {p.role && <span><i className="bi bi-briefcase"></i> {p.role}</span>}
                  </div>
                  <p className="project-desc">{p.overview.length > 160 ? p.overview.substring(0,160)+'…' : p.overview}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad off-white-bg">
        <div className="container">
          <div className="text-center mb-5 fade-up">
            <span className="section-label">DELIVERS</span>
            <h2 className="section-title">Our Commitment on Every Project</h2>
            <div className="divider-accent center"></div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'24px',marginTop:'0'}}>
            {[
              {icon:'bi-check2-circle',title:'Strategic Clarity From Day One',text:'We ensure the project starts with defined objectives, structured planning, and clear decision pathways.'},
              {icon:'bi-search',title:'Early Identification of Risks and Opportunities',text:'Reducing uncertainty, avoiding surprises, and improving alignment across the team.'},
              {icon:'bi-shield-check',title:'Strong Governance and Controlled Execution',text:'Ensuring disciplined progress, transparent reporting, and predictable outcomes.'},
              {icon:'bi-cash-stack',title:'Commercial Protection Through Cost Intelligence',text:'Safeguarding investment value through continuous cost monitoring and evaluation.'},
              {icon:'bi-diagram-3',title:'Seamless Coordination Across Consultants and Contractors',text:'Promoting cooperation, accountability, and timely resolution of issues.'},
            ].map((s,i) => (
              <div key={i} className="strength-card fade-up" style={{textAlign:'center'}}>
                <div className="strength-icon" style={{margin:'0 auto 16px'}}><i className={`bi ${s.icon}`} style={{color:'var(--accent)'}}></i></div>
                <div className="strength-title">{s.title}</div>
                <div className="strength-text">{s.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-pad">
        <div className="container">
          <div className="cta-section-inner fade-up">
            <span className="section-label" style={{color:'rgba(255,255,255,.4)'}}>Have a Project in Mind?</span>
            <h2 className="cta-title">Have a Project in Mind?</h2>
            <p className="cta-subtitle">Let us guide you with clarity, structure, and commercially intelligent advice tailored to your project's specific needs.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-pb"><i className="bi bi-envelope-fill"></i> Contact Us</Link>
              <Link to="/services" className="btn-ob"><i className="bi bi-grid-3x3-gap-fill"></i> Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
