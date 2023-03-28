$(document).ready(function () {
  var delay = 2000;
  $(".submit-btn").click(function (e) {
    e.preventDefault();

    var email = $("#email").val();
    if (email == "") {
      $(".message_box").html(
        '<span style="color:red;">Enter Email Address!</span>'
      );
      $("#email").focus();
      return false;
    }
    if ($("#email").val() != "") {
      if (!isValidEmailAddress($("#email").val())) {
        $(".message_box").html(
          '<span style="color:red;">Provided email address is incorrect!</span>'
        );
        $("#email").focus();
        return false;
      }
    }
    $.ajax({
      type: "POST",
      url: "ajax.php",
      data: "&email=" + email,
      beforeSend: function () {
        $(".message_box").html(
          '<p>SUCCESS SENDING MESSAGE</p>'
        );
      },
      success: function (data) {
        setTimeout(function () {
          $(".message_box").html(data);
        }, delay);
      },
    });
  });
});

function isValidEmailAddress(emailAddress) {
  var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  return pattern.test(emailAddress);
}



var menu = document.querySelector('.menu');
var responsiveNav = document.querySelector("#drawer");

menu.addEventListener('click', function () {
  if (responsiveNav.className === "nav") {
    responsiveNav.className += " responsive";
    console.log("works")
  }
  else {
    responsiveNav.className = "nav";
  }
});



