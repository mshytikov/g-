DEFAULT_CONFIG = {
  'selectors' : "div.gb_ga, div.gb_ja, div.gb_ka, #sb-button-notify"
};

function config(key, callback){
  chrome.storage.sync.get(DEFAULT_CONFIG, function(object) {
    callback(object[key]);
  });
};

function set_config(key, value, saved_callback){
  var item = {};
  item[key] = value;
  chrome.storage.sync.set(item, saved_callback);
};

function config_reset(){
  chrome.storage.sync.clear();
}

function array_config(key, callback){
  config(key, function(v){
    var value = v.replace(/\s/g,'').split(",");
    callback(value);
  });
}

