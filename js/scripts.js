$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("input#age").val());

    $(".userAge").text(age);
    if (age >= 18) {
      $(location).attr('href', 'http://www.stophatedumptrump.com/');
    } else {
      $(location).attr('href', 'http://busproject.org');
    }

  });
});
