function validate_checkboxes() {

  if ($('input[type=checkbox]:checked').length == 0) {
    // alert ( "ERROR! You need to select a checkbox" );
    document.getElementById("box1").setAttribute('required');
    document.getElementById("box2").setAttribute('required');
  } else {
    document.getElementById("box1").removeAttribute('required');
    document.getElementById("box2").removeAttribute('required');
  }
}

function goToNewPage(myForm) {
  var mydest = myForm.destList.options[myForm.destList.selectedIndex].value;
  window.location = mydest;
}

function process() {
  var stateData = [
    ['al', 'alabama', 'Montgomery', '4,887,871'],
    ['ak', 'alaska', 'Juneau', '737,438'],
    ['az', 'arizona', 'Phoenix', '7,171,646'],
    ['ar', 'arkansas', 'Little Rock', '3,010,825'],
    ['ca', 'california', 'Sacramento', '39,557,045'],
    ['co', 'colorado', 'denver', '5,694,564'],
  ];
  var i;

  userDataRaw = document.forms["myform"].elements["userData1"].value;
  userData = userDataRaw.toString().toLowerCase();
  userDataLength = userData.length;

  for (i = 0; i < stateData.length; i++) {
    if((userData == stateData[i][0]) || (userData == stateData[i][1])) {
      document.forms["myform"].elements["result"].value = "Here is the information you requested:\n" + "State Abbreviation: " + stateData[i][0].toUpperCase() + "\n"+ "State Name: " + stateData[i][1].charAt(0).toUpperCase() + stateData[i][1].slice(1) + "\n"+ "Capital: " + stateData[i][2] + "\n"+ "Population: " + stateData[i][3] + "\n";
      break;
    }
    else {
      document.forms["myform"].elements["result"].value = "Your input did not match any of our state records. Please submit a valid state name or state abbreviation.";
    }
  }
}



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
