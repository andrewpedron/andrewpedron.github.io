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
  else if (hwAvg > 100 || midExam > 100 || finalExam > 100 || participation > 100){
    document.forms["myform"].elements["result"].value = "Please make sure you have entered four inputs and each input is a number between 0 and 100.";
  }
  else if (hwAvg < 0 || midExam < 0 || finalExam < 0 || participation < 0){
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
};
