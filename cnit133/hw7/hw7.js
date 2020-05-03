function changeBodyBg(color){
    document.body.style.background = color;
}

function changeFontSz(size){
    document.body.style.fontSize = size;
}


function changeFontFamily() {
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  document.body.style.fontFamily = selectedValue;
}
