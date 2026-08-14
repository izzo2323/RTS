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
