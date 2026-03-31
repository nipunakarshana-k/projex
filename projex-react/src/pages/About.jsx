import { Link } from 'react-router-dom';
import useScrollAnimation from '../components/useScrollAnimation';

export default function About() {
  useScrollAnimation();
  return (
    <>
      <section className="page-hero-mm" style={{backgroundImage:"url('/images/10.jpg')"}}>
        <div className="page-hero-mm-overlay"></div>
        <div className="page-hero-mm-inner">
          <ul className="bc-nav"><li><Link to="/">Home</Link></li><li className="bc-sep">/</li><li className="bc-active">About Us</li></ul>
          <h1 className="page-hero-mm-title">About Project Excellence</h1>
          <p className="page-hero-mm-sub">A trusted partner who stands firmly on your side — commercially, strategically, and technically.</p>
        </div>
      </section>

      <section className="section-pad white-bg">
        <div className="container">
          <div className="row g-5" style={{alignItems:'center'}}>
            <div className="col-lg-6 fade-up">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">Founded on a Core Belief</h2>
              <div className="divider-accent"></div>
              <p style={{color:'var(--text-body)',lineHeight:'1.85',fontSize:'1.02rem',marginBottom:'20px'}}>
                Project Excellence Pvt Ltd was founded on a core belief: <strong>clients deserve a trusted advisor who protects their interests</strong> — commercially, strategically, and technically.
              </p>
              <p style={{color:'var(--text-muted)',lineHeight:'1.85',marginBottom:'20px'}}>
                In a construction market where budgets shift, risks escalate, and decisions must be made quickly, we recognised a major gap: the need for independent, high-calibre advisory supported by disciplined project management.
              </p>
              <p style={{color:'var(--text-muted)',lineHeight:'1.85',marginBottom:'36px'}}>
                With professional experience across Sri Lanka, Singapore, and Australia, our team brings global insight into how successful projects are planned, evaluated, governed, and delivered.
              </p>
              <Link to="/contact" className="btn-pb"><i className="bi bi-arrow-right-circle-fill"></i> Work With Us</Link>
            </div>
            <div className="col-lg-6 fade-in">
              <div style={{background:'#111',borderRadius:'16px',padding:'48px 44px',border:'1px solid #222'}}>
                <div style={{display:'inline-flex',alignItems:'center',gap:'8px',fontSize:'.68rem',fontWeight:'700',letterSpacing:'.22em',textTransform:'uppercase',color:'#2389CA',marginBottom:'28px'}}>
                  <span style={{width:'20px',height:'1px',background:'#2389CA',display:'inline-block'}}></span> Our Promise
                </div>
                <p style={{fontSize:'1.15rem',fontWeight:'600',lineHeight:'1.65',color:'#fff',margin:'0 0 40px'}}>
                  "Clear advisory. Strong cost intelligence. Reliable project execution. A partner who stands firmly on your side."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{height:'420px',overflow:'hidden',position:'relative'}}>
        <img src="/images/12.jpg" alt="Construction site team" loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 60%'}} />
        <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,.45)',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <p style={{fontFamily:'var(--font-h)',fontSize:'clamp(1.4rem,3vw,2.4rem)',fontWeight:'800',color:'#fff',textAlign:'center',maxWidth:'720px',lineHeight:'1.3',letterSpacing:'-.03em',padding:'0 24px'}}>
            "We bring global standards of governance and advisory thinking into every project we support."
          </p>
        </div>
      </div>

      <section className="section-pad off-white-bg">
        <div className="container">
          <div className="text-center mb-5 fade-up">
            <span className="section-label">Our Direction</span>
            <h2 className="section-title">Vision &amp; Mission</h2>
            <div className="divider-accent center"></div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px'}}>
            <div className="fade-up" style={{background:'#fff',border:'1px solid var(--border)',borderTop:'3px solid var(--accent)',borderRadius:'14px',padding:'44px 40px'}}>
              <div style={{fontSize:'.68rem',fontWeight:'700',letterSpacing:'.2em',textTransform:'uppercase',color:'var(--accent)',marginBottom:'14px'}}>Vision</div>
              <h3 style={{fontSize:'1.35rem',fontWeight:'800',color:'var(--primary)',marginBottom:'16px'}}>Setting a New Benchmark</h3>
              <p style={{color:'var(--text-muted)',lineHeight:'1.85',fontSize:'.96rem'}}>To set a new benchmark in client-side project advisory — empowering owners and investors with clarity, confidence, and commercially intelligent guidance.</p>
            </div>
            <div className="fade-up" style={{background:'var(--charcoal)',borderRadius:'14px',padding:'44px 40px'}}>
              <div style={{fontSize:'.68rem',fontWeight:'700',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.4)',marginBottom:'14px'}}>Mission</div>
              <h3 style={{fontSize:'1.35rem',fontWeight:'800',color:'#fff',marginBottom:'16px'}}>Delivering Purposeful Outcomes</h3>
              <p style={{color:'rgba(255,255,255,.6)',lineHeight:'1.85',fontSize:'.96rem'}}>We strive to deliver informed decisions, proactive risk control, and transparent communication — ensuring every project moves forward with purpose, precision, and measurable value.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad white-bg">
        <div className="container">
          <div className="text-center mb-5 fade-up">
            <span className="section-label">Our Foundation</span>
            <h2 className="section-title">The Three Principles That Define Us</h2>
            <div className="divider-accent center"></div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'24px'}}>
            {[
              {n:'01',title:'Excellence',desc:'In advisory quality, communication, and decision support. Every engagement is approached with the highest standards of technical insight and client service.'},
              {n:'02',title:'Execution',desc:'Delivering consistent, structured, and proactive management across every stage. We follow through on every commitment — keeping your project on track.'},
              {n:'03',title:'Expertise',desc:"Applying technical, commercial, and strategic insight to add real value. Our team's international exposure and multi-disciplinary knowledge sets us apart."},
            ].map((v,i)=>(
              <div key={i} className="value-card fade-up">
                <div className="value-label">Principle 0{i+1}</div>
                <div className="value-title">{v.title}</div>
                <div className="value-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad off-white-bg">
        <div className="container">
          <div className="row g-5" style={{alignItems:'center'}}>
            <div className="col-lg-5 fade-up">
              <span className="section-label">Service Identity</span>
              <h2 className="section-title">Three Disciplines. One Trusted Partner.</h2>
              <div className="divider-accent"></div>
              <p style={{color:'var(--text-muted)',lineHeight:'1.85',marginBottom:'32px'}}>Our service identity is intentionally balanced — combining advisory, management, and cost disciplines into a single, integrated offering.</p>
              <div className="split-image-block" style={{aspectRatio:'4/3',borderRadius:'14px'}}>
                <img src="/images/7.jpg" alt="Blueprints" loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 fade-up">
              {[
                {icon:'bi-shield-check',title:'Client Advisory',desc:'Strategic guidance, risk insight, commercial positioning, decision support, and client representation throughout the project lifecycle.'},
                {icon:'bi-diagram-3',title:'Project Management',desc:'Coordinated execution, progress control, stakeholder alignment, and structured delivery that keeps every project moving forward with precision.'},
                {icon:'bi-pencil-square',title:'Design Management',desc:'Client-side design leadership ensuring every discipline aligns with objectives — technically sound and commercially viable.'},
                {icon:'bi-calculator',title:'Cost Consultancy',desc:'Cost planning, value engineering, estimates, commercial assessments, and claim evaluation to protect your financial investment.'},
              ].map((f,i)=>(
                <div key={i} className="service-feature-item">
                  <div className="feature-check"><i className={`bi ${f.icon}`}></i></div>
                  <div>
                    <div className="feature-text-title">{f.title}</div>
                    <div className="feature-text-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section section-pad">
        <div className="container">
          <div className="cta-section-inner fade-up">
            <span className="section-label" style={{color:'rgba(255,255,255,.4)'}}>Work With Us</span>
            <h2 className="cta-title">Ready to Work With a Trusted Project Partner?</h2>
            <p className="cta-subtitle">Let us bring clarity, structure, and commercially intelligent advisory to your next project.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-pb"><i className="bi bi-envelope-fill"></i> Get In Touch</Link>
              <Link to="/services" className="btn-ob"><i className="bi bi-grid-3x3-gap-fill"></i> Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
