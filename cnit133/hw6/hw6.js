function process() {
  var num;
  num = document.forms["myform"].elements["userData1"].value;
  dec = (num.split('.')[1] || []).length;
  round = Math.round(num);
  sqrt = Math.round(Math.sqrt(num));
  tenth = (Math.round(num * 10) / 10).toFixed(1)
  hundredth = (Math.round(num * 100) / 100).toFixed(2)
  thousandth = (Math.round(num * 1000) / 1000).toFixed(3)

  if(dec >= 4) {
        document.forms["myform"].elements["result"].value = num + " is the number you inputted.\n" + round + " is the nearest integer.\n" + sqrt + " is the square root rounded to the nearest integer.\n" + tenth + " is the number rounded to the nearest tenth.\n" + hundredth + " is the number rounded to the nearest hundredth.\n" + thousandth + " is the number rounded to the nearest thousandth.\n";
      }
      else {
        document.forms["myform"].elements["result"].value = "Your input is not a floating-point number with at least four decimals.";
      }
}

function process2() {
  var count = 0;

  var key = document.getElementById("key").value.toLowerCase().charAt(0);
  var key = key.toLowerCase();

  var stringToSearch = document.getElementById("input").value;
  console.log(stringToSearch);
  var stringToSearch = stringToSearch.toLowerCase();


  for (i = 0; i < stringToSearch.length; i++) {

    if (stringToSearch.charAt(i) == key)
      count++;
  }

  if (count == 0){
    document.getElementById("output").value = key + " not found.";
  } else {
    document.getElementById("output").value = count + " occurrence(s) of " + key + " found.";
  }
}

function process3() {
  var input;
  input = document.forms["myform"].elements["phoneNumber"].value;
  input = input.toString()
  splitNumber = input.split(")")
  areaCode = splitNumber[0].substring(1)
  firstToken = splitNumber[1].split("-")[0].substring(1)
  secondToken = splitNumber[1].split("-")[1]

  document.getElementById("output1").value = areaCode;
  document.getElementById("output2").value = firstToken;
  document.getElementById("output3").value = secondToken;


}


$(document).ready(function(){
  $('input[name="phoneNumber"]').mask('(000) 000-0000');
});
