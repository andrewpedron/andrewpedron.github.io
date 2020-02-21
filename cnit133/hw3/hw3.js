function process() {
  var number1, number2, number3, number4, hwAvg, midExam, finalExam, participation, sum, avg;

  number1 = document.forms["myform"].elements["num1"].value;
  number2 = document.forms["myform"].elements["num2"].value;
  number3 = document.forms["myform"].elements["num3"].value;
  number4 = document.forms["myform"].elements["num4"].value;


  hwAvg = parseInt(number1);
  midExam = parseInt(number2);
  finalExam = parseInt(number3);
  participation = parseInt(number4);
  // sum = hwAvg + midExam + finalExam + participation;
  avg = ((hwAvg*.5)+(midExam*.2)+(finalExam*.2)+(participation*.1)).toFixed(0);

  if(isNaN(avg)){
    document.forms["myform"].elements["result"].value = "Please make sure you have entered four inputs and each input is a number between 0 and 100.";
  }
  else if (hwAvg > 100 || midExam > 100 || finalExam > 100 || participation > 100 || hwAvg < 0 || midExam < 0 || finalExam < 0 || participation < 0){
    document.forms["myform"].elements["result"].value = "Please make sure you have entered four inputs and each input is a number between 0 and 100.";
  }
  else if (avg>=90){
    document.forms["myform"].elements["result"].value = "The student received an A.";
  }
  else if (avg>=80){
    document.forms["myform"].elements["result"].value = "The student received a B.";
  }
  else if (avg>=70){
    document.forms["myform"].elements["result"].value = "The student received a C.";
  }
  else {
    document.forms["myform"].elements["result"].value = "Student must retake the course.";
  }

}

function buttonActive() {
  var input1, input2, input3, input4;

  input1 = document.getElementById("num1").value;
  input2 = document.getElementById("num2").value;
  input3 = document.getElementById("num3").value;
  input4 = document.getElementById("num4").value;

// Check to make sure each of the four items has an input and >= 0 before allowing user to submit
  if(input1 == null || input2 == null || input3 == null || input4 == null) {
      document.getElementById('submitA').disabled = true;
  } else if (input1 < 0 || input2 < 0 || input3 < 0 || input4 < 0){
      document.getElementById('submitA').disabled = true;
  } else {
    document.getElementById('submitA').disabled = false;
  }

}

function process2() {
  var number1, number2, number3, number4, item1_total, item2_total, item3_total, item4_total, sum, earnings;

  number1 = document.forms["myform"].elements["num1"].value;
  number2 = document.forms["myform"].elements["num2"].value;
  number3 = document.forms["myform"].elements["num3"].value;
  number4 = document.forms["myform"].elements["num4"].value;


  item1_total = parseInt(number1)*239.99;
  item2_total = parseInt(number2)*129.75;
  item3_total = parseInt(number3)*99.95;
  item4_total = parseInt(number4)*350.89;
  sum = (item1_total + item2_total + item3_total + item4_total).toFixed(2);
  earnings = ((sum*.09)+200).toFixed(2);

  document.getElementById("item1").innerHTML = number1;
  document.getElementById("total1").innerHTML = "$" + item1_total.toFixed(2);
  document.getElementById("item2").innerHTML = number2;
  document.getElementById("total2").innerHTML = "$" + item2_total.toFixed(2);
  document.getElementById("item3").innerHTML = number3;
  document.getElementById("total3").innerHTML = "$" + item3_total.toFixed(2);
  document.getElementById("item4").innerHTML = number4;
  document.getElementById("total4").innerHTML = "$" + item4_total.toFixed(2);
  document.getElementById("total").innerHTML = "$" + sum;
  document.getElementById("weekly").innerHTML = "$" + earnings;

}

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

function toCelsius() {
  var number1, celsius;

  number1 = document.forms["myform"].elements["num1"].value;
  celsius = ((number1 - 32) / 1.8).toFixed(0);

  document.forms["myform"].elements["result"].value = number1 + " Fahrenheit = " + celsius + " Celsius.";

}

function toFahrenheit() {
  var number1, fahr;

  number1 = document.forms["myform"].elements["num1"].value;
  fahr = ((number1 * 1.8) + 32).toFixed(0);

  document.forms["myform"].elements["result"].value = number1 + " Celsius = " + fahr + " Fahrenheit.";

}

var random1, random2;


function randomGen() {

  random1 = Math.floor(Math.random() * 10);
  random2 = Math.floor(Math.random() * 10);
  document.getElementById("num1").innerHTML = "How much is " + random1 + " times " + random2 + "?";

}

function checkAnswer() {
  var input1;

  input1 = document.getElementById("product1").value;

  if(input1 == (random1 * random2)) {
      document.forms["myform"].elements["result"].value = "Very Good!";
      randomGen();
      document.getElementById("product1").value = "";

  } else {
      document.forms["myform"].elements["result"].value = "No. Please try again.";
      document.getElementById("product1").value = "";
    }

}
