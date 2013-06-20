
//Update status to let user know options were saved.
function notification_saved () {
    var status = document.getElementById("status");
    status.innerHTML = "Options Saved.";
    setTimeout(function() {
      status.innerHTML = "";
    }, 750);
}

function save_options() {
  set_config('selectors', document.getElementById('selectors').value, notification_saved);
};

function reset_to_defaults() {
  document.getElementById('selectors').value = DEFAULT_CONFIG['selectors'];
};

function init_listeners(){
  document.getElementById("options_form").addEventListener("submit", function(e) { e.preventDefault(); save_options()} , false);
  document.getElementById('save').addEventListener('click', save_options);
  document.getElementById('reset').addEventListener('click', reset_to_defaults);
}

function init() {
  init_listeners();
  config('selectors', function(v) { document.getElementById('selectors').value = v});
};

document.addEventListener('DOMContentLoaded', init);
