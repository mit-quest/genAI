function check(){
  //alert("you've won");
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var correct = 0

  if (question1.toLowerCase() == "generative adversarial network"){
    correct++;
  }
  if (question2 == "2014"){
    correct++;
  }
  if (question3 == "Neural networks classify and GANs generate."){
    correct++;
  }
  if (question4 == "livingroom"){
    correct++;
  }
  document.getElementById("after_submit").style.visibility = "visible";
  document.getElementById("number_correct").innerHTML = "You got " + correct + " right.";
}