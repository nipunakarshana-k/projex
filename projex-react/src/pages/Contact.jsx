import { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../components/useScrollAnimation';

export default function Contact() {
  useScrollAnimation();
  const [form, setForm] = useState({ fullName:'', email:'', phone:'', company:'', projectType:'', subject:'', message:'' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm({...form, [e.target.name]: e.target.value});
  const submit = e => { e.preventDefault(); setSent(true); setForm({ fullName:'', email:'', phone:'', company:'', projectType:'', subject:'', message:'' }); };

  return (
    <>
      <section className="page-hero-mm" style={{backgroundImage:"url('/images/14.jpg')"}}>
        <div className="page-hero-mm-overlay"></div>
        <div className="page-hero-mm-inner">
          <ul className="bc-nav"><li><Link to="/">Home</Link></li><li className="bc-sep">/</li><li className="bc-active">Contact Us</li></ul>
          <h1 className="page-hero-mm-title">Get In Touch</h1>
          <p className="page-hero-mm-sub">Have a project in mind? We'd love to hear about it. Let's start a conversation about how we can help you succeed.</p>
        </div>
      </section>

      <section className="section-pad white-bg">
        <div className="container">
          {sent && (
            <div style={{background:'rgba(16,185,129,.08)',border:'1px solid rgba(16,185,129,.25)',borderRadius:'12px',padding:'20px 24px',display:'flex',alignItems:'center',gap:'16px',marginBottom:'40px'}}>
              <i className="bi bi-check-circle-fill" style={{fontSize:'1.3rem',color:'#10B981'}}></i>
              <div><strong style={{display:'block',marginBottom:'4px'}}>Message Sent Successfully!</strong><span style={{fontSize:'.9rem',color:'var(--text-muted)'}}>Thank you for reaching out. We'll respond within 24 business hours.</span></div>
            </div>
          )}
          <div style={{display:'grid',gridTemplateColumns:'1.4fr 1fr',gap:'60px',alignItems:'start'}}>
            <div style={{background:'#fff',border:'1px solid var(--border)',borderRadius:'16px',padding:'clamp(28px,4vw,48px)'}}>
              <span className="section-label">Send a Message</span>
              <h2 className="section-title" style={{fontSize:'1.7rem',margin:'8px 0 4px'}}>Tell Us About Your Project</h2>
              <div className="divider-accent"></div>
              <form onSubmit={submit}>
                <div className="form-grid" style={{marginBottom:'20px'}}>
                  <div>
                    <label className="form-label-b">Full Name *</label>
                    <input className="form-ctrl-b" name="fullName" value={form.fullName} onChange={handle} placeholder="e.g. John Smith" required />
                  </div>
                  <div>
                    <label className="form-label-b">Email Address *</label>
                    <input className="form-ctrl-b" type="email" name="email" value={form.email} onChange={handle} placeholder="your@email.com" required />
                  </div>
                  <div>
                    <label className="form-label-b">Phone</label>
                    <input className="form-ctrl-b" name="phone" value={form.phone} onChange={handle} placeholder="+94 XX XXX XXXX" />
                  </div>
                  <div>
                    <label className="form-label-b">Company</label>
                    <input className="form-ctrl-b" name="company" value={form.company} onChange={handle} placeholder="Your company name" />
                  </div>
                  <div>
                    <label className="form-label-b">Project Type</label>
                    <select className="form-ctrl-b" name="projectType" value={form.projectType} onChange={handle}>
                      <option value="">— Select Project Type —</option>
                      <option>Residential Development</option>
                      <option>Commercial Building</option>
                      <option>Mixed-Use Development</option>
                      <option>Apartment Building</option>
                      <option>Institutional / Educational</option>
                      <option>Hospitality & Leisure</option>
                      <option>Industrial Project</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label-b">Subject *</label>
                    <input className="form-ctrl-b" name="subject" value={form.subject} onChange={handle} placeholder="Brief subject line" required />
                  </div>
                </div>
                <div style={{marginBottom:'24px'}}>
                  <label className="form-label-b">Message *</label>
                  <textarea className="form-ctrl-b" name="message" value={form.message} onChange={handle} rows={5} placeholder="Tell us about your project, objectives, and how we can help…" required style={{resize:'vertical'}}></textarea>
                </div>
                <button type="submit" className="btn-pb"><i className="bi bi-send-fill"></i> Send Message</button>
              </form>
            </div>

            <div className="fade-in">
              <span className="section-label">Contact Information</span>
              <h3 style={{fontSize:'1.4rem',fontWeight:'800',color:'var(--primary)',margin:'8px 0 4px',letterSpacing:'-.02em'}}>We'd Love to Hear From You</h3>
              <div className="divider-accent"></div>
              <p style={{color:'var(--text-muted)',lineHeight:'1.8',marginBottom:'36px'}}>Reach out to discuss your project. We provide confidential, obligation-free initial consultations.</p>

              {[
                {icon:'bi-geo-alt-fill',label:'Office Locations',val:'Sri Lanka · Singapore · Australia'},
                {icon:'bi-envelope-fill',label:'Email Address',val:'info@projectexcellence.lk'},
                {icon:'bi-telephone-fill',label:'Phone',val:'+94 XX XXX XXXX'},
                {icon:'bi-clock-fill',label:'Business Hours',val:'Monday – Friday, 9:00 AM – 5:30 PM'},
              ].map((c,i) => (
                <div key={i} className="contact-info-item">
                  <div className="contact-info-icon"><i className={`bi ${c.icon}`}></i></div>
                  <div><div className="ci-label">{c.label}</div><div className="ci-val">{c.val}</div></div>
                </div>
              ))}

              <div style={{background:'var(--off-white)',border:'1px solid var(--border)',borderRadius:'14px',padding:'28px',marginTop:'8px'}}>
                <div style={{fontSize:'.68rem',fontWeight:'700',letterSpacing:'.18em',textTransform:'uppercase',color:'var(--accent)',marginBottom:'16px'}}>What to Expect</div>
                {['Response within 24 business hours','Confidential initial consultation','No-obligation project discussion'].map((t,i,arr)=>(
                  <div key={i} style={{display:'flex',alignItems:'center',gap:'12px',padding:'12px 0',borderBottom:i<arr.length-1?'1px solid var(--border)':'none'}}>
                    <div style={{width:'28px',height:'28px',borderRadius:'50%',background:'var(--accent)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,color:'#fff',fontSize:'.75rem'}}><i className="bi bi-check"></i></div>
                    <span style={{fontSize:'.88rem',color:'var(--text-muted)'}}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
