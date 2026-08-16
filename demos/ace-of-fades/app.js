(function () {
  var header = document.querySelector('header.site');
  var toggle = header && header.querySelector('.menu-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', function () {
    var open = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.textContent = open ? '✕' : '☰';
  });
  document.addEventListener('click', function (e) {
    if (header.classList.contains('nav-open') && !header.contains(e.target)) {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    }
  });
})();

(function () {
  var overlay = document.getElementById('demoAlert');
  if (!overlay || overlay.hidden) return;
  var closeBtn = document.getElementById('demoAlertClose');
  function dismiss() {
    overlay.hidden = true;
    sessionStorage.setItem('rts-demo-alert-dismissed:' + location.pathname.replace(/[^/]*$/, ''), '1');
  }
  closeBtn.addEventListener('click', dismiss);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) dismiss();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !overlay.hidden) dismiss();
  });
  closeBtn.focus();
})();
