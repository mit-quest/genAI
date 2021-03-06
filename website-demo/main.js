function check1(){
  var correct = false;
  var explanation =  ('\n'+"GAN stands for <b>'Generative Adversarial Network'</b>.");
  var question1 = document.quiz.question1.value;
  if (question1.toLowerCase() == "generative adversarial network"){
    correct = true;
  }
  document.getElementById("after_submit_1").style.visibility = "visible";
  if(correct){
    document.getElementById("number_correct_1").innerHTML = ("That's right!" + explanation);
  }
  else{
    document.getElementById("number_correct_1").innerHTML = ("Sorry, that's incorrect." + explanation);
  }
}

function check2(){
  var correct = false;
  var explanation =  ('\n'+"GANs were developed in <b>2014</b> by a researcher named Ian Goodfellow.");
  var question2 = document.quiz.question2.value;
  if (question2 == "2014"){
    correct = true;
  }
  document.getElementById("after_submit_2").style.visibility = "visible";
  if(correct){
    document.getElementById("number_correct_2").innerHTML = ("That's right!" + explanation);
  }
  else{
    document.getElementById("number_correct_2").innerHTML = ("Sorry, that's incorrect." + explanation);
  }
}

function check3(){
  var correct = false;
  var explanation =  ('\n'+"GANs are made up of <b>two</b> networks called the generator and the discriminator.");
  var question3 = document.quiz.question3.value;
  if (question3 == "2"){
    correct = true;
  }
  document.getElementById("after_submit_3").style.visibility = "visible";
  if(correct){
    document.getElementById("number_correct_3").innerHTML = ("That's right!" + explanation);
  }
  else{
    document.getElementById("number_correct_3").innerHTML = ("Sorry, that's incorrect." + explanation);
  }
}

function check4(){
  var correct = false;
  var explanation =  ('\n'+"The relationship between the generator and the discriminator is <b>adversarial</b>, or <b>competitive</b>.");
  var question4 = document.quiz.question4.value;
  if (question4.toLowerCase() == "adversarial" || question4.toLowerCase() == "competitive"){
    correct = true;
  }
  document.getElementById("after_submit_4").style.visibility = "visible";
  if(correct){
    document.getElementById("number_correct_4").innerHTML = ("That's right!" + explanation);
  }
  else{
    document.getElementById("number_correct_4").innerHTML = ("Sorry, that's incorrect." + explanation);
  }
}

function check5(){
  var correct = false;
  var explanation =  ('\n'+"<b>Generators create new images</b> and <b>discriminators classify images</b>.");
  var question5 = document.quiz.question5.value;
  if (question5 == "Generators create new images and discriminators classify images."){
    correct = true;
  }
  document.getElementById("after_submit_5").style.visibility = "visible";
  if(correct){
    document.getElementById("number_correct_5").innerHTML = ("That's right!" + explanation);
  }
  else{
    document.getElementById("number_correct_5").innerHTML = ("Sorry, that's incorrect." + explanation);
  }
}

function check6(){
  var correct = false;
  var explanation =  ('\n'+"A GAN trained on <b>kitchens</b> would have neurons such as an oven neuron, a stove neuron, a refrigerator neuron, etc.");
  var question6 = document.quiz.question6.value;
  if (question6 == "kitchen"){
    correct = true;
  }
  document.getElementById("after_submit_6").style.visibility = "visible";
  if(correct){
    document.getElementById("number_correct_6").innerHTML = ("That's right!" + explanation);
  }
  else{
    document.getElementById("number_correct_6").innerHTML = ("Sorry, that's incorrect." + explanation);
  }
}

function check7(){
  var correct = false;
  var explanation =  ('\n'+"<b>All of the above</b> were generated by GANs!");
  var question7 = document.quiz.question7.value;
  if (question7 == "All of the above"){
    correct = true;
  }
  document.getElementById("after_submit_7").style.visibility = "visible";
  if(correct){
    document.getElementById("number_correct_7").innerHTML = ("That's right!" + explanation);
  }
  else{
    document.getElementById("number_correct_7").innerHTML = ("Sorry, that's incorrect." + explanation);
  }
}