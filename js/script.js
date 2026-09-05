// Typewriter caret line
  const termOutputs = ["> whoami","> rudra_narayan_bishoyi","> role: software engineer","> status: building..."];
  let idx = 0;
  const termEl = document.querySelector('.term-line');
  const caretEl = document.getElementById('caret');
  function cycleTerm(){
    if(!termEl) return;
    termEl.childNodes[0].textContent = termOutputs[idx];
    idx = (idx + 1) % termOutputs.length;
  }
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    setInterval(cycleTerm, 2200);
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); }
    });
  }, { threshold: 0.15 });
  reveals.forEach(r=>io.observe(r));

  // Scrollspy nav
  const navLinks = document.querySelectorAll('[data-nav]');
  const sections = ['about','skills','projects','certificates','contact'].map(id=>document.getElementById(id));
  const spy = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      const link = document.querySelector(`[data-nav][href="#${entry.target.id}"]`);
      if(entry.isIntersecting){
        navLinks.forEach(l=>l.classList.remove('active'));
        if(link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });
  sections.forEach(s=> s && spy.observe(s));

  // ---------- Scroll progress bar ----------
  const progressBar = document.getElementById('progressBar');
  function updateProgress(){
    if(!progressBar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive:true });
  updateProgress();

  // ---------- Global live cursor glow (moves with mouse across whole site) ----------
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cursorGlow = document.getElementById('cursorGlow');
  if(cursorGlow && !reduceMotion){
    let targetX = 50, targetY = 50, curX = 50, curY = 50;
    window.addEventListener('mousemove', (e)=>{
      targetX = (e.clientX / window.innerWidth) * 100;
      targetY = (e.clientY / window.innerHeight) * 100;
    }, { passive:true });
    (function animateGlow(){
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      document.documentElement.style.setProperty('--mx', curX + '%');
      document.documentElement.style.setProperty('--my', curY + '%');
      requestAnimationFrame(animateGlow);
    })();
  }

  // ---------- Per-card spotlight hover (follows cursor inside each element) ----------
  if(!reduceMotion){
    const spotlightEls = document.querySelectorAll('.spotlight');
    spotlightEls.forEach(el=>{
      el.addEventListener('mousemove', (e)=>{
        const rect = el.getBoundingClientRect();
        const px = ((e.clientX - rect.left) / rect.width) * 100;
        const py = ((e.clientY - rect.top) / rect.height) * 100;
        el.style.setProperty('--px', px + '%');
        el.style.setProperty('--py', py + '%');
      });
    });
  }

  // ---------- Magnetic buttons (pull toward cursor) ----------
  if(!reduceMotion && matchMedia('(hover:hover) and (pointer:fine)').matches){
    document.querySelectorAll('.magnetic').forEach(btn=>{
      btn.addEventListener('mousemove', (e)=>{
        const rect = btn.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width/2);
        const relY = e.clientY - (rect.top + rect.height/2);
        btn.style.transform = `translate(${relX*0.25}px, ${relY*0.35}px)`;
      });
      btn.addEventListener('mouseleave', ()=>{ btn.style.transform = ''; });
    });
  }

  // ---------- Subtle parallax on hero glow blobs while scrolling ----------
  const hero = document.getElementById('hero');
  if(hero && !reduceMotion){
    window.addEventListener('scroll', ()=>{
      const y = window.scrollY;
      hero.style.setProperty('--parallax', (y * 0.15) + 'px');
    }, { passive:true });
  }
