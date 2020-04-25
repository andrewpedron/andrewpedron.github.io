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
