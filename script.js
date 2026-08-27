(function () {
  var form = document.getElementById('consult-form');
  var status = document.getElementById('consult-status');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var submitBtn = form.querySelector('button[type="submit"]');
      status.textContent = 'Sending…';
      status.className = 'form-status';
      submitBtn.disabled = true;

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form)))
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data.success) {
            status.textContent = 'Your request has been sent. I will reach out soon.';
            status.className = 'form-status success';
            form.reset();
          } else {
            status.textContent = 'Something went wrong sending that. Please email nickrizzo77277@gmail.com directly.';
            status.className = 'form-status error';
          }
        })
        .catch(function () {
          status.textContent = 'Something went wrong sending that. Please email nickrizzo77277@gmail.com directly.';
          status.className = 'form-status error';
        })
        .finally(function () {
          submitBtn.disabled = false;
        });
    });
  }

  var mobileToggle = document.getElementById('mobile-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggle && mobileMenu) {
    var closeMobileMenu = function () {
      mobileMenu.hidden = true;
      mobileToggle.setAttribute('aria-expanded', 'false');
    };
    mobileToggle.addEventListener('click', function () {
      var isOpen = !mobileMenu.hidden;
      mobileMenu.hidden = isOpen;
      mobileToggle.setAttribute('aria-expanded', String(!isOpen));
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMobileMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !mobileMenu.hidden) closeMobileMenu();
    });
  }
})();
