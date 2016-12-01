//** What attributes would be needed for "Questions" **//
var Question (text, choices, answer); {
  this.text=text;
  this.choices=choices;
  this.answer=answer;
};


Question.prototype.correctAnswer = function(choices) {
  console.log(choices === this.answer);
};
