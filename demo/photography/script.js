(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.links');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

(function () {
  var buttons = document.querySelectorAll('.filter-bar button');
  var items = document.querySelectorAll('.masonry .m-item');
  if (!buttons.length) return;

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
})();
