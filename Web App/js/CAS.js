function validateForm() {
    var x = document.forms["loginSub"]["uname"].value;
    if (x == "") {
      alert("A user name or email must be ented");
      return false;
    }
    x = document.forms["loginSub"]["pwrd"].value;
    if (x == "") {
      alert("Password cannot be left blank");
      return false;
    }
    return confirm("Logging in.");
  }

  function validateForm2() {
    var x = document.forms["signup"]["firstname"].value;
    if (x == "") {
      alert("First name cannot be left blank");
      return false;
    }
    x = document.forms["signup"]["lastname"].value;
    if (x == "") {
      alert("Last name cannot be left blank");
      return false;
    }
    x = document.forms["signup"]["email"].value;
    if (x == "") {
      alert("Email cannot be left blank");
      return false;
    }
    x = document.forms["signup"]["user"].value;
    if (x == "") {
      alert("Username cannot be left blank");
      return false;
    }
    x = document.forms["signup"]["password"].value;
    if (x == "") {
      alert("A password must be entered");
      return false;
    }
    x = document.forms["signup"]["password"].value;
    if (x.length < 8) {
      alert("Password must be at least 8 characters long");
      return false;
    }
    return confirm("Your information was saved.");
  }