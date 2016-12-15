var questions =  [

    {

        question: "What game is Mario from?",
        choices: ["Zelda", "Metroid", "Super Mario", "Halo"]
        correctAnswer: 3
    },

    {
        question: "In what year was Sega Genesis released in North America?"
        choices: ["1999", "1989", "1975", "1991"]
        answer: 4
    }, {
        question: "E. Honda, Dhalsim and Chun Li are all characters from what video game series?"
        choices: ["Teenage Mutant Ninja Turtles", "Street Fighter", "Battle Toads", "Mortal Kombat"]
        correctAnswer: 2
    }, {
        question: "What character do you play as in The Legend Of Zelda?"
        choices: ["Gandolf", "Chimmy", "Peter", "Link"]
        correctAnswer: 4
    }, {
        question: "The game Grand Theft Auto was released primarily for what gaming system? "
        choices: ["N.E.S", "XBOX", "Dreamcast", "Playstation"]
        correctAnswer: 4
    }

}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

document.ready(function() {

            function displayCurrentQeustion() {
                $(this).find(".quizMessage").hide();
                //create a header w/question append to DOM
                //access Question [0].question
                //Loop through question[0].answers
                $(this).find(".nextButton").on("click", function() {
                    if (!quizOver) {

                        value = $("input[type='radio']:checked").val();

                        if (value == undefined) {
                            $(document).find(".quizMessage").text("Please select an answer");
                            $(document).find(".quizMessage").show();
                        } else {

                            $(document).find(".quizMessage").hide();

                            if (value == questions[currentQuestion].correctAnswer) {
                                correctAnswers++;
                            }

                            currentQuestion++;

                            if (currentQuestion < questions.length) {
                                displayCurrentQuestion();
                            } else {
                                displayScore();
                                //                    $(document).find(".nextButton").toggle();
                                //                    $(document).find(".playAgainButton").toggle();
                                // Change the text in the next button to ask if user wants to play again

                                $(document).find(".nextButton").text("Play Again?");
                                quizOver = true;
                            }
                        }
                    } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
                        quizOver = false;
                        $(document).find(".nextButton").text("Next Question");
                        resetQuiz();
                        displayCurrentQuestion();
                        hideScore();
                    }
                });

                // This displays the current question AND the choices
                function displayCurrentQuestion() {

                    console.log("In display current Question");

                    var question = questions[currentQuestion].question;
                    var questionClass = $(document).find(".quizContainer > .question");
                    var choiceList = $(document).find(".quizContainer > .choiceList");
                    var numChoices = questions[currentQuestion].choices.length;

                    // Set the questionClass text to the current question
                    $(questionClass).text(question);

                    // Remove all current <li> elements (if any)
                    $(choiceList).find("li").remove();

                    var choice;
                    for (i = 0; i < numChoices; i++) {
                        choice = questions[currentQuestion].choices[i];
                        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
                    }
                }

                function resetQuiz() {
                    currentQuestion = 0;
                    correctAnswers = 0;
                    hideScore();
                }

                function displayScore() {
                    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
                    $(document).find(".quizContainer > .result").show();
                }

                function hideScore() {
                    $(document).find(".result").hide();
                }
