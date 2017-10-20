var total = function (_answerOne, _answerTwo, _answerThree) {
  return _answerOne + _answerTwo + _answerThree;
};

$(document).ready(function() {


  $("form#form").submit(function(event) {
    event.preventDefault();
    var answerOne = parseInt($("#beverage").val());
    var answerTwo = parseInt($("#animal").val());
    var answerThree = parseInt($("#boyfriend").val());
    //var realtotal = parseInt("total");

    var realtotal = total(answerOne, answerTwo, answerThree);


    if (realtotal === 3) {
      alert("Congrats!");
      $("#celebrity1").show();

    } else if (realtotal === 4) {
      $("#celebrity2").show();

    } else if (realtotal === 5) {
      $("#celebrity3").show();
    }
    else {
      $("#celebrity4").show();
    }
  });
});
