/**
 * Reliable animation fix for static local files
 * Ensures fade-up / fade-in elements animate correctly
 */
(function () {
  function revealVisible() {
    document.querySelectorAll('.fade-up, .fade-in').forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40) {
        el.classList.add('visible');
      }
    });

    // Stagger parents
    document.querySelectorAll('.stagger-parent').forEach(function (parent) {
      var rect = parent.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40) {
        var children = parent.querySelectorAll('.fade-up');
        children.forEach(function (child, i) {
          setTimeout(function () {
            child.classList.add('visible');
          }, i * 110);
        });
      }
    });
  }

  // Run on scroll
  window.addEventListener('scroll', revealVisible, { passive: true });

  // Run on load (catches elements already in viewport)
  window.addEventListener('load', function () {
    revealVisible();
    // Run again after short delay to catch late-rendered elements
    setTimeout(revealVisible, 300);
  });
})();
