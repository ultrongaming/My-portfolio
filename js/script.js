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
  const sections = ['about','skills','projects','contact'].map(id=>document.getElementById(id));
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
