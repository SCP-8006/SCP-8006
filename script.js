function checkPassword() {
 var password = document.getElementById("password").value;
 if (password == "SafeEuclidKeterThaumiel") {
  window.location.href = "page2.html";
 } else {
  alert("Wrong Password!");
 }
}
