// ===== PORTFOLIO — MAIN.JS =====
// All interactions, theme management, accessibility

// ===== THEME =====
function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? '' : 'dark');
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.textContent = isDark ? '☀' : '☽';
    toggle.setAttribute('aria-label', isDark ? 'Toggle dark mode' : 'Toggle light mode');
  }
  try { localStorage.setItem('theme', newTheme); } catch(e) {}
}

// Initialise theme before paint (also in inline script in <head>)
function initTheme() {
  let theme = 'light';
  try { theme = localStorage.getItem('theme'); } catch(e) {}
  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
      toggle.textContent = '☽';
      toggle.setAttribute('aria-label', 'Toggle light mode');
    }
  }
}

// ===== THREE-SPEED TOGGLE =====
function setSpeed(speed) {
  document.body.setAttribute('data-speed', speed);
  const btns = document.querySelectorAll('.speed-btn');
  btns.forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });
  if (speed === '30s' && btns[0]) { btns[0].classList.add('active'); btns[0].setAttribute('aria-selected', 'true'); }
  if (speed === '3min' && btns[1]) { btns[1].classList.add('active'); btns[1].setAttribute('aria-selected', 'true'); }
  if (speed === 'deep' && btns[2]) { btns[2].classList.add('active'); btns[2].setAttribute('aria-selected', 'true'); }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== CV DOWNLOAD MODAL =====
let _modalTrigger = null;

function openModal() {
  const modal = document.getElementById('cvModal');
  if (!modal) return;
  _modalTrigger = document.activeElement;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  // Focus first option
  const firstOption = modal.querySelector('.modal-option');
  if (firstOption) firstOption.focus();
  // Add focus trap
  modal.addEventListener('keydown', _trapModalFocus);
}

function closeModal(e) {
  const modal = document.getElementById('cvModal');
  if (!modal) return;
  if (e && e.target !== modal && e.type === 'click') return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  modal.removeEventListener('keydown', _trapModalFocus);
  // Return focus to trigger
  if (_modalTrigger) {
    _modalTrigger.focus();
    _modalTrigger = null;
  }
}

function _trapModalFocus(e) {
  if (e.key === 'Escape') { closeModal(); return; }
  if (e.key !== 'Tab') return;
  const modal = document.querySelector('.modal');
  if (!modal) return;
  const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusable.length === 0) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function downloadCV(type) {
  // Track for analytics
  console.log('[CV Download]', type, new Date().toISOString());
  if (typeof window._trackCV === 'function') window._trackCV(type);

  // Find the matching file from CONTENT
  if (typeof CONTENT !== 'undefined' && CONTENT.cvDownload) {
    const option = CONTENT.cvDownload.options.find(o => o.id === type);
    if (option && option.file) {
      const a = document.createElement('a');
      a.href = 'cv/' + option.file;
      a.download = option.file;
      a.click();
    }
  }

  closeModal();
}

// ===== SCROLL PROGRESS =====
function updateScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  bar.style.width = progress + '%';
}

// ===== METRIC ANIMATION (if enabled) =====
function animateMetrics() {
  if (typeof CONFIG === 'undefined' || !CONFIG.animateMetrics) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll('.metric-value');
        cards.forEach(card => {
          const text = card.textContent.trim();
          const match = text.match(/^(\$?)(\d+)(.*)/);
          if (match) {
            const prefix = match[1];
            const target = parseInt(match[2]);
            const suffix = match[3];
            const duration = 1200;
            const start = performance.now();
            card.textContent = prefix + '0' + suffix;
            function step(now) {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              card.textContent = prefix + Math.round(eased * target) + suffix;
              if (progress < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
          }
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const grid = document.querySelector('.metrics-grid');
  if (grid) observer.observe(grid);
}

// ===== EMAIL OBFUSCATION =====
function initEmail() {
  const el = document.getElementById('emailLink');
  if (!el) return;
  const u = el.getAttribute('data-u');
  const d = el.getAttribute('data-d');
  if (u && d) {
    const addr = u + '@' + d;
    el.href = 'mailto:' + addr;
    el.textContent = addr + ' →';
  }
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const modal = document.getElementById('cvModal');
    if (modal && modal.classList.contains('open')) closeModal();
  }
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  initEmail();

  // Set default speed
  if (typeof CONFIG !== 'undefined' && CONFIG.defaultSpeed) {
    setSpeed(CONFIG.defaultSpeed);
  } else {
    setSpeed('3min');
  }

  // Scroll progress
  window.addEventListener('scroll', updateScrollProgress);
  updateScrollProgress();

  // Metric animation
  animateMetrics();
});
