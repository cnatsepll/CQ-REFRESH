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
        checkForCounter()
        checkForAnswerValues()
        checkForQuestions()
}

const checkForCounter = ()=>{
        if(!localStorage.getItem("counter")){
        clearCounter();
        } else {
        questionCounter = parseInt(localStorage.getItem("counter"));
        setCounter();
        }
        console.log('counter check');
    }
const checkForAnswerValues = ()=>{
    if(!localStorage.getItem("answers")){
        clearAnswers();
        localStorage.setItem("answers", JSON.stringify(answers));
     } else {
        answers = JSON.parse(localStorage.getItem("answers"));
     }
     console.log('answer check');
}
const checkForQuestions = ()=>{
    if(!localStorage.getItem("questions")){
       fetchQuestions.then(()=>{setMaxQuestionsDiv()});
    } else {
        setQuestion();
        setMaxQuestionsDiv();
    }
    console.log('question check');
}
const resetQuestionWords = () =>{
    if(!localStorage.getItem("questions")){
        fetchQuestions();
    } else {
        questionWords = JSON.parse(localStorage.getItem("questions"));
        shuffle(questionWords);
        questionWordsStringified = JSON.stringify(questionWords);
        localStorage.setItem("questions", questionWordsStringified);
        setQuestion();
    }
}
const fetchQuestions = new Promise((resolve, reject) => {
    fetch("/charts/listAllQuestionWords")
    .then(response => {
        console.log('one')
        return response.json()
    })
    .then(response => {
        console.log('two')
        pgQuestionWords = response.rows
        return pgQuestionWords
    })
    .then((response)=>{
        console.log('three')
        questionWords = pgQuestionWords;
        shuffle(questionWords);
        questionWordsStringified = JSON.stringify(questionWords);
        localStorage.setItem("questions", questionWordsStringified);
        setQuestion();
        console.log(response)
    }).then(()=>{
        console.log('four')
        resolve('success')
        return
    })
})


const setQuestion = ()=>{
    let questionDiv = document.querySelector("#question");
    questionWords = JSON.parse(localStorage.getItem("questions"));
    questionDiv.textContent = questionWords[questionCounter].question;
}

const setMaxQuestionsDiv = ()=>{
    let maxQuestionsDiv = document.querySelector("#max-questions");
    maxQuestionsDiv.textContent = questionWords.length;
}

const resetQuiz = ()=>{
    clearCounter();
    clearAnswers()
    resetQuestionWords();
}

const clearAnswers = ()=>{
    answers = {
        "W" : 0,
        "U" : 0,
        "B" : 0,
        "R" : 0,
        "G" : 0
    };
    localStorage.setItem("answers", JSON.stringify(answers));
}
const addAnswer = (key, responseValue)=>{
    answers[key] += parseInt(responseValue);
    console.log(JSON.stringify(answers));
    localStorage.setItem("answers", JSON.stringify(answers));
}

const increaseCounter = ()=>{
    if(questionCounter < questionWords.length -1){
        questionCounter += 1;
        setCounter();
        return true
    } else {
        return false
    }
    
}
const clearCounter = ()=>{
    questionCounter = 0;
    setCounter();
    localStorage.setItem("counter", questionCounter);
}
const setCounter = ()=>{
    let counterDiv = document.querySelector("#counter");
    counterDiv.textContent = questionCounter+1;
    localStorage.setItem("counter", questionCounter);
}
const selected = (responseValue) => {

    // ${questionWords[questionCounter].question}
    // ${questionWords[questionCounter].cd_color} 
    if(increaseCounter()){
        addAnswer(questionWords[questionCounter].cd_color, responseValue);
    }
    setQuestion();
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