function populate(){
    
    if(quiz.isEnded()){
        
        showScore();
        
    }else{
        
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
    }
    
    var choices = quiz.getQuestionIndex().choices;
    for(var i = 0;i < choices.length;i++){
        
        var element = document.getElementById("choice"+i);
        element.innerHTML = choices[i];
         guess("btn"+i,choices[i]);
    }
    
    showProgress();

};

function guess(id,guess){
    
    var button =document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
    
}

function showProgress(){
    
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question"+" "+currentQuestionNumber+" "+"of"+" "+quiz.questions.length;
}

function showScore(){
    
    var quizOverHTML = "<h1>RESULT</h1>";
     quizOverHTML +="<h2 id='score'>Your Score:"+quiz.score+"</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML= quizOverHTML;
}


var questions = [
    
    new Question("Which is not an object oriented programming language?",["Java","C","C++","C#"],"C"),
    new Question("Which language is used for styling webpages?",["HTML","XML","Javascript","CSS"],"CSS"),
    new Question("There are ______ main components in Object Oriented Programming.",["2","7","4","6"],"4"),
    new Question("Which language is used for webapp?",["php","python","Javascript","All"],"All"),
    new Question("MVC is a ___________.",["framework","language","library","All"],"framework")
    
];

var quiz = new Quiz(questions);

populate();