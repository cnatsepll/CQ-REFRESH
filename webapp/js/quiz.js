let pgQuestionWords;
let questionWords;
let questionWordsStringified;
const quizStorage = localStorage;
let questionCounter;
let answers;

window.onload = function(){ 
    checkQuizHistory();
}


const checkQuizHistory = ()=>{
    checkForQuestions();
    checkForCounter();
    checkForAnswerValues();
}

const checkForCounter = ()=>{
 if(!localStorage.getItem("counter")){
    questionCounter = 0;
    localStorage.setItem("counter", questionCounter);
 } else {
    questionCounter = parseInt(localStorage.getItem("counter"));
 }
}
const checkForAnswerValues = ()=>{
    if(!localStorage.getItem("answers")){
        answers = {
            "white" : 0,
            "blue" : 0,
            "black" : 0,
            "red" : 0,
            "green" : 0
        }
        localStorage.setItem("answers", JSON.stringify(answers));
     } else {
        answers = JSON.parse(localStorage.getItem("answers"));
     }
}
const checkForQuestions = ()=>{
    if(!localStorage.getItem("questions")){
        fetch("/charts/listAllQuestionWords")
        .then(response => response.json())
        .then(response => {pgQuestionWords = response.rows;})
        .then(()=>{
            shuffle(pgQuestionWords);
            questionWordsStringified = JSON.stringify(pgQuestionWords);
            localStorage.setItem("questions", questionWordsStringified);
            questionWords = pgQuestionWords;
        })
    } else {
        questionWords = JSON.parse(localStorage.getItem("questions"));
    }
}

const setQuestionWords = () =>{
    if(!localStorage.getItem("questions")){
        fetch("/charts/listAllQuestionWords")
        .then(response => response.json())
        .then(response => {pgQuestionWords = response.rows;})
        .then(()=>{
            questionWordsStringified = JSON.stringify(pgQuestionWords);
            localStorage.setItem("questions", questionWordsStringified);
            questionWords = pgQuestionWords;
            shuffle(questionWords);
        })
    } else {
        questionWords = JSON.parse(localStorage.getItem("questions"));
        shuffle(questionWords);
    }
}
const refreshQuestion = ()=>{
    let questionDiv = document.querySelector("#question");
    questionDiv.textContent = questionWords[questionCounter].question;
}

const resetQuiz = ()=>{
    answers = {
        "white" : 0,
        "blue" : 0,
        "black" : 0,
        "red" : 0,
        "green" : 0
    };
    questionCounter = 0;
    localStorage.setItem("answers", JSON.stringify(answers));
    localStorage.setItem("counter", questionCounter);
    setQuestionWords();
    refreshQuestion();
}

const selected = (responseValue) => {
    //alert(`(${questionCounter})  ${questionWords[questionCounter].question}, ${questionWords[questionCounter].cd_color}  :::   ${responseValue}`);
    
    if(questionCounter < questionWords.length -1){
        questionCounter += 1;
    }

    localStorage.setItem("counter", questionCounter);

    refreshQuestion();
}




const shuffle = (array) => {
    // https://bost.ocks.org/mike/shuffle/
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }