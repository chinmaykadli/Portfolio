// ===== TRACKING.JS — Lightweight Analytics for chinmaykadli.com =====
// Tracks: page views, CV downloads, section visibility
// Ready for Umami Cloud integration (free, no cookies, no banner)
//
// SETUP UMAMI:
// 1. Sign up at https://cloud.umami.is (free tier: 10K events/month)
// 2. Add your site, get your website ID
// 3. Add this before </head> on all pages:
//    <script defer src="https://cloud.umami.is/script.js" data-website-id="YOUR_ID"></script>
// 4. Events below will automatically flow to Umami via window.umami.track()

(function() {
  'use strict';

  var DEBUG = false;

  function log() {
    if (DEBUG) console.log.apply(console, ['[Track]'].concat(Array.prototype.slice.call(arguments)));
  }

  function track(event, data) {
    log(event, data);

    // Send to Umami if loaded
    if (window.umami && typeof window.umami.track === 'function') {
      window.umami.track(event, data);
    }

    // Store locally for the analytics dashboard
    try {
      var events = JSON.parse(localStorage.getItem('_ck_events') || '[]');
      events.push({
        event: event,
        data: data || {},
        time: Date.now(),
        page: location.pathname
      });
      // Keep last 500 events max
      if (events.length > 500) events = events.slice(-500);
      localStorage.setItem('_ck_events', JSON.stringify(events));
    } catch(e) {}
  }

  // Track page view
  track('pageview', {
    path: location.pathname,
    referrer: document.referrer || 'direct',
    title: document.title
  });

  // Expose CV download tracker for main.js
  window._trackCV = function(type) {
    track('cv_download', { type: type });
  };

  // Track section visibility (once per section per visit)
  if ('IntersectionObserver' in window) {
    document.addEventListener('DOMContentLoaded', function() {
      var sections = document.querySelectorAll('.section, .cs-section, .peak-end');
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var label = entry.target.querySelector('.section-label');
            var id = entry.target.id || (label ? label.textContent.trim() : 'unknown');
            track('section_view', { section: id });
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      sections.forEach(function(s) { observer.observe(s); });
    });
  }

  // Track outbound link clicks
  document.addEventListener('click', function(e) {
    var link = e.target.closest('a[target="_blank"]');
    if (link) {
      track('outbound_click', { url: link.href });
    }
  });

  // Expose for analytics dashboard
  window._getTrackingEvents = function() {
    try {
      return JSON.parse(localStorage.getItem('_ck_events') || '[]');
    } catch(e) {
      return [];
    }
  };

  window._clearTrackingEvents = function() {
    try { localStorage.removeItem('_ck_events'); } catch(e) {}
  };

})();
