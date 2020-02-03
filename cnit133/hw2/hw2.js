
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

function process2() {
  var number1, number2, number3, number4, number5, n1, n2, n3, n4, n5, negcount, poscount, zerocount, sum;

  number1 = document.forms["myform"].elements["num1"].value;
  number2 = document.forms["myform"].elements["num2"].value;
  number3 = document.forms["myform"].elements["num3"].value;
  number4 = document.forms["myform"].elements["num4"].value;
  number5 = document.forms["myform"].elements["num5"].value;

  n1 = parseInt(number1);
  n2 = parseInt(number2);
  n3 = parseInt(number3);
  n4 = parseInt(number4);
  n5 = parseInt(number5);
  sum = n1 + n2 + n3 + n4 + n5;
  negcount = 0;
  poscount = 0;
  zerocount = 0;

// determine if n1 is negative, positive, or zero
  if (n1 < 0) {
    negcount += 1;
  } else if (n1 > 0) {
    poscount += 1;
  } else {
    zerocount += 1;
  }
// determine if n2 is negative, positive, or zero
  if (n2 < 0) {
    negcount += 1;
  } else if (n2 > 0) {
    poscount += 1;
  } else {
    zerocount += 1;
  }
// determine if n3 is negative, positive, or zero
  if (n3 < 0) {
    negcount += 1;
  } else if (n3 > 0) {
    poscount += 1;
  } else {
    zerocount += 1;
  }
// determine if n4 is negative, positive, or zero
  if (n4 < 0) {
    negcount += 1;
  } else if (n4 > 0) {
    poscount += 1;
  } else {
    zerocount += 1;
  }
// determine if n5 is negative, positive, or zero
  if (n5 < 0) {
    negcount += 1;
  } else if (n5 > 0) {
    poscount += 1;
  } else {
    zerocount += 1;
  }

  if(isNaN(sum)){
    document.forms["myform"].elements["result"].value = "Please make sure you have entered five inputs and each input is a number.";
  }
  else{
    document.forms["myform"].elements["result"].value = negcount + " negative numbers were inputted." + "\n" + zerocount + " zero numbers were inputted. " + "\n" + poscount + " positive numbers were inputted. ";
  }
};

function process3() {
  var number1;

  number1 = document.forms["myform"].elements["num1"].value;

  n1 = parseFloat(number1).toFixed(2);

  document.getElementById("europe").innerHTML = (n1 * 0.89).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " &euro;";
  document.getElementById("canada").innerHTML = (n1 * 1.31).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') +" &#36;";
  document.getElementById("hkg").innerHTML = (n1 * 7.80).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " &#36;";
  document.getElementById("japan").innerHTML = (n1 * 108.38).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " &yen;";
  document.getElementById("mexico").innerHTML = (n1 * 19.11).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " &#36;";
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
