function everyFourth() {
  let number, prod = 1, sum = 0;
  for (number = 5; number <= 21; number+=4) {
    prod = number * prod;
    sum = number + sum;
  }
  document.getElementById("everyFourthProd").innerHTML = prod;
  document.getElementById("everyFourthSum").innerHTML = sum;
}

function everyThird() {
  let number = 3, prod = 1, sum = 0;
  while (number <= 21) {
    prod = number * prod;
    sum = number + sum;
    number += 3;
  }
  document.getElementById("everyThirdProd").innerHTML = prod;
  document.getElementById("everyThirdSum").innerHTML = sum;
}

function start() {
  everyFourth();
  everyThird();
}


$(document).ready(function(){

  $( "#draggable" ).draggable();

});
