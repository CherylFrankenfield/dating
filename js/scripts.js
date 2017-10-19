var total = function (answerOne, answerTwo, answerThree) {
  return answerOne + answerTwo + answerThree;
};

$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var answerOne = parseInt($("#beverage").val());
    var answerTwo = parseInt($("#animal").val());
    var answerThree = parseInt($("#boyfriend").val());
    //alert(total(answerOne, answerTwo, answerThree));

    if (total value === 3) {
      $("#celebrity1").show();

    } else if (total value === 4) {
      $("#celebrity2").show();

    } else if (total value === 5) {
      $("#celebrity3").show();
    }
    else {
      $("#celebrity4").show();
    }
  });
});
