function inject_css(selectors){
  var styleSheet = document.styleSheets[0];
  var index = styleSheet.cssRules ? styleSheet.cssRules.length : 0;
  styleSheet.insertRule(selectors + ' { display: none; }', index);
}

function hide_elements(selectors) {
  var elements = document.querySelectorAll(selectors)
  for (var j = 0; j < elements.length; j++){
    elements[j].style.display = "none";
  }
}

//config("selectors", hide_elements);
config("selectors", inject_css);
