import React, { useState } from 'react';

function App() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeSocial, setActiveSocial] = useState(null);
  const [isSubmitHovered, setIsSubmitHovered] = useState(false);

  // Clean brand SVG paths optimized to scale and adapt cleanly
  const icons = {
    spotify: (color) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M7.5 9.5c3-1 6.5-1 9.5 0" />
        <path d="M8.5 12.5c2.5-.7 5.5-.7 8 0" />
        <path d="M9.5 15.5c1.8-.5 3.8-.5 5.5 0" />
      </svg>
    ),
    youtube: (color) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
    ),
    instagram: (color) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
    ),
    appleMusic: (color) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
    ),
    linktree: (color) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 2 3 5h-2v3h4l-3 5h2l-4 6-4-6h2l-3-5h4V7H9l3-5z" />
      </svg>
    )
  };

  // 4 icons setup: Removed the duplicated 4th icon completely and locked Linktree down as the final link[cite: 1]
  const socialLinks = [
    { key: 'spotify', url: 'https://linktr.ee/njsam' },
    { key: 'youtube', url: 'https://youtube.com/@njsamofficial' },
    { key: 'instagram', url: 'https://instagram.com/njsam_official' },
    { key: 'linktree', url: 'https://linktr.ee/njsam' }
  ];

  const tracks = [
    {
      id: '2021',
      title: 'KABADDI',
      meta: 'Collab with Lil Kaarti',
      desc: 'A heavy Tamil x Hindi link-up celebrating the power of the classic game. Engineered with raw street energy to showcase pure lyrical domination.',
      links: [
        { label: 'Spotify', icon: 'spotify', url: 'https://open.spotify.com/embed/track/0skFb7R1JWPNYUDFQUYKNo?utm_source=generator&si=9b19848b9cf14bf7' },
        { label: 'Apple Music', icon: 'appleMusic', url: 'https://embed.music.apple.com/in/song/kabaddi/1748090453' },
        { label: 'YouTube Video', icon: 'youtube', url: 'https://youtu.be/EJgDP7QWN8I?si=av4ozYgnsGRhpztz' }
      ]
    },
    {
      id: '2023',
      title: 'BACK IN THE GAME',
      meta: 'Solo Debut',
      desc: 'A defining solo comeback track written at 2 AM. Engineered to capture raw cultural grit, it broke through completely independently to lock down over 30K+ streams globally.',
      links: [
        { label: 'Spotify', icon: 'spotify', url: 'https://open.spotify.com/embed/track/1AIhQAkBK6DV6BGLyXwbMQ?utm_source=generator&si=57ddb81f9e2f4e2c' },
        { label: 'Apple Music', icon: 'appleMusic', url: 'https://embed.music.apple.com/in/song/back-in-the-game/1719151281' },
        { label: 'YouTube Video', icon: 'youtube', url: 'https://youtu.be/IgZDNmsLVrg?si=DfS9vIC9YTnPvKl1' }
      ]
    },
    {
      id: '2024',
      title: 'NENJUKULLE',
      meta: 'Solo Release',
      desc: 'A deep, conscious track capturing the raw emotions of a heartbroken boy. Detailing the painful contrast of what life was like before versus how it feels now after a breakup.',
      links: [
        { label: 'YouTube Video', icon: 'youtube', url: 'https://youtu.be/5nPYVJpnoTw?si=8W7hVVb2MmfB3kzv' }
      ]
    },
    {
      id: '2024',
      title: 'NO MATTER',
      meta: 'Collab featuring Justus Paul',
      desc: 'A heavy English x Tamil motivational push-up anthem featuring Justus Paul. Built to remind the streets that no matter how hard you work, you must stay dedicated and keep grinding forward.',
      links: [
        { label: 'Spotify', icon: 'spotify', url: 'https://open.spotify.com/embed/track/00r1hym3G9RHb0dyqW6dMu?utm_source=generator&si=d27af0c437da437d' },
        { label: 'Apple Music', icon: 'appleMusic', url: 'https://embed.music.apple.com/in/song/no-matter-feat-nj-sam/1790546109' },
        { label: 'YouTube Video', icon: 'youtube', url: 'https://youtu.be/KvgslZd_a4Q?si=u7_hYIO6mpfac38F' }
      ]
    },
    {
      id: '2025',
      title: 'FIRST CHAPTER',
      meta: 'Collab with PSYCHADHIIII',
      desc: 'A hard-hitting drill track alongside PSYCHADHIIII marking the start of a massive chapter. Laying down the definitive blueprint for the journey toward the ultimate aim.',
      links: [
        { label: 'Spotify', icon: 'spotify', url: 'https://open.spotify.com/embed/track/0h6r92ZYuXYmknUdihUtyG?utm_source=generator&si=2a2ae8c670d44d5d' },
        { label: 'Apple Music', icon: 'appleMusic', url: 'https://embed.music.apple.com/in/song/first-chapter/1841023045' },
        { label: 'YouTube Video', icon: 'youtube', url: 'https://youtu.be/4PlSB5WZyNw?si=0vnuRZZ4dd_F0gsi' }
      ]
    },
    {
      id: '2026',
      title: 'THAPPATTA FLOW',
      meta: 'Collab with PSYCHADHIIII',
      desc: 'A collaborative banger with PSYCHADHIIII delivering a massive, raw Tamil Kuthu feel. Warning the industry that there is zero comparison because our lane is entirely different.',
      links: [
        { label: 'Spotify', icon: 'spotify', url: 'https://open.spotify.com/embed/track/17PI3TjLe9PdwtCnWMoDKo?utm_source=generator&si=d05e50221abf4ea3' },
        { label: 'Apple Music', icon: 'appleMusic', url: 'https://embed.music.apple.com/in/song/thappatta-flow/1893711731' }
      ]
    }
  ];

  const galleryImages = [
    '/images/pic2.jpg',
    '/images/pic3.webp',
    '/images/pic4.jpg',
    '/images/pic5.webp',
    '/images/pic6.jpg'
  ];

  return (
    <div style={{
      backgroundColor: '#000000',
      color: '#ffffff',
      fontFamily: '"Inter", sans-serif',
      minHeight: '100vh',
      padding: '40px 20px',
      boxSizing: 'border-box'
    }}>
      {/* 1. HERO HEADER */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto 80px auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
        paddingTop: '40px'
      }}>
        <div style={{ flex: '1 1 450px' }}>
          <h1 style={{ fontSize: '5.5rem', fontWeight: '900', letterSpacing: '6px', margin: '0 0 10px 0', lineHeight: '0.95', textShadow: '0 0 20px rgba(168,85,247,0.3)' }}>NJ SAM</h1>
          <p style={{ fontSize: '1.1rem', color: '#a1a1a1', letterSpacing: '2px', margin: '0 0 35px 0', fontWeight: '500' }}>INDEPENDENT TAMIL RAP ARTIST</p>
          
          <div style={{ display: 'flex', gap: '15px' }}>
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setActiveSocial(idx)}
                onMouseLeave={() => setActiveSocial(null)}
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  border: `1px solid ${activeSocial === idx ? '#a855f7' : '#333333'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: activeSocial === idx ? 'rgba(168,85,247,0.1)' : 'transparent',
                  transition: 'all 0.3s ease-in-out',
                  boxShadow: activeSocial === idx ? '0 0 15px rgba(168,85,247,0.4)' : 'none'
                }}
              >
                {icons[social.key](activeSocial === idx ? '#ffffff' : '#a1a1a1')}
              </a>
            ))}
          </div>
        </div>

        <div style={{ flex: '1 1 450px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '2px solid #a855f7',
            boxShadow: '0 0 30px rgba(168,85,247,0.2)',
            maxWidth: '100%',
            height: '400px'
          }}>
            <img 
              src="/images/hero.jpg" 
              alt="NJ SAM Performance" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <img 
            src="/images/signature.png" 
            alt="Signature" 
            style={{
              position: 'absolute',
              bottom: '-25px',
              right: '20px',
              width: '180px',
              zIndex: '10',
              filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.8))'
            }}
          />
        </div>
      </section>

      {/* 2. THE EDITORIAL ARCHIVE */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 100px auto', borderTop: '1px solid #222', paddingTop: '60px' }}>
        <p style={{ color: '#a855f7', fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.9rem', margin: '0 0 20px 0' }}>01 / ARCHIVE</p>
        <div style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', lineHeight: '1.3', letterSpacing: '1px', marginBottom: '30px' }}>
            SHARPENING A DISTINCT LINGUISTIC FLOW TO REWRITE THE INDEPENDENT RULES.
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', lineHeight: '1.8', fontWeight: '300' }}>
            I'm Sam Nickson, aka NJ SAM, a 20-year-old solo Tamil rap artist dedicated to pushing the absolute boundaries of what independent music can achieve.
            My journey with hip-hop ignited live on the street, watching grassroots crews perform over heavy beats. Today, the mission is to take raw lyrical 
            storytelling to a global audience, building a distinct lane where the independent music speaks for a lasting legacy long after I'm gone.
          </p>
        </div>
      </section>

      {/* 3. SYMMETRIC PORTFOLIO GRID */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 100px auto' }}>
        <p style={{ color: '#a855f7', fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.9rem', margin: '0 0 40px 0' }}>02 / DISCOGRAPHY</p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '30px'
        }}>
          {tracks.map((track) => (
            <div
              key={track.id}
              onMouseEnter={() => setHoveredCard(track.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                backgroundColor: '#0c0c0c',
                border: `1px solid ${hoveredCard === track.id ? '#a855f7' : '#1a1a1a'}`,
                borderRadius: '16px',
                padding: '35px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '340px',
                transform: hoveredCard === track.id ? 'translateY(-5px)' : 'translateY(0)',
                boxShadow: hoveredCard === track.id ? '0 10px 30px rgba(168,85,247,0.15)' : 'none',
                transition: 'all 0.3s ease-in-out',
                boxSizing: 'border-box'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '15px' }}>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: '800', margin: '0', letterSpacing: '1px' }}>{track.title}</h3>
                  <span style={{ color: '#a855f7', fontSize: '0.85rem', fontWeight: 'bold' }}>({track.id})</span>
                </div>
                <p style={{ color: '#888888', fontSize: '0.9rem', margin: '0 0 15px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>{track.meta}</p>
                <p style={{ color: '#b3b3b3', fontSize: '0.95rem', lineHeight: '1.6', margin: '0 0 30px 0', fontWeight: '300' }}>{track.desc}</p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', borderTop: '1px solid #1a1a1a', paddingTop: '20px' }}>
                {track.links.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: '#ffffff',
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      padding: '8px 14px',
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      border: '1px solid #333333',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#a855f7';
                      e.currentTarget.style.backgroundColor = 'rgba(168,85,247,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#333333';
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
                    }}
                  >
                    {icons[link.icon]('#ffffff')}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VISUAL PRESS REEL */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 100px auto' }}>
        <p style={{ color: '#a855f7', fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.9rem', margin: '0 0 30px 0' }}>03 / GALLERY</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '20px'
        }}>
          {galleryImages.map((src, index) => (
            <div 
              key={index}
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                height: '280px',
                border: '1px solid #111111',
                transition: 'all 0.3s ease-in-out'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#a855f7';
                e.currentTarget.style.transform = 'scale(1.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#111111';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <img 
                src={src} 
                alt={`Gallery Asset ${index + 2}`} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* 5. CONNECT HOOK & CONTACT PORTAL */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto 80px auto',
        borderTop: '1px solid #222',
        paddingTop: '60px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '50px'
      }}>
        <div style={{ flex: '1 1 400px' }}>
          <p style={{ color: '#a855f7', fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.9rem', margin: '0 0 30px 0' }}>04 / DETAILED CONNECT</p>
          <div style={{ marginBottom: '25px' }}>
            <span style={{ color: '#555555', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '1px', display: 'block', marginBottom: '5px' }}>PROFESSIONAL EMAIL</span>
            <a href="mailto:contact.njsam@gmail.com" style={{ color: '#ffffff', fontSize: '1.3rem', fontWeight: '700', textDecoration: 'none' }}>contact.njsam@gmail.com</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {icons.linktree('#a855f7')}
            <div>
              <span style={{ color: '#555555', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '1px', display: 'block' }}>OFFICIAL LINKTREE HUB</span>
              <a href="https://linktr.ee/njsam" target="_blank" rel="noreferrer" style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: '500', textDecoration: 'none', borderBottom: '1px solid #a855f7' }}>linktr.ee/njsam</a>
            </div>
          </div>
        </div>

        <div style={{ flex: '1 1 500px', backgroundColor: '#0c0c0c', padding: '40px', borderRadius: '16px', border: '1px solid #1a1a1a' }}>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <input 
                type="text" 
                placeholder="Name" 
                style={{
                  flex: '1 1 200px',
                  backgroundColor: '#000000',
                  border: '1px solid #333333',
                  padding: '15px',
                  borderRadius: '8px',
                  color: '#ffffff',
                  outline: 'none',
                  fontSize: '0.95rem'
                }}
                onFocus={(e) => e.target.style.borderColor = '#a855f7'}
                onBlur={(e) => e.target.style.borderColor = '#333333'}
              />
              <input 
                type="email" 
                placeholder="Email" 
                style={{
                  flex: '1 1 200px',
                  backgroundColor: '#000000',
                  border: '1px solid #333333',
                  padding: '15px',
                  borderRadius: '8px',
                  color: '#ffffff',
                  outline: 'none',
                  fontSize: '0.95rem'
                }}
                onFocus={(e) => e.target.style.borderColor = '#a855f7'}
                onBlur={(e) => e.target.style.borderColor = '#333333'}
              />
            </div>
            <textarea 
              rows="5" 
              placeholder="Message" 
              style={{
                backgroundColor: '#000000',
                border: '1px solid #333333',
                padding: '15px',
                borderRadius: '8px',
                color: '#ffffff',
                outline: 'none',
                fontSize: '0.95rem',
                resize: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#a855f7'}
              onBlur={(e) => e.target.style.borderColor = '#333333'}
            ></textarea>
            <button 
              type="submit"
              onMouseEnter={() => setIsSubmitHovered(true)}
              onMouseLeave={() => setIsSubmitHovered(false)}
              style={{
                backgroundColor: isSubmitHovered ? '#b566ff' : '#a855f7',
                color: '#ffffff',
                padding: '16px',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                cursor: 'pointer',
                fontSize: '0.95rem',
                transition: 'all 0.2s ease',
                boxShadow: isSubmitHovered ? '0 5px 15px rgba(168,85,247,0.4)' : 'none'
              }}
            >
              SEND INQUIRY
            </button>
          </form>
        </div>
      </section>

      {/* 6. EDITORIAL FOOTER */}
      <footer style={{
        textAlign: 'center',
        paddingTop: '40px',
        borderTop: '1px solid #111111',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}>
        <img 
          src="/images/signature.png" 
          alt="Signature Endorsement" 
          style={{ width: '120px', filter: 'brightness(0) invert(1) opacity(0.7)' }}
        />
        <p style={{ color: '#444444', fontSize: '0.85rem', letterSpacing: '1px', margin: '0' }}>
          © 2026 NJ SAM. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;