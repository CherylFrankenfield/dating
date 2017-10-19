$(document).ready(function() {
  $("form#form").change(function(event) {
    var answerOne = parseInt(select("#beverage")).val();
    var answerTwo = parseInt(select("#animal")).val();
    var answerThree = parseInt(select("#boyfriend")).val();
    var total = answerOne + answerTwo + answerThree;
      return total;

    if (total === 3) {
      $("#celebrity1").show();
    }
    else if (total === 4) {
      $("#celebrity2").show();
    }
    else if (total === 5) {
      $("#celebrity3").show();
    }
    else  {
      $("#celebrity4").show();
    }

    // if (outputAnimal === 'turtle')  {
    //   $('#turtle').show();
    //   $('#snake','#otter').hide();
    // } else if (outputAnimal === 'snake') {
    //   $('#snake').show();
    // }
    // else {
    //   $('#otter').show();
    //
  });

});
