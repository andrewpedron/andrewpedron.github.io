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

function compoundFive() {
  var tbody = document.createElement('tbody'), tr, td, row, cell, amount = 1000;
  for (row = 1; row <= 10; row++) {
      amount *= 1.05;
      tr = document.createElement('tr');
      for (cell = 0; cell <= 2; cell++) {
          td = document.createElement('td');
          if(cell == 0) {
            td.innerHTML = row;
          }
          else if(cell == 1){
            td.innerHTML = '5%';
          }
          else{
            td.innerHTML = amount.toLocaleString("en", {style: "currency", currency: "USD"});
          }
          tr.appendChild(td);
      }
      tbody.appendChild(tr);
  }
  document.getElementById('compound').appendChild(tbody);
}

function compoundSix() {
  var tbody = document.createElement('tbody'), tr, td, row, cell, amount = 1000;
  for (row = 1; row <= 10; row++) {
      amount *= 1.06;
      tr = document.createElement('tr');
      for (cell = 0; cell <= 2; cell++) {
          td = document.createElement('td');
          if(cell == 0) {
            td.innerHTML = row;
          }
          else if(cell == 1){
            td.innerHTML = '6%';
          }
          else{
            td.innerHTML = amount.toLocaleString("en", {style: "currency", currency: "USD"});
          }
          tr.appendChild(td);
      }
      tbody.appendChild(tr);
  }
  document.getElementById('compound').appendChild(tbody);
}

function compoundSeven() {
  var tbody = document.createElement('tbody'), tr, td, row, cell, amount = 1000;
  for (row = 1; row <= 10; row++) {
      amount *= 1.07;
      tr = document.createElement('tr');
      for (cell = 0; cell <= 2; cell++) {
          td = document.createElement('td');
          if(cell == 0) {
            td.innerHTML = row;
          }
          else if(cell == 1){
            td.innerHTML = '7%';
          }
          else{
            td.innerHTML = amount.toLocaleString("en", {style: "currency", currency: "USD"});
          }
          tr.appendChild(td);
      }
      tbody.appendChild(tr);
  }
  document.getElementById('compound').appendChild(tbody);
}

function start() {
  everyFourth();
  everyThird();
  compoundFive();
  compoundSix();
  compoundSeven();
}

function start2() {
  compoundFive();
  compoundSix();
  compoundSeven();
}


$(document).ready(function(){

  $( "#draggable" ).draggable();

});
