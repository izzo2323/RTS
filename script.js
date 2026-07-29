(function () {
  var overlay = document.getElementById('consult-modal');
  var form = document.getElementById('consult-form');
  var status = document.getElementById('consult-status');
  var openBtns = document.querySelectorAll('[data-open-consult]');
  var closeBtns = document.querySelectorAll('[data-close-consult]');
  var lastFocused = null;

  function openModal() {
    lastFocused = document.activeElement;
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    var firstField = document.getElementById('cf-name');
    if (firstField) firstField.focus();
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  openBtns.forEach(function (btn) {
    btn.addEventListener('click', openModal);
  });
  closeBtns.forEach(function (btn) {
    btn.addEventListener('click', closeModal);
  });
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !overlay.hidden) closeModal();
  });

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
          status.textContent = "Thanks — I'll be in touch within one business day.";
          status.className = 'form-status success';
          form.reset();
          setTimeout(closeModal, 2200);
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
})();
