/**
 * PROJEX — Project Excellence Advisory & Management
 * Main JavaScript — Production Quality
 * Vanilla JS, no dependencies.
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────
     UTILITY: run after DOM ready
  ───────────────────────────────────────────── */
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  /* ─────────────────────────────────────────────
     NAVBAR: scroll effect
     Adds/removes "scrolled" class on #mainNav
  ───────────────────────────────────────────── */
  function initNavbarScroll() {
    var nav = document.getElementById('mainNav');
    if (!nav) return;

    function onScroll() {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run on init
  }

  /* ─────────────────────────────────────────────
     NAVBAR: active link detection
     Matches href against current pathname
  ───────────────────────────────────────────── */
  function initActiveNavLinks() {
    var currentPath = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';

    document.querySelectorAll('.nav-link-custom').forEach(function (link) {
      var href = (link.getAttribute('href') || '').toLowerCase().replace(/\/$/, '') || '/';

      var isActive = false;

      if (href === '/') {
        isActive = (currentPath === '' || currentPath === '/');
      } else {
        isActive = currentPath === href || currentPath.startsWith(href + '/');
      }

      if (isActive) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  /* ─────────────────────────────────────────────
     MOBILE: close navbar on link click
  ───────────────────────────────────────────── */
  function initMobileNavClose() {
    document.querySelectorAll('.nav-link-custom').forEach(function (link) {
      link.addEventListener('click', function () {
        var collapse = document.getElementById('navbarNav');
        if (collapse && collapse.classList.contains('show')) {
          // Use Bootstrap Collapse API if available
          if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
            var bsCollapse = bootstrap.Collapse.getInstance(collapse);
            if (bsCollapse) {
              bsCollapse.hide();
            } else {
              new bootstrap.Collapse(collapse, { toggle: false }).hide();
            }
          } else {
            collapse.classList.remove('show');
          }
        }
      });
    });
  }

  /* ─────────────────────────────────────────────
     NAV LOGO: fallback text when image fails
  ───────────────────────────────────────────── */
  function initLogoFallback() {
    var logos = document.querySelectorAll('.nav-logo');
    logos.forEach(function (logo) {
      logo.addEventListener('error', function () {
        logo.classList.add('img-error');
      });
    });
  }

  /* ─────────────────────────────────────────────
     INTERSECTION OBSERVER: fade-up / fade-in
  ───────────────────────────────────────────── */
  function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: make everything visible
      document.querySelectorAll('.fade-up, .fade-in').forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -48px 0px'
    });

    document.querySelectorAll('.fade-up, .fade-in').forEach(function (el) {
      // Skip elements inside stagger-parent (handled separately)
      if (!el.closest('.stagger-parent')) {
        fadeObserver.observe(el);
      }
    });
  }

  /* ─────────────────────────────────────────────
     STAGGER PARENT: staggered child reveals
  ───────────────────────────────────────────── */
  function initStaggerAnimations() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.stagger-parent .fade-up').forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var staggerObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var children = entry.target.querySelectorAll('.fade-up');
          children.forEach(function (child, i) {
            setTimeout(function () {
              child.classList.add('visible');
            }, i * 110);
          });
          staggerObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.stagger-parent').forEach(function (el) {
      staggerObserver.observe(el);
    });
  }

  /* ─────────────────────────────────────────────
     COUNT-UP ANIMATION
     Elements: .count-up[data-target][data-suffix]
  ───────────────────────────────────────────── */
  function animateCounter(el) {
    var rawTarget = el.dataset.target || el.textContent.replace(/[^0-9.]/g, '');
    var target = parseFloat(rawTarget) || 0;
    var isDecimal = rawTarget.indexOf('.') !== -1;
    var suffix = el.dataset.suffix || '';
    var duration = 1800;
    var startTime = null;

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function tick(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var eased = easeOutCubic(progress);
      var current = target * eased;

      el.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = (isDecimal ? target.toFixed(1) : Math.floor(target)) + suffix;
      }
    }

    requestAnimationFrame(tick);
  }

  function initCountUp() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.count-up').forEach(animateCounter);
      return;
    }

    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.count-up').forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  /* ─────────────────────────────────────────────
     SCROLL-TO-TOP button
     #scrollTop — show/hide on scroll
  ───────────────────────────────────────────── */
  function initScrollTop() {
    var btn = document.getElementById('scrollTop');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 420) {
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
        btn.style.transform = 'translateY(0)';
      } else {
        btn.style.opacity = '0';
        btn.style.pointerEvents = 'none';
        btn.style.transform = 'translateY(8px)';
      }
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ─────────────────────────────────────────────
     HERO TITLE: word-by-word reveal (optional)
     Wraps each word in .hero-title in a span
     and reveals them sequentially
  ───────────────────────────────────────────── */
  function initHeroTitleReveal() {
    var heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    // Only on desktop where animation is smooth
    if (window.innerWidth < 768) return;

    // We don't restructure the title (it has HTML children),
    // Instead we do a simple fade-in-up on the whole title
    heroTitle.style.opacity = '0';
    heroTitle.style.transform = 'translateY(20px)';
    heroTitle.style.transition = 'opacity .7s ease .2s, transform .7s ease .2s';

    // Small delay to let page render
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
      });
    });

    // Cascade to subtitle, pillars, actions
    var cascade = [
      { selector: '.hero-subtitle', delay: 0.4 },
      { selector: '.hero-pillars',  delay: 0.6 },
      { selector: '.hero-actions',  delay: 0.75 }
    ];

    cascade.forEach(function (item) {
      var el = document.querySelector(item.selector);
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity .65s ease ' + item.delay + 's, transform .65s ease ' + item.delay + 's';

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      });
    });

    // Stat cards stagger
    document.querySelectorAll('.hero-right .stat-card').forEach(function (card, i) {
      card.style.opacity = '0';
      card.style.transform = 'translateX(20px)';
      card.style.transition = 'opacity .6s ease ' + (0.5 + i * 0.15) + 's, transform .6s ease ' + (0.5 + i * 0.15) + 's';

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          card.style.opacity = '1';
          card.style.transform = 'translateX(0)';
        });
      });
    });
  }

  /* ─────────────────────────────────────────────
     FORM VALIDATION (Bootstrap 5 style)
  ───────────────────────────────────────────── */
  function initFormValidation() {
    document.querySelectorAll('.needs-validation').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        if (!form.checkValidity()) {
          e.preventDefault();
          e.stopPropagation();
        }
        form.classList.add('was-validated');
      });

      form.querySelectorAll('.form-ctrl-b').forEach(function (input) {
        input.addEventListener('blur', function () {
          if (input.checkValidity && input.checkValidity()) {
            input.style.borderColor = 'var(--accent)';
          } else if (input.value) {
            input.style.borderColor = '#dc3545';
          }
        });

        input.addEventListener('input', function () {
          if (input.checkValidity && input.checkValidity()) {
            input.style.borderColor = 'var(--accent)';
          }
        });
      });
    });
  }

  /* ─────────────────────────────────────────────
     TOOLTIP INIT (Bootstrap 5)
  ───────────────────────────────────────────── */
  function initTooltips() {
    if (typeof bootstrap === 'undefined' || !bootstrap.Tooltip) return;
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (el) {
      new bootstrap.Tooltip(el);
    });
  }

  /* ─────────────────────────────────────────────
     BOOTSTRAP: dismiss any Bootstrap alerts
  ───────────────────────────────────────────── */
  function initAlertDismiss() {
    if (typeof bootstrap === 'undefined' || !bootstrap.Alert) return;
    document.querySelectorAll('.alert .btn-close').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var alert = btn.closest('.alert');
        if (alert) {
          alert.style.transition = 'opacity .3s ease';
          alert.style.opacity = '0';
          setTimeout(function () { alert.remove(); }, 300);
        }
      });
    });
  }

  /* ─────────────────────────────────────────────
     INIT ALL
  ───────────────────────────────────────────── */
  ready(function () {
    initNavbarScroll();
    initActiveNavLinks();
    initMobileNavClose();
    initLogoFallback();
    initScrollAnimations();
    initStaggerAnimations();
    initCountUp();
    initScrollTop();
    initHeroTitleReveal();
    initFormValidation();
    initTooltips();
    initAlertDismiss();
  });

})();
