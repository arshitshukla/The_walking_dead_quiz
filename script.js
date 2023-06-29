var currentClue = 1;

function checkAnswer(clueNumber) {
 var radios = document.getElementsByName('answer'+clueNumber);
 var selectedAnswer;
 for(var i = 0; i < radios.length; i++) {
  if(radios[i].checked) {
   selectedAnswer = radios[i].value;
  }
 }
 if(selectedAnswer === undefined) {
  alert("Please select an answer!");
 } else {
  switch(clueNumber) {
   case 1:
    if(selectedAnswer === 'c') {
     alert("Correct! Move on to the next clue.");
     showClue(2);
    } else {
     alert("Wrong answer! Start again from the beginning.");
     radios[i].value= 0;
     showClue(1);
    }
    break;
   case 2:
    if(selectedAnswer === 'b') {
     alert("Correct! Move on to the next clue.");
     showClue(3);
    } else {
     alert("Wrong answer! Start again from the beginning.");
     showClue(1);
    }
    break;
   case 3:
    if(selectedAnswer === 'c') {
     alert("Correct! Move on to the next clue.");
     showClue(4);
    } else {
     alert("Wrong answer! Start again from the beginning.");
     showClue(1);
    }
    break;
   case 4:
    if(selectedAnswer === 'c') {
     alert("Correct! Move on to the next clue.");
     showClue(5);
    } else {
     alert("Wrong answer! Start again from the beginning.");
     showClue(1);
    }
    break;
   case 5:
    if(selectedAnswer === 'a') {
     alert("Congratulations! You have completed the Zombie Apocalypse Survival Quiz and answered all 5 questions correctly!");
     window.location.href="congrats.html";
    } else {
     alert("Wrong answer! Start again from the beginning.");
     showClue(1);
    }
    break;
  }
 }
}

function showClue(clueNumber) {
 currentClue = clueNumber;
 for(var i = 1; i <= 5; i++) {
  var clueDiv = document.getElementById('clue'+i);
  if(i === clueNumber) {
   clueDiv.style.display = 'block';
  } else {
   clueDiv.style.display = 'none';
  }
 }
}

showClue(1);
