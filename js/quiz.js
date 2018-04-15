var question;
var answer;
var guess;
var html;

var correct = [];
var wrong = [];

var questions = [
  {question: "First question?", answer: "First"},
  {question: "Second question?", answer: "Second"},
  {question: "Third question?", answer: "Third"}
];

function print(message) {
  document.getElementById("output").innerHTML = message;
}

function conlog(message) {
  console.log(message);
}

function printanswers(type) {
  var html = "<ol>";
  
  for (var i = 0; i < type.length; i++) {
    html += "<li>Question: " + type[i].question + "<br>Answer: " + type[i].answer + "<br>Your guess: " + type[i].guess + "</li>";
  }
  
  html += "</ol>";
  return html;
}

for (var i = 0; i < questions.length; i++) {
  question = questions[i].question;
  answer = questions[i].answer;
  guess = prompt(question);
  
  if (guess.toLowerCase() === answer.toLowerCase()) {
    correct.push({question: question, answer: answer, guess: guess});
  } else {
    wrong.push({question: question, answer: answer, guess: guess});
  }
}

html = "<h1>Your " + correct.length +  " correct answer are: </h1>";
html += printanswers(correct);
html += "<h1>Your " + wrong.length +  " wrong answer are: </h1>";
html += printanswers(wrong);
print(html);