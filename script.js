// Sticky nav shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 30) {
    nav.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade + slide up sections on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('section:not(#hero)').forEach(s => {
  s.style.opacity = '0';
  s.style.transform = 'translateY(32px)';
  s.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(s);
});

// Skill pill stagger animation
const pills = document.querySelectorAll('.skill-pill');
const pillObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      pills.forEach((pill, i) => {
        setTimeout(() => {
          pill.style.opacity = '1';
          pill.style.transform = 'translateY(0)';
        }, i * 60);
      });
    }
  });
}, { threshold: 0.2 });

pills.forEach(p => {
  p.style.opacity = '0';
  p.style.transform = 'translateY(16px)';
  p.style.transition = 'opacity 0.4s ease, transform 0.4s ease, background 0.25s, color 0.25s, box-shadow 0.25s, border-color 0.25s';
});

if (pills.length > 0) pillObserver.observe(document.querySelector('#skills'));

// Timeline items stagger
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      timelineItems.forEach((item, i) => {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }, i * 150);
      });
    }
  });
}, { threshold: 0.1 });

timelineItems.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateX(-20px)';
  item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

if (timelineItems.length > 0) timelineObserver.observe(document.querySelector('#achievements'));

