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

    var heroLogo = nav.querySelector('.nav-logo[data-logo-hero][data-logo-scrolled]');

    function syncHeroLogo() {
      if (!heroLogo) return;

      var isMobile = window.innerWidth <= 991;
      var isScrolled = nav.classList.contains('scrolled');
      var heroSrc = heroLogo.getAttribute('data-logo-hero');
      var scrolledSrc = heroLogo.getAttribute('data-logo-scrolled');
      var mobileSrc = heroLogo.getAttribute('data-logo-mobile') || scrolledSrc;

      var nextSrc = (isMobile || isScrolled) ? mobileSrc : heroSrc;
      if (nextSrc && heroLogo.getAttribute('src') !== nextSrc) {
        heroLogo.setAttribute('src', nextSrc);
      }
    }

    function onScroll() {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }

      syncHeroLogo();
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', syncHeroLogo);
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
     MOBILE: fix Services dropdown so tap navigates
     On mobile (<992px) the dropdown toggle blocks
     navigation — remove it so Services link works.
  ───────────────────────────────────────────── */
  function initMobileServicesLink() {
    if (window.innerWidth >= 992) return;
    var servicesToggle = document.getElementById('servicesDropdown');
    if (!servicesToggle) return;
    servicesToggle.removeAttribute('data-bs-toggle');
    servicesToggle.removeAttribute('role');
    servicesToggle.classList.remove('dropdown-toggle');
    // Also hide the dropdown caret via style
    servicesToggle.style.setProperty('--bs-caret-width', '0');
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

    // Allow closing the open mobile menu with Escape key.
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;

      var collapse = document.getElementById('navbarNav');
      if (!collapse || !collapse.classList.contains('show')) return;

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
      threshold: 0.1,
      rootMargin: '0px 0px -32px 0px'
    });

    document.querySelectorAll('.fade-up, .fade-in').forEach(function (el) {
      // Skip elements inside stagger-parent (handled separately)
      if (!el.closest('.stagger-parent')) {
        fadeObserver.observe(el);
      }
    });
  }

  /* ─────────────────────────────────────────────
     AUTO-REVEAL: apply fade-in to top-level sections
     for consistent motion across all pages
  ───────────────────────────────────────────── */
  function initAutoRevealSections() {
    var main = document.querySelector('main');
    if (!main) return;

    Array.prototype.forEach.call(main.children, function (node, idx) {
      if (!node || !node.classList) return;

      var isSection = node.tagName === 'SECTION' || node.classList.contains('trust-strip');
      var alreadyAnimated = node.classList.contains('fade-up') || node.classList.contains('fade-in');

      if (!isSection || alreadyAnimated) return;

      // Keep first/top hero section instantly visible.
      if (idx === 0 || node.classList.contains('hero-section')) {
        node.classList.add('visible');
        return;
      }

      node.classList.add('fade-in');
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
            }, i * 190);
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
     HERO SLIDESHOW: crossfade hero backgrounds
  ───────────────────────────────────────────── */
  function initHeroSlideshow() {
    var hero = document.querySelector('.hero-section.hero-slider');
    if (!hero) return;

    var slides = hero.querySelectorAll('.hero-slide');
    if (slides.length < 2) return;

    var currentLabel = hero.querySelector('.hero-slide-current');
    var totalLabel = hero.querySelector('.hero-slide-total');
    var titleText = hero.querySelector('.hero-title-text');
    var subtitleText = hero.querySelector('.hero-subtitle-text');
    var prevButton = hero.querySelector('[data-hero-slide="prev"]');
    var nextButton = hero.querySelector('[data-hero-slide="next"]');
    var activeIndex = 0;
    var interval = parseInt(hero.getAttribute('data-hero-interval'), 10) || 5600;
    var hoverExtraDelay = 3000;
    var timer = null;
    var typingTimer = null;
    var typingToken = 0;
    var isHovering = false;
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function updateCounter(index) {
      if (currentLabel) {
        currentLabel.textContent = String(index + 1).padStart(2, '0');
      }

      if (totalLabel) {
        totalLabel.textContent = String(slides.length).padStart(2, '0');
      }
    }

    function updateTitle(index) {
      if (!titleText) return;

      var nextTitle = slides[index].getAttribute('data-hero-title') || '';
      if (typingTimer) {
        window.clearTimeout(typingTimer);
        typingTimer = null;
      }

      typingToken += 1;
      var token = typingToken;

      titleText.classList.remove('is-visible');
      titleText.classList.remove('is-typing');

      window.setTimeout(function () {
        if (token !== typingToken) return;

        if (reduceMotion) {
          titleText.textContent = nextTitle;
          titleText.classList.add('is-visible');
          return;
        }

        var i = 0;
        titleText.textContent = '';
        titleText.classList.add('is-visible');
        titleText.classList.add('is-typing');

        (function typeNext() {
          if (token !== typingToken) return;

          i += 1;
          titleText.textContent = nextTitle.slice(0, i);

          if (i < nextTitle.length) {
            typingTimer = window.setTimeout(typeNext, 42);
          } else {
            titleText.classList.remove('is-typing');
            typingTimer = null;
          }
        })();

        titleText.classList.add('is-visible');
      }, 120);
    }

    function updateSubtitle(index) {
      if (!subtitleText) return;

      var nextSubtitle = slides[index].getAttribute('data-hero-subtitle') || '';
      subtitleText.classList.remove('is-visible');
      subtitleText.classList.remove('is-rising');

      window.setTimeout(function () {
        subtitleText.textContent = nextSubtitle;
        subtitleText.classList.add('is-rising');
        subtitleText.classList.add('is-visible');
      }, 200);
    }

    function showSlide(index) {
      slides[activeIndex].classList.remove('is-active');
      slides[index].classList.add('is-active');
      activeIndex = index;
      updateCounter(activeIndex);
      updateTitle(activeIndex);
      updateSubtitle(activeIndex);
    }

    function nextSlide() {
      showSlide((activeIndex + 1) % slides.length);
    }

    function previousSlide() {
      showSlide((activeIndex - 1 + slides.length) % slides.length);
    }

    function restartTimer() {
      if (reduceMotion) return;
      if (timer) {
        window.clearInterval(timer);
      }
      timer = window.setInterval(nextSlide, interval);
    }

    function restartTimerWithHoverDelay() {
      if (reduceMotion) return;
      if (timer) {
        window.clearInterval(timer);
      }
      timer = window.setInterval(nextSlide, interval + hoverExtraDelay);
    }

    function syncTimerWithHoverState() {
      if (isHovering) {
        restartTimerWithHoverDelay();
      } else {
        restartTimer();
      }
    }

    updateCounter(activeIndex);
    updateTitle(activeIndex);
    updateSubtitle(activeIndex);

    if (prevButton) {
      prevButton.addEventListener('click', function () {
        previousSlide();
        syncTimerWithHoverState();
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', function () {
        nextSlide();
        syncTimerWithHoverState();
      });
    }

    hero.addEventListener('mouseenter', function () {
      isHovering = true;
      restartTimerWithHoverDelay();
    });

    hero.addEventListener('mouseleave', function () {
      isHovering = false;
      restartTimer();
    });

    if (reduceMotion) return;

    timer = window.setInterval(nextSlide, interval);

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        if (timer) {
          window.clearInterval(timer);
        }
        timer = null;
      } else if (!timer) {
        syncTimerWithHoverState();
      }
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
    heroTitle.style.transition = 'opacity .68s cubic-bezier(.22,.61,.36,1) .18s, transform .68s cubic-bezier(.22,.61,.36,1) .18s';

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
      el.style.transition = 'opacity .62s cubic-bezier(.22,.61,.36,1) ' + item.delay + 's, transform .62s cubic-bezier(.22,.61,.36,1) ' + item.delay + 's';

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
      card.style.transition = 'opacity .6s cubic-bezier(.22,.61,.36,1) ' + (0.45 + i * 0.16) + 's, transform .6s cubic-bezier(.22,.61,.36,1) ' + (0.45 + i * 0.16) + 's';

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          card.style.opacity = '1';
          card.style.transform = 'translateX(0)';
        });
      });
    });
  }

  /* ─────────────────────────────────────────────
     PREMIUM MOTION: hero parallax + magnetic buttons
  ───────────────────────────────────────────── */
  function initPremiumMotion() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    var hero = document.querySelector('.hero-section');
    if (hero) {
      var heroContent = hero.querySelector('.hero-content');
      var heroStats = hero.querySelector('.hero-right');
      var heroWatermark = hero.querySelector('.hero-watermark');
      var rafId = null;
      var targetX = 0;
      var targetY = 0;

      function applyHeroTilt() {
        if (heroContent) {
          heroContent.style.transform = 'translate3d(' + (targetX * -8) + 'px,' + (targetY * -7) + 'px,0)';
        }
        if (heroStats) {
          heroStats.style.transform = 'translate3d(' + (targetX * 9) + 'px,' + (targetY * 8) + 'px,0)';
        }
        if (heroWatermark) {
          heroWatermark.style.transform = 'translate3d(' + (targetX * 18) + 'px,' + (targetY * 12) + 'px,0)';
        }
        rafId = null;
      }

      hero.addEventListener('mousemove', function (e) {
        var rect = hero.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width;
        var y = (e.clientY - rect.top) / rect.height;

        targetX = (x - 0.5) * 2;
        targetY = (y - 0.5) * 2;

        if (!rafId) {
          rafId = requestAnimationFrame(applyHeroTilt);
        }
      });

      hero.addEventListener('mouseleave', function () {
        targetX = 0;
        targetY = 0;
        if (!rafId) {
          rafId = requestAnimationFrame(applyHeroTilt);
        }
      });

      function parallaxOnScroll() {
        var rect = hero.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;

        var progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        var yPos = 44 + (progress * 12);
        hero.style.backgroundPosition = '50% ' + yPos + '%';
      }

      window.addEventListener('scroll', parallaxOnScroll, { passive: true });
      parallaxOnScroll();
    }

    document.querySelectorAll('.btn-pb, .btn-ob, .btn-od').forEach(function (btn) {
      var rafBtn = null;
      var bx = 0;
      var by = 0;

      function applyBtnDrift() {
        btn.style.transform = 'translate3d(' + bx + 'px,' + by + 'px,0)';
        rafBtn = null;
      }

      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width;
        var y = (e.clientY - rect.top) / rect.height;
        bx = (x - 0.5) * 6;
        by = (y - 0.5) * 5;

        if (!rafBtn) {
          rafBtn = requestAnimationFrame(applyBtnDrift);
        }
      });

      btn.addEventListener('mouseleave', function () {
        bx = 0;
        by = 0;
        if (!rafBtn) {
          rafBtn = requestAnimationFrame(applyBtnDrift);
        }
      });
    });
  }

  /* ─────────────────────────────────────────────
     IMAGE PARALLAX: scroll-driven media movement (STRONG)
  ───────────────────────────────────────────── */
  function initImageParallax() {
    var items = Array.prototype.slice.call(document.querySelectorAll('.parallax-img[data-parallax-speed]'));
    if (!items.length) return;

    var ticking = false;

    function updateParallax() {
      var vh = window.innerHeight || document.documentElement.clientHeight;

      items.forEach(function (img) {
        var rect = img.getBoundingClientRect();
        if (rect.bottom < -80 || rect.top > vh + 80) return;

        var speed = parseFloat(img.getAttribute('data-parallax-speed'));
        if (isNaN(speed)) speed = 0.18;

        var progress = (vh - rect.top) / (vh + rect.height);
        var centered = (progress - 0.5) * 2;
        var shift = centered * (300 * speed); // Strong: 300px multiplier

        img.style.transform = 'translate3d(0,' + shift.toFixed(2) + 'px,0) scale(1.12)';
      });

      ticking = false;
    }

    function requestTick() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateParallax);
    }

    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick);
    requestTick();
  }

  /* ─────────────────────────────────────────────
     BACKGROUND PARALLAX: sections with background images (STRONG)
  ───────────────────────────────────────────── */
  function initBackgroundParallax() {
    var sections = Array.prototype.slice.call(document.querySelectorAll('.parallax-bg[data-parallax-speed]'));
    var layers = Array.prototype.slice.call(document.querySelectorAll('.parallax-layer[data-parallax-speed]'));
    if (!sections.length && !layers.length) return;

    var ticking = false;

    function updateBackgroundParallax() {
      var vh = window.innerHeight || document.documentElement.clientHeight;

      sections.forEach(function (section) {
        var rect = section.getBoundingClientRect();
        if (rect.bottom < -80 || rect.top > vh + 80) return;

        var speed = parseFloat(section.getAttribute('data-parallax-speed'));
        if (isNaN(speed)) speed = 0.18;

        var progress = (vh - rect.top) / (vh + rect.height);
        var centered = (progress - 0.5) * 2;
        var yShift = centered * (350 * speed); // Strong: 350px multiplier

        section.style.backgroundPosition = '50% calc(50% + ' + yShift.toFixed(1) + 'px)';
      });

      layers.forEach(function (layer) {
        var rect = layer.getBoundingClientRect();
        if (rect.bottom < -120 || rect.top > vh + 120) return;

        var speed = parseFloat(layer.getAttribute('data-parallax-speed'));
        if (isNaN(speed)) speed = 0.3;

        var progress = (vh - rect.top) / (vh + rect.height);
        var centered = (progress - 0.5) * 2;
        var yShift = centered * (320 * speed); // Strong: 320px multiplier

        layer.style.transform = 'translate3d(0,' + yShift.toFixed(1) + 'px,0) scale(1.15)'; // Moderate scale
      });

      ticking = false;
    }

    function requestTick() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateBackgroundParallax);
    }

    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick);
    requestTick();
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
    document.documentElement.classList.add('js-enhanced');
    initNavbarScroll();
    initActiveNavLinks();
    initMobileServicesLink();
    initMobileNavClose();
    initAutoRevealSections();
    initLogoFallback();
    initScrollAnimations();
    initStaggerAnimations();
    initCountUp();
    initScrollTop();
    initHeroSlideshow();
    initHeroTitleReveal();
    initPremiumMotion();
    initImageParallax();
    initBackgroundParallax();
    initFormValidation();
    initTooltips();
    initAlertDismiss();
  });

})();
