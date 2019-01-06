$(document).ready(function() {
  alert("Click the Start button to play!")

  var number = 30;

  var intervalId;
  
  $("#startbutton").click(run);
  
  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
  function decrement() {
    number--;
  
    $("#timer").html("<h2>" + number + "</h2>");
  
    
  }

//click function for grade me button
//  function will for loop through the questions to check the answers
//  determine right or wrong
//      so will need to assign variables
//function to end the game if you run out of time
//  alert "out of time" with score including unanswered questions


})