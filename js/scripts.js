$(document).ready(function() {
  $("form").submit(function(event) {
    alert("test")
    var answer1 = $("input#answer1").val();
    var answer2 = $("input#answer2").val();
    var answer3 = $("input#answer3").val();
    var answer4 = $("input#answer4").val();

    var answersArray = [answer1, answer2, answer3, answer4];

    var secondArray = [];
    secondArray.push(answersArray[1]);
    secondArray.push(answersArray[0]);
    secondArray.push(answersArray[2]);

    $("#answers").text(secondArray);

    event.preventDefault();
  });
});
