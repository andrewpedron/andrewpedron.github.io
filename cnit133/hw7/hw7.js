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

$(document).ready(function () {
    $(".hoverli").hover(
  function () {
     $('ul.file_menu').slideDown('medium');
  },
  function () {
     $('ul.file_menu').slideUp('medium');
  }
);

     $(".file_menu li").hover(
  function () {
     $(this).children("ul").slideDown('medium');
  },
  function () {
    $(this).children("ul").slideUp('medium');
  }
);
});
