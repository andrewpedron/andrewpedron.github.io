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
