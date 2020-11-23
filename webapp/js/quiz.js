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
        checkForCounter();
        checkForAnswerValues();
        checkForQuestions();
}

const checkForCounter = ()=>{
    console.log('counter check');
        if(!localStorage.getItem("counter")){
        clearCounter();
        console.log('counter reset');
        } else {
        questionCounter = parseInt(localStorage.getItem("counter"));
        setCounter();
        console.log('counter found');
        }
        
    };
    
const checkForAnswerValues = ()=>{
    console.log('answer check');
    if(!localStorage.getItem("answers")){
        clearAnswers();
        console.log('answers reset');
        localStorage.setItem("answers", JSON.stringify(answers));
     } else {
        answers = JSON.parse(localStorage.getItem("answers"));
        console.log('answers found');
     }
     
};
const checkForQuestions = ()=>{
    console.log('question check');
    if(!localStorage.getItem("questions")){
       fetchQuestions().then(()=>{setMaxQuestionsDiv()});
       console.log('questions reset')
    } else {
        console.log('questions found')
        setQuestion();
        setMaxQuestionsDiv();
        
    }
};
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
};

const fetchQuestions = ()=>
    new Promise((resolve, reject) => {
        fetch("/charts/listAllQuestionWords")
        .then(response => {
            console.log('fetch');
            return response.json();
        })
        .then(response => {
            console.log('response');
            pgQuestionWords = response.rows;
            return pgQuestionWords;
        })
        .then((response)=>{
            console.log('store');
            questionWords = pgQuestionWords;
            shuffle(questionWords);
            questionWordsStringified = JSON.stringify(questionWords);
            localStorage.setItem("questions", questionWordsStringified);
            setQuestion();
            console.log(response);
        }).then(()=>{
            resolve(console.log('questions success'));
        })
    });




const setQuestion = ()=>{
    let questionDiv = document.querySelector("#question");
    questionWords = JSON.parse(localStorage.getItem("questions"));
    questionDiv.textContent = `${questionWords[questionCounter].question} :: ${questionWords[questionCounter].cd_color}`;
};

const setMaxQuestionsDiv = ()=>{
    let maxQuestionsDiv = document.querySelector("#max-questions");
    maxQuestionsDiv.textContent = questionWords.length;
};

const resetQuiz = ()=>{
    clearResult();
    clearCounter();
    clearAnswers();
    resetQuestionWords();
};

const clearResult = ()=>{
    let resultsSection = document.querySelector("#results-section");
    let totalsDiv = document.querySelector("#totals");
    let resultsDiv = document.querySelector("#results");
    resultsSection.classList.add("hiddenElement");
    totalsDiv.textContent = "";
    resultsDiv.textContent = "";
};

const clearAnswers = ()=>{
    answers = {
        "W" : 0,
        "U" : 0,
        "B" : 0,
        "R" : 0,
        "G" : 0
    };
    localStorage.setItem("answers", JSON.stringify(answers));
};

const addAnswer = (key, responseValue)=>{
    answers[key] += parseInt(responseValue);
    console.log(JSON.stringify(answers));
    localStorage.setItem("answers", JSON.stringify(answers));
};

const increaseCounter = ()=>{
    if(questionCounter < questionWords.length -1){
        questionCounter += 1;
        setCounter();
        return true
    } else {
        return false
    }
    
};

const clearCounter = ()=>{
    questionCounter = 0;
    setCounter();
    localStorage.setItem("counter", questionCounter);
};

const setCounter = ()=>{
    let counterDiv = document.querySelector("#counter");
    counterDiv.textContent = questionCounter+1;
    localStorage.setItem("counter", questionCounter);
};

const selected = (responseValue) => {
    let question = questionWords[questionCounter].question;
    let questionColor = questionWords[questionCounter].cd_color;
    let questionValue = responseValue;
    if(questionCounter < questionWords.length -1){
        addAnswer(questionColor, questionValue);
        increaseCounter();
    }
    storeAnswerResponse(question, questionColor, questionValue);
    setQuestion();
};


const storeAnswerResponse = (question, questionColor, questionValue)=>{
    
};


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
  };