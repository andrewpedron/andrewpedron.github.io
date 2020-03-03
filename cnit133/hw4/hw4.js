
function process() {
  var number1, number2, n1, n2, sum, avg, product, min, max;

  number1 = document.forms["myform"].elements["num1"].value;
  number2 = document.forms["myform"].elements["num2"].value;
  number3 = document.forms["myform"].elements["num3"].value;

  n1 = parseInt(number1);
  n2 = parseInt(number2);
  n3 = parseInt(number3);
  sum = n1 + n2 + n3;
  avg = ((n1 + n2 + n3)/3).toFixed(2);
  product = n1 * n2 * n3;
  min = Math.min(n1,n2,n3);
  max = Math.max(n1,n2,n3);
  if(isNaN(sum)){
    document.forms["myform"].elements["result"].value = "Please make sure you have entered three inputs and each input is a number.";
  }
  else{
    document.forms["myform"].elements["result"].value = "The inputted numbers were " + n1 + ", " + n2 + ", " + n3 + "\nThe sum of the integers is " + sum + "\nThe average of the integers is " + avg + "\nThe product of the integers is " + product + "\nThe smallest of the integers is " + min + "\nThe largest of the integers is " + max;
  }
};


$(document).ready(function(){

  $("#fadeOut").click(function(){
    $("#textFade").fadeOut("slow");
  });

  $("#fadeIn").click(function(){
    $("#textFade").fadeIn("slow");
  });

  $('#textfield').focus(function() {
    $(this).css('background-color','#FF6347');
  });

  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });

});
