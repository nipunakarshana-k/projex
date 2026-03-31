import { Link } from 'react-router-dom';
import useScrollAnimation from '../components/useScrollAnimation';

const services = [
  { img:'1.jpg', icon:'bi-shield-check', title:'Client-Side Advisory Services', desc:'Strategic guidance that helps you make informed decisions, reduce risk, and align your project with your commercial goals.', items:['Strategic Advisory & Project Guidance','Client Representation','Design Review & Technical Advisory','Risk & Opportunity Management','Stakeholder Advisory & Coordination'] },
  { img:'8.jpg', icon:'bi-diagram-3', title:'Project Management Services', desc:'Disciplined coordination, progress control, and structured execution that keeps your project delivered on time, on cost, and to quality.', items:['End-to-End Project Delivery Management','Progress Monitoring & Reporting','Construction Oversight & Quality Monitoring','Procurement, Tender Support & Contract Administration','Program & Schedule Control'] },
  { img:'7.jpg', icon:'bi-pencil-square', title:'Design Management Services', desc:"We lead and advise the design process to ensure every discipline remains aligned with the client's objectives — technically sound and commercially viable.", items:['Design Coordination & Advisory','Client-Side Design Leadership','Technical Review & Risk Identification','Design Program Management','Value-Driven Design & Cost Alignment'] },
  { img:'9.jpg', icon:'bi-calculator', title:'Cost Consultancy Services', desc:'Accurate budgeting, cost evaluation, value engineering, and commercial assurance that protects your financial investment throughout the project lifecycle.', items:['Cost Planning & Budget Development','Value Engineering & Cost Optimization','Commercial & Cost Risk Advisory','Claims Review & Payment Verification','Estimate Reviews & Benchmarking'] },
];

export default function Services() {
  useScrollAnimation();
  return (
    <>
      <section className="page-hero-mm" style={{backgroundImage:"url('/images/7.jpg')"}}>
        <div className="page-hero-mm-overlay"></div>
        <div className="page-hero-mm-inner">
          <ul className="bc-nav"><li><Link to="/">Home</Link></li><li className="bc-sep">/</li><li className="bc-active">Services</li></ul>
          <h1 className="page-hero-mm-title">Our Services</h1>
          <p className="page-hero-mm-sub">A powerful combination of advisory, project management, design management, and cost consultancy — designed to protect your commercial interests.</p>
        </div>
      </section>

      <section className="section-pad white-bg">
        <div className="container">
          <div className="text-center mb-5 fade-up">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Comprehensive Project Services</h2>
            <div className="divider-accent center"></div>
            <p className="section-subtitle mx-auto">Our services are structured to protect your commercial interests, reduce risk, and ensure your project moves forward with discipline and strategic alignment.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px'}}>
            {services.map((s,i) => (
              <div key={i} className="service-detail-card fade-up">
                <div className="service-detail-img">
                  <img src={`/images/${s.img}`} alt={s.title} loading="lazy" />
                  <div className="service-detail-img-overlay">
                    <div className="service-icon-badge"><i className={`bi ${s.icon}`}></i></div>
                  </div>
                </div>
                <div className="service-detail-body">
                  <div className="service-title">{s.title}</div>
                  <div className="service-desc">{s.desc}</div>
                  <ul className="service-checklist">
                    {s.items.map((item,j) => (
                      <li key={j}><i className="bi bi-check-circle-fill"></i> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad off-white-bg">
        <div className="container">
          <div className="text-center mb-5 fade-up">
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">How We Work</h2>
            <div className="divider-accent center"></div>
            <p className="section-subtitle mx-auto">Strategic. Transparent. Disciplined. Our approach blends advisory intelligence with structured delivery methods.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'24px'}}>
            {[
              {n:'01',title:'Understand the Vision',desc:'We begin by understanding the objectives, constraints, risks, and expectations.'},
              {n:'02',title:'Inform & Advise',desc:'We provide strategic recommendations backed by technical and commercial insight.'},
              {n:'03',title:'Plan & Structure',desc:'We define governance frameworks, communication pathways, schedules, and cost parameters.'},
              {n:'04',title:'Coordinate & Execute',desc:'We align consultants, manage contractors, and maintain progress with discipline.'},
              {n:'05',title:'Monitor & Control',desc:'Through continuous oversight, we ensure the project stays on track — commercially and operationally.'},
              {n:'06',title:'Deliver & Protect Value',desc:'Every decision and action is made to protect your interests and maximise long-term value.'},
            ].map((s,i) => (
              <div key={i} className="strength-card fade-up">
                <div style={{fontSize:'2.4rem',fontWeight:'800',color:'var(--border)',lineHeight:'1',marginBottom:'16px'}}>{s.n}</div>
                <div className="strength-title">{s.title}</div>
                <div className="strength-text">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-pad">
        <div className="container">
          <div className="cta-section-inner fade-up">
            <span className="section-label" style={{color:'rgba(255,255,255,.4)'}}>Start a Conversation</span>
            <h2 className="cta-title">Ready to Discuss Your Project?</h2>
            <p className="cta-subtitle">Let us provide the clarity and commercially intelligent advisory your project deserves.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-pb"><i className="bi bi-envelope-fill"></i> Contact Us Today</Link>
              <Link to="/about" className="btn-ob"><i className="bi bi-info-circle"></i> About Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
