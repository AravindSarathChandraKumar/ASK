function populate(){
    
    if(quiz.isEnded()){
        
        
    }else{
        
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
    }
    
    var choices = quiz.getQuestionIndex().choices;
    for(var i = 0;i < choices.length;i++){
        
        
    }
}


var questions = [
    
    new Question("Which is not an object oriented programming language?",["Java","C","C++","C#"],"C#"),
    new Question("Which language is used for styling webpages?",["HTML","XML","Javascript","CSS"],"CSS"),
    new Question("There are ______ main components in Object Oriented Programming.",["2","7","4","6"],"4"),
    new Question("Which language is used for webapp?",["php","python","Javascript","All"],"All"),
    new Question("MVC is a ___________.",["framework","language","library","All"],"framework")
    
];

var quiz = new Quiz(questions);

populate();