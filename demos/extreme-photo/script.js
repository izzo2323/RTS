(function () {
  var buttons = document.querySelectorAll('.filter-bar button');
  var items = document.querySelectorAll('.masonry .m-item');
  if (buttons.length) {
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var cat = btn.dataset.filter;
        items.forEach(function (item) {
          var show = cat === 'all' || item.dataset.category === cat;
          item.classList.toggle('is-hidden', !show);
        });
      });
    });
  }
})();

(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('nav.links');
  if (!toggle || !links) return;

  function closeMenu() {
    toggle.classList.remove('is-open');
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    var isOpen = links.classList.toggle('is-open');
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 780) closeMenu();
  });
})();


(function () {
  var overlay = document.getElementById('demoAlert');
  if (!overlay) return;
  var closeBtn = document.getElementById('demoAlertClose');
  function dismiss() { overlay.hidden = true; }
  closeBtn.addEventListener('click', dismiss);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !overlay.hidden) dismiss();
  });
})();
