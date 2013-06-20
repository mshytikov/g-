function hide_elements(selectors) {
  console.log(selectors);
  for (var i = 0; i < selectors.length; i++) {
    var elements = document.querySelectorAll(selectors[i])
    for (var j = 0; j < elements.length; j++){
      elements[j].style.visibility = "hidden";
    }
  }
}

array_config("selectors", hide_elements);
