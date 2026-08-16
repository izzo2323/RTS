var demoAlertKey = 'rts-demo-alert-dismissed:' + location.pathname.replace(/[^/]*$/, '');
if (sessionStorage.getItem(demoAlertKey)) {
  var el = document.getElementById('demoAlert');
  if (el) el.hidden = true;
}
