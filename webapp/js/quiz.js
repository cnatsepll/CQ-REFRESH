let pgQuestionWords;
let questionWords;
let questionWordsStringified;
let questionCounter;
let question;
let questionColor;
let answers = {
    "W" : 0,
    "U" : 0,
    "B" : 0,
    "R" : 0,
    "G" : 0
};
let colorsAsked = {
    "W" : 0,
    "U" : 0,
    "B" : 0,
    "R" : 0,
    "G" : 0
};

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
            if(questionCounter > 174){
                let counterDiv = document.querySelector("#counter");
                counterDiv.textContent = 175;
            }else{
                setCounter();
            }
        console.log('counter found');
        }
        
    };
    
const checkForAnswerValues = ()=>{
    console.log('answer check');
    if(!localStorage.getItem("answers") && !localStorage.getItem("colorsAsked")){
        clearAnswers();
        console.log('answers reset');
        localStorage.setItem("answers", JSON.stringify(answers));
        localStorage.setItem("colorsAsked", JSON.stringify(colorsAsked));
     } else {
        answers = JSON.parse(localStorage.getItem("answers"));
        colorsAsked = JSON.parse(localStorage.getItem("colorsAsked"));
        console.log('answers found');
     }
     
};
const checkForQuestions = ()=>{
    console.log('question check');
    if(!localStorage.getItem("questions")){
       fetchQuestions().then(()=>{setMaxQuestionsDiv()});
       console.log('questions reset')
    } else {
        questionWords = JSON.parse(localStorage.getItem("questions"));
        console.log('questions found')
        setQuestion();
        setMaxQuestionsDiv();
        
    }
};
const resetQuestionWords = () =>{
    fetchQuestions();
    // if(!localStorage.getItem("questions")){
    //     fetchQuestions();
    // } else {
    //     questionWords = JSON.parse(localStorage.getItem("questions"));
    //     shuffle(questionWords);
    //     questionWordsStringified = JSON.stringify(questionWords);
    //     localStorage.setItem("questions", questionWordsStringified);
    //     setQuestion();
    // }
};

const fetchQuestions = ()=>
    new Promise((resolve, reject) => {
        fetch("/charts/listAllQuestionWords")
        .then(response => response.json())
        .then(response => {
            questionWords = response;
            shuffle(questionWords);
            questionWordsStringified = JSON.stringify(questionWords);
            localStorage.setItem("questions", questionWordsStringified);
            setQuestion();
        }).then(()=>{
            resolve(console.log('questions success'));
        })
    });

// const previousQuestion =()=>{

// }

const returnWord =()=>{
    let scoreArray = [colorsAsked.W, colorsAsked.U, colorsAsked.B, colorsAsked.R, colorsAsked.G]
    let scoreArrayDesc = scoreArray.sort((a,b)=>{return b - a});
    let scoreArrayAsc = scoreArray.sort((a,b)=>{return a - b});
    let highestValue = scoreArrayDesc[0];
    let lowestValue = scoreArrayAsc[0];
    console.log(scoreArray)    
    console.log(colorsAsked);
    for(let i = 0; i < questionWords.length; i+=1){
        if(colorsAsked[questionWords[i].cd_color] === lowestValue){
            removedWords = questionWords.splice(i,1);
            questionWordsStringified = JSON.stringify(questionWords);
            localStorage.setItem("questions", questionWordsStringified);
            console.log(removedWords[0])
            return removedWords[0];
        }   
    }
}

const nextQuestion =()=>{
    let resultsSection = document.querySelector("#results-section");
    let nextQuestion;
    if(questionCounter < 175){
        nextQuestion = returnWord();
        questionColor = nextQuestion.cd_color;
        if(!resultsSection.classList.contains("hiddenElement")){
            clearResult();
        }
    } else {
        nextQuestion ={question: "Quiz Complete!"}
    }
    question = nextQuestion.question;
    let questionDiv = document.querySelector("#question");
    questionDiv.textContent = question;
}

const setQuestion = ()=>{
    let questionDiv = document.querySelector("#question");
    questionColor = questionWords[0].cd_color;
    questionDiv.textContent = questionWords[0].question;
};

const setMaxQuestionsDiv = ()=>{
    let maxQuestionsDiv = document.querySelector("#max-questions");
    maxQuestionsDiv.textContent = 175;
};

const resetQuiz = ()=>{
    localStorage.removeItem("questions");
    localStorage.removeItem("colorsAsked");
    localStorage.removeItem("counter");
    localStorage.removeItem("answers");
    clearResult();
    clearCounter();
    clearAnswers();
    resetQuestionWords();
};

const clearResult = ()=>{
    let resultsSection = document.querySelector("#results-section");
    let totalsDiv = document.querySelector("#totals");
    let resultsDiv = document.querySelector("#results");
    let header = document.querySelector("#header");
    header.scrollIntoView({behavior: "auto", block: "start"});
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
    colorsAsked = {
        "W" : 0,
        "U" : 0,
        "B" : 0,
        "R" : 0,
        "G" : 0
    };
    localStorage.setItem("answers", JSON.stringify(answers));
    localStorage.setItem("colorsAsked", JSON.stringify(colorsAsked));
};

const addAnswer = (key, responseValue)=>{
    answers[key] += parseInt(responseValue);
    colorsAsked[key] += 1;
    console.log(JSON.stringify(answers));
    localStorage.setItem("answers", JSON.stringify(answers));
    localStorage.setItem("colorsAsked", JSON.stringify(colorsAsked));
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
    let questionValue = responseValue;
    if(questionCounter < 174){
        questionCounter += 1;
        setCounter();
        addAnswer(questionColor, questionValue);
        nextQuestion();
    }else if (questionCounter === 174){
        questionCounter += 1;
        localStorage.setItem("counter", questionCounter);
        addAnswer(questionColor, questionValue);
        let counterDiv = document.querySelector("#counter");
        counterDiv.textContent = 175;
        nextQuestion();
    } else {
        questionCounter += 1;
        localStorage.setItem("counter", questionCounter);
        let counterDiv = document.querySelector("#counter");
        counterDiv.textContent = 175;
    }
}


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