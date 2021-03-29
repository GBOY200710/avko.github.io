function localAcc() {
  var username = document.getElementById("signUser");
  var email = document.getElementById("signEmail");
  var pass = document.getElementById("signPass");
  var passConf = document.getElementById("signPassConf");
  if (username.value === "" || email.value === "" || pass.value === "" || passConf.value === "") {
    alert("Please fill all of the fields.");
    prompt(";)?");
  } else {
    if (pass.value == passConf.value) {
      var account = [username.value, pass.value, email.value];
    } else {
      alert("Your passwords do not match.");
    }
  }
}

function checkAcc() {
  var username = document.getElementById("loginUser");
  var password = document.getElementById("loginPass");
  var userdata = localStorage.account;
  if (username.value == userdata[0].value && password.value == userdata[1].value) {

  } else {
    alert("Your username or password is incorrect");
  }
}
