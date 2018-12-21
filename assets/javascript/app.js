
$("#start").on("click" , function(){
    $("#start").remove();
    game.loadQuestion(questions);

});


$(document).on("click",".answer-button", function(e){
    game.clicked(e);

});
$(document).on("click", "#reset", function(){
    game.reset(); 
})


var questions = [{
    question:"what is the tallest land animal?",
    answers: ["Elephant", "Giraffe", "Camel", "Moose"],
    correctAnswer: "Giraffe",
    
}, {
    question:"Where is San diego located?",
    answers:["Florida", "Arkansas", "California", "Nebraska"],
    correctAnswer:"California",
    
}, {
    question:"What is the largest marine animal ever?",
    answers:["Great White", "Blue Whale", "Megalodon", "Whale Shark"],
    correctAnswer:"Blue Whale",
    
}, {
    question:"When was the light Bulb invented?",
    answers:[1879, 1990,1769,1812],
    correctAnswer:1879,
    
}, {
    question:"When was the first car invented?",
    answers:[1885,1890,1900,1860],
    correctAnswer:1885,
    
}, {
    question:"When will global warming become irreversible?",
    answers:["2026", "2050", "2036","2030"],
    correctAnswer:"2036",
    
}];

var game = {
    questions:questions,
    currentQuestion:0,
    counter:30,
    correct:0,
    incorrect:0,
    unanswered:0,
    countdown: function(){
        game.counter--;
        $("#counter").html("<h3>You Have "+game.counter+"Seconds Left</h3>");
        if(game.counter<=0){
            console.log("Times up!");
            game.timeUp();
        }
 },

loadQuestion: function(){
    game.counter = 30;
    timer = setInterval(game.countdown,1000);
    $("#counter").html("<h3>You Have "+game.counter+"Seconds Left</h3>");
    $("#subgrid").html('<h3 class="answer">'+questions[game.currentQuestion].
    question+'</h3>');
    for(var i = 0; i <questions[game.currentQuestion].answers.length;i++){
        $("#subgrid").append('<div class="answer-button"id="button-'+i+'" data-name="'+questions[game.
            currentQuestion].answers[i]+'">'+questions[game.
            currentQuestion].answers[i]+'</div>');
    }

},
nextQuestion: function(){
    $("#counter").show();
    game.counter = 30;
    game.currentQuestion++;
    game.loadQuestion();
},
timeUp: function(){
    clearInterval(timer);
    game.unanswered++;
    $("#subgrid").html("<h2 your out of time!");
    $("#subgrid").append("<h3>The correct answer was"+question[game.currentQuestion].correctAnswer+"</h3>");
    if(game.currentQuestion==questions.length-1){
        setTimeout(game.results, 3*1000)
    
    }else {
        setTimeout(game.nextQuestion,3*1000);
    }
},
results: function(){
    clearInterval(timer);
    $("#subgrid").html("<h2>GAME OVER!</h2>")
    $("#subgrid").append("<h2>correct:"+game.correct+"</h2>");
    $("#subgrid").append("<h2>incorrect: "+game.incorrect+"</h2>");
    $("#subgrid").append("<h3>unanswered: "+game.unanswered+"</h3>");
    $("#subgrid").append("<button id ='reset'?>RESET</button>")
},
clicked: function(e){
    $("#counter").hide();
    clearInterval(timer);
    if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
        game.answerCorrectly();
    } else {
        game.answerIncorrectly();
    }
},
answerCorrectly: function(){
    $("#counter").hide();
    clearInterval(timer);
    game.correct++;
    $("#subgrid").html("<h2>YOU ANSWERED CORRECTLY!</h2>");
    if(game.currentQuestion==questions.length-1){
        setTimeout(game.results,3*1000);

    }else {
        setTimeout(game.nextQuestion,3*1000);

    }
},
answerIncorrectly: function(){
    clearInterval(timer);
    game.incorrect++;
    $("#subgrid").html("<h2>You ANSWERED INCORRECTLY!</h2>");
    $("#subgrid").append("<h2>The correct answer was "+questions[game.currentQuestion].correctAnswer+"</h2>");
    if(game.currentQuestion==questions.length-1){
        setTimeout(game.results,3*1000);

    }else {
        setTimeout(game.nextQuestion,3*1000);

    }
},
reset:function(){
    game.currentQuestion = 0;
    game.correct = 0;
    game.counter = 30;
    game.incorrect = 0;
    game.unanswered = 0;
    game.loadQuestion();
 
},


};

