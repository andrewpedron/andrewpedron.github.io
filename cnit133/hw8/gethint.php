<?php
// Array with names
$a[] = "Aaron";
$a[] = "Anna";
$a[] = "Andrew";
$a[] = "Blake";
$a[] = "Brittany";
$a[] = "Charles";
$a[] = "Cinderella";
$a[] = "Cindy";
$a[] = "David";
$a[] = "Diana";
$a[] = "Eva";
$a[] = "Fiona";
$a[] = "Frank";
$a[] = "Gordon";
$a[] = "Gunda";
$a[] = "Hege";
$a[] = "Ike";
$a[] = "Inga";
$a[] = "Johanna";
$a[] = "Kitty";
$a[] = "Larry";
$a[] = "Linda";
$a[] = "Nancy";
$a[] = "Nina";
$a[] = "Ophelia";
$a[] = "Petunia";
$a[] = "Amanda";
$a[] = "Raquel";
$a[] = "Doris";
$a[] = "Eve";
$a[] = "Evita";
$a[] = "Shane";
$a[] = "Sunniva";
$a[] = "Taylor";
$a[] = "Tove";
$a[] = "Unni";
$a[] = "Violet";
$a[] = "Liza";
$a[] = "Elizabeth";
$a[] = "Ellen";
$a[] = "Wenche";
$a[] = "Vicky";
$a[] = "Vince";


// get the q parameter from URL
$q = $_REQUEST["q"];

$hint = "";

// lookup all hints from array if $q is different from ""
if ($q !== "") {
  $q = strtolower($q);
  $len=strlen($q);
  foreach($a as $name) {
    if (stristr($q, substr($name, 0, $len))) {
      if ($hint === "") {
        $hint = $name;
      } else {
        $hint .= ", $name";
      }
    }
  }
}

// Output "no suggestion" if no hint was found or output correct values
echo $hint === "" ? "no suggestion" : $hint;
?>
