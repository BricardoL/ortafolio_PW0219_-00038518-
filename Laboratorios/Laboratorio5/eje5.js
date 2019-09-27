function palindrome(palabra) {
  var loes = true;
  var original = palabra.split("");
  var invertido = palabra.split("").reverse();
  for (var i = 0; i < original.length; i++) {
    if (invertido[i] != original[i]) {
      console.log("no es palindrome");
      loes = false;
      break;
    }
  }
  if (loes == true) {
    console.log("es palindrome");
  }
}

palindrome("oso");
