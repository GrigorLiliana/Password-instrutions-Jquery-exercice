$(function() {
  console.log("works?");

  // Apply a display block to #pswd_info on focus on password
  $("#pswd").on("focus", function() {
    $("#pswd_info").css("display", "block");
  });

  //display none to #pswd_info when blur
  $("#pswd").on("blur", function() {
    $("#pswd_info").css("display", "none");
  });

  // on every key pressed

  const myPass = $("#pswd");
  const mySecondPass = $("#pswdConfirm");

  myPass.on("keyup", checkAllCase);

  function checkAllCase() {
    const myPassVal = myPass.val();
    const myPassLength = myPassVal.length;
    console.log(myPassVal);

    if (myPassVal.match(/[A-z]/)) {
      $("#letter")
        .removeClass("invalid")
        .addClass("valid");
    }
    if (myPassVal.match(/[A-Z]/)) {
      $("#capital")
        .removeClass("invalid")
        .addClass("valid");
    }
    if (myPassVal.match(/\d/)) {
      $("#number")
        .removeClass("invalid")
        .addClass("valid");
    }
    if (myPassLength >= 8) {
      $("#length")
        .removeClass("invalid")
        .addClass("valid");
    }
  }

  // on submit
  $("form").on("submit", checkEnd);

  function checkEnd(event) {
    event.preventDefault();
    checkAllCase();

    let myPassVal = myPass.val();
    let mySecondPassVal = mySecondPass.val();

    if (myPassVal === mySecondPassVal) {
      console.log("success");
      $("form").text("Success");
    }
  }
});
