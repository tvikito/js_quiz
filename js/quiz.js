var question;
var answer;
var guess;
var html;

var correct = [];
var wrong = [];

var questions = [
  ["First question?","First"],
  ["Second question?","Second"],
  ["Third question?","Third"]
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
    html += "<li>Question: " + type[i][0] + "<br>Answer: " + type[i][1] + "<br>Your guess: " + type[i][2] + "</li>";
  }
  
  html += "</ol>";
  return html;
}

for (var i = 0; i < questions.length; i++) {
  question = questions[i][0];
  answer = questions[i][1];
  guess = prompt(question);
  
  if (guess.toLowerCase() === answer.toLowerCase()) {
    correct.push([question, answer, guess]);
  } else {
    wrong.push([question, answer, guess]);
  }
}

html = "<h1>Your " + correct.length +  " correct answer are: </h1>";
html += printanswers(correct);
html += "<h1>Your " + wrong.length +  " wrong answer are: </h1>";
html += printanswers(wrong);
print(html);





