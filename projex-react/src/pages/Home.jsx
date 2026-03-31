import { Link } from 'react-router-dom';
import useScrollAnimation from '../components/useScrollAnimation';

export default function Home() {
  useScrollAnimation();

  return (
    <>
      {/* HERO */}
      <section className="hero-section animated-hero" style={{ backgroundImage: "url('/images/11.jpg')" }}>
        <div className="hero-overlay"></div>
        <div className="hero-atmosphere" aria-hidden="true"></div>
        <div className="hero-container">
          <div className="hero-inner">
            <div className="hero-left">
              <span className="section-label hero-label">Sri Lanka · Singapore · Australia</span>
              <h1 className="hero-title">
                Independent Advisory.<br />
                <span className="accent-text">Intelligent Cost Insight.</span><br />
                Structured Delivery.
              </h1>
              <p className="hero-subtitle">
                We protect your commercial interests and guide your project from concept to completion — with clarity, discipline, and trusted client-side leadership.
              </p>
              <div className="hero-pillars">
                <span className="hero-pillar">Excellence</span>
                <span className="hero-pillar">Execution</span>
                <span className="hero-pillar">Expertise</span>
              </div>
              <div className="hero-actions">
                <Link to="/services" className="btn-pb">
                  <i className="bi bi-grid-3x3-gap-fill"></i> Our Services
                </Link></div>
            </div>
            <div className="hero-right">
              <div className="stat-card fade-up stagger" style={{ '--delay': '80ms' }}>
                <div className="stat-num">17<span className="stat-plus">+</span></div>
                <div className="stat-lbl">Years International Experience</div>
                <div className="stat-sub">Across three continents</div>
              </div>
              <div className="stat-card stat-card-accent fade-up stagger" style={{ '--delay': '160ms' }}>
                <div className="stat-num">3</div>
                <div className="stat-lbl">Countries of Operation</div>
                <div className="stat-sub">Sri Lanka · Singapore · Australia</div>
              </div>
              <div className="stat-card fade-up stagger" style={{ '--delay': '240ms' }}>
                <div className="stat-num">100<span className="stat-plus">%</span></div>
                <div className="stat-lbl">Client-Side Independent</div>
                <div className="stat-sub">Always acting in your interest</div>
              </div>
            </div>
          </div>
        </div>
        {/* SCROLL INDICATOR */}
        <div
          className="hero-scroll-indicator"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          aria-label="Scroll down"
        >
          <span>Scroll</span>
          <i className="bi bi-chevron-down"></i>
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <div className="trust-strip">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <span key={i} style={{display:'contents'}}>
              <span className="marquee-item"><i className="bi bi-shield-check"></i> Client-Side Advisory</span>
              <span className="marquee-item"><i className="bi bi-diagram-3"></i> Project Management</span>
              <span className="marquee-item"><i className="bi bi-pencil-square"></i> Design Management</span>
              <span className="marquee-item"><i className="bi bi-calculator"></i> Cost Consultancy</span>
              <span className="marquee-item"><i className="bi bi-globe2"></i> International Experience</span>
              <span className="marquee-item"><i className="bi bi-bar-chart-line"></i> Commercial Intelligence</span>
              <span className="marquee-item"><i className="bi bi-buildings"></i> Built Environment</span>
            </span>
          ))}
        </div>
      </div>

      {/* WHO WE ARE */}
      <section className="section-pad white-bg">
        <div className="container">
          <div className="row g-5" style={{alignItems:'center'}}>
            <div className="col-lg-5 fade-up">
              <div className="split-image-block" style={{aspectRatio:'4/3'}}>
                <img src="/images/4.png" alt="Project Excellence team" loading="lazy" />
                <span className="split-image-badge">Est. 2007</span>
                <span className="split-image-caption"><i className="bi bi-geo-alt-fill"></i> 3 Countries</span>
              </div>
            </div>
            <div className="col-lg-7 fade-up">
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">A Trusted Partner Who Stands Firmly on Your Side</h2>
              <div className="divider-accent"></div>
              <p style={{color:'var(--text-body)',lineHeight:'1.85',marginBottom:'20px',fontSize:'1.02rem'}}>
                At <strong>Project Excellence Pvt Ltd</strong>, we specialise in client advisory, project management, and cost consultancy — a powerful combination designed to protect your interests from concept to completion.
              </p>
              <p style={{color:'var(--text-muted)',lineHeight:'1.85',marginBottom:'36px',fontSize:'.96rem'}}>
                Our approach blends strategic insight, commercial intelligence, and structured execution to ensure your project progresses with confidence, control, and clarity.
              </p>
              <div className="principles-grid">
                <div className="value-card fade-up stagger" style={{ '--delay': '60ms' }}>
                  <div className="value-label">Principle 01</div>
                  <div className="value-title">Excellence</div>
                  <div className="value-desc">In advisory quality, technical insight, and client service at every stage.</div>
                </div>
                <div className="value-card fade-up stagger" style={{ '--delay': '120ms' }}>
                  <div className="value-label">Principle 02</div>
                  <div className="value-title">Execution</div>
                  <div className="value-desc">Structured, consistent, and proactive management across every project phase.</div>
                </div>
              </div>
              <Link to="/about" className="btn-od"><i className="bi bi-arrow-right-circle"></i> Our Story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad off-white-bg">
        <div className="container">
          <div className="text-center mb-5 fade-up">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Core Services</h2>
            <div className="divider-accent center"></div>
            <p className="section-subtitle mx-auto">A powerful combination of advisory, management, and cost intelligence — designed to protect your investment.</p>
          </div>
          <div className="services-grid">
            {[
              { img:'1.jpg', icon:'bi-shield-check', title:'Client-Side Advisory', desc:'Strategic guidance that helps you make informed decisions and reduce commercial risk.' },
              { img:'8.jpg', icon:'bi-diagram-3', title:'Project Management', desc:'Disciplined coordination that keeps your project on time, on cost, and to quality.' },
              { img:'7.jpg', icon:'bi-pencil-square', title:'Design Management', desc:'Leading design coordination — technically sound and commercially viable.' },
              { img:'9.jpg', icon:'bi-calculator', title:'Cost Consultancy', desc:'Accurate budgeting and commercial assurance that protects your financial investment.' },
            ].map((s,i) => (
              <Link key={i} to="/services" className="service-img-card fade-up stagger" style={{ '--delay': `${i * 70}ms` }}>
                <img src={`/images/${s.img}`} alt={s.title} loading="lazy" />
                <div className="service-img-overlay"></div>
                <div className="service-img-body">
                  <div className="service-img-icon"><i className={`bi ${s.icon}`}></i></div>
                  <div className="service-img-title">{s.title}</div>
                  <div className="service-img-desc">{s.desc}</div>
                  <div className="service-img-arrow">Learn More <i className="bi bi-arrow-right"></i></div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-5 fade-up">
            <Link to="/services" className="btn-od"><i className="bi bi-grid-3x3-gap"></i> View All Services</Link>
          </div>
        </div>
      </section>

      {/* APPROACH BANNER */}
      <section className="approach-banner fade-in">
        <div className="approach-banner-bg" style={{backgroundImage:"url('/images/12.jpg')"}}></div>
        <div className="approach-banner-overlay"></div>
        <div className="container approach-banner-inner">
          <div className="row g-5" style={{alignItems:'center'}}>
            <div className="col-lg-6 fade-up">
              <span className="section-label" style={{color:'rgba(255,255,255,.5)'}}>Our Approach</span>
              <h2 style={{fontSize:'clamp(2rem,4vw,3.4rem)',fontWeight:'800',color:'#fff',lineHeight:'1.1',letterSpacing:'-.04em',margin:'16px 0 28px'}}>
                Strategic.<br/>Transparent.<br/><span style={{color:'var(--accent-light)'}}>Disciplined.</span>
              </h2>
              <p style={{color:'rgba(255,255,255,.7)',fontSize:'1.02rem',lineHeight:'1.85',maxWidth:'48ch',marginBottom:'36px'}}>
                We blend advisory intelligence with structured delivery methods to consistently deliver measurable value — protecting your investment at every stage.
              </p>
              <Link to="/services" className="btn-pb"><i className="bi bi-arrow-right-circle-fill"></i> Explore Services</Link>
            </div>
            <div className="col-lg-5" style={{marginLeft:'auto'}}>
              <div className="approach-feature-list">
                {[
                  { icon:'bi-shield-check', title:'Independent Perspective', desc:"Client-only — no conflicts of interest, ever." },
                  { icon:'bi-currency-dollar', title:'Cost Intelligence', desc:'Commercial rigour at every project stage.' },
                  { icon:'bi-bar-chart-line', title:'Clear Governance', desc:'Structured reporting and early warning indicators.' },
                  { icon:'bi-globe2', title:'International Standards', desc:'Global best practices with local insight.' },
                  { icon:'bi-exclamation-triangle', title:'Early Risk Mitigation', desc:'Identifying and resolving issues before they escalate.' },
                ].map((f,i) => (
                  <div key={i} className="approach-feature-item fade-up stagger" style={{ '--delay': `${i * 60}ms` }}>
                    <div className="approach-feature-icon"><i className={`bi ${f.icon}`}></i></div>
                    <div>
                      <div className="approach-feature-title">{f.title}</div>
                      <div className="approach-feature-desc">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-pad white-bg">
        <div className="container">
          <div className="row" style={{alignItems:'flex-end',marginBottom:'48px'}}>
            <div className="col-lg-6 fade-up">
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-title">Why Clients Choose Project Excellence</h2>
              <div className="divider-accent"></div>
            </div>
            <div className="col-lg-5" style={{marginLeft:'auto'}}>
              <p className="section-subtitle fade-up">We stand firmly on the client's side — offering independent guidance that protects your commercial interests at every stage.</p>
            </div>
          </div>
          <div className="why-grid">
            {[
              { icon:'bi-person-check-fill', title:'A Trusted Advisor on Your Side', text:"We stand firmly on the client's side — offering independent guidance, transparent insights, and strategic direction." },
              { icon:'bi-lightbulb-fill', title:'Strategic Advice for Confident Decisions', text:'Our advisory-first approach gives clients clarity and confidence to make the right decisions at the right moments.' },
              { icon:'bi-currency-dollar', title:'Commercial & Cost Intelligence', text:'We help clients control budgets, validate estimates, assess variations, and unlock value through careful financial analysis.' },
              { icon:'bi-kanban-fill', title:'Structured Project Delivery', text:'Our disciplined project management approach ensures progress is controlled and the project maintains stability.' },
              { icon:'bi-bar-chart-line-fill', title:'Clear Communication & Governance', text:'We simplify complexity through clear reporting and structured governance frameworks that keep clients informed.' },
              { icon:'bi-globe2', title:'International Experience, Local Understanding', text:'With exposure across Sri Lanka, Singapore, and Australia, we blend global best practices with local insight.' },
            ].map((s,i) => (
              <div key={i} className="strength-card fade-up">
                <div className="strength-icon"><i className={`bi ${s.icon}`} style={{color:'var(--accent)'}}></i></div>
                <div className="strength-title">{s.title}</div>
                <div className="strength-text">{s.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section-pad off-white-bg">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5 fade-up">
              <span className="section-label">Our Process</span>
              <h2 className="section-title">How We Work</h2>
              <div className="divider-accent"></div>
              <p className="section-subtitle" style={{marginBottom:'36px'}}>A proven five-step approach that blends advisory intelligence with structured delivery methods.</p>
              <div className="split-image-block" style={{aspectRatio:'3/2',borderRadius:'14px'}}>
                <img src="/images/10.jpg" alt="Team at work" loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 fade-up">
              {[
                { n:'01', title:"Understand the Client's Vision", desc:'We begin by deeply understanding your objectives, constraints, risks, and expectations — ensuring our advisory is always purpose-driven.' },
                { n:'02', title:'Inform & Advise', desc:'We provide strategic recommendations backed by technical and commercial insight — giving you the clarity to make confident decisions.' },
                { n:'03', title:'Plan & Structure', desc:'We define governance frameworks, communication pathways, schedules, and cost parameters that set your project up for success.' },
                { n:'04', title:'Coordinate & Execute', desc:'We align consultants, manage contractors, and maintain progress with discipline — ensuring your project moves forward without disruption.' },
                { n:'05', title:'Monitor, Control & Protect Value', desc:'Through continuous oversight, we ensure the project stays on track commercially and operationally — protecting your investment.' },
              ].map((s,i) => (
                <div key={i} className="process-step fade-up stagger" style={{ '--delay': `${i * 60}ms` }}>
                  <div className="step-num">{s.n}</div>
                  <div>
                    <div className="step-title">{s.title}</div>
                    <div className="step-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section-pad off-white-bg">
        <div className="container">
          <div className="text-center mb-5 fade-up">
            <span className="section-label">Sectors</span>
            <h2 className="section-title">Industries We Serve</h2>
            <div className="divider-accent center"></div>
          </div>
          <div className="text-center">
            {[
              { icon:'bi-house-fill', label:'Residential Developments' },
              { icon:'bi-building-fill', label:'Commercial Buildings' },
              { icon:'bi-buildings-fill', label:'Mixed-Use Developments' },
              { icon:'bi-building-up', label:'Apartment Buildings' },
              { icon:'bi-mortarboard-fill', label:'Institutional / Educational' },
              { icon:'bi-stars', label:'Hospitality & Leisure' },
              { icon:'bi-gear-fill', label:'Industrial Projects' },
              { icon:'bi-graph-up-arrow', label:'Investor-Driven Projects' },
            ].map((t,i) => (
              <span key={i} className="industry-tag fade-up stagger" style={{ '--delay': `${i * 45}ms` }}><i className={`bi ${t.icon}`}></i> {t.label}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section section-pad">
        <div className="container">
          <div className="cta-section-inner fade-up">
            <span className="section-label" style={{color:'rgba(255,255,255,.4)'}}>Have a Project in Mind?</span>
            <h2 className="cta-title">Let Us Guide You With Clarity and Commercially Intelligent Advice.</h2>
            <p className="cta-subtitle">Our team is ready to provide the advisory support, project leadership and cost intelligence your project needs to succeed.</p>
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
