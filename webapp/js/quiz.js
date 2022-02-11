let pgQuestionWords;
let questionWords;
let questionWordsStringified;
let questionCounter;
let question;
let questionColor;
const listAllQuestionWords = `
[{"question":"Acceptance","cd_color":"G"},{"question":"Achievement","cd_color":"B"},{"question":"Adaptability","cd_color":"U"},{"question":"Advantageous","cd_color":"B"},{"question":"Adventure","cd_color":"R"},{"question":"Affection","cd_color":"R"},{"question":"Agreeable","cd_color":"G"},{"question":"Ambition","cd_color":"B"},{"question":"Amorality","cd_color":"B"},{"question":"Analyzing","cd_color":"U"},{"question":"Arrogant","cd_color":"B"},{"question":"Assertive","cd_color":"R"},{"question":"Authenticity","cd_color":"R"},{"question":"Authority","cd_color":"W"},{"question":"Autonomy","cd_color":"B"},{"question":"Balance","cd_color":"G"},{"question":"Being Present","cd_color":"R"},{"question":"Benevolence","cd_color":"W"},{"question":"Boldness","cd_color":"R"},{"question":"Calculating","cd_color":"B"},{"question":"Calm","cd_color":"G"},{"question":"Casual","cd_color":"R"},{"question":"Centered","cd_color":"G"},{"question":"Charm","cd_color":"R"},{"question":"Cold (attitude)","cd_color":"U"},{"question":"Commitment","cd_color":"W"},{"question":"Common sense","cd_color":"G"},{"question":"Community","cd_color":"G"},{"question":"Competitive","cd_color":"B"},{"question":"Complexity","cd_color":"U"},{"question":"Connected","cd_color":"G"},{"question":"Contentment","cd_color":"G"},{"question":"Contribution","cd_color":"W"},{"question":"Cooperation","cd_color":"W"},{"question":"Courage","cd_color":"R"},{"question":"Curiosity","cd_color":"U"},{"question":"Cynical","cd_color":"U"},{"question":"Deception","cd_color":"B"},{"question":"Decisive","cd_color":"W"},{"question":"Dedication","cd_color":"W"},{"question":"Defiance","cd_color":"B"},{"question":"Desire","cd_color":"B"},{"question":"Desire to Know","cd_color":"U"},{"question":"Destiny","cd_color":"G"},{"question":"Discerning","cd_color":"U"},{"question":"Discipline","cd_color":"W"},{"question":"Dominance","cd_color":"B"},{"question":"Earthy","cd_color":"G"},{"question":"Efficiency","cd_color":"U"},{"question":"Ego","cd_color":"B"},{"question":"Emotion","cd_color":"R"},{"question":"Empathy","cd_color":"R"},{"question":"Enthusiasm","cd_color":"R"},{"question":"Exploitation","cd_color":"B"},{"question":"Fairness","cd_color":"W"},{"question":"Flamboyant","cd_color":"R"},{"question":"Focus","cd_color":"U"},{"question":"Formality","cd_color":"W"},{"question":"Fortitude","cd_color":"G"},{"question":"Freedom","cd_color":"R"},{"question":"Friendship","cd_color":"R"},{"question":"Fun","cd_color":"R"},{"question":"Generosity","cd_color":"W"},{"question":"Growth","cd_color":"G"},{"question":"Guardian","cd_color":"W"},{"question":"Guile","cd_color":"U"},{"question":"Harmony","cd_color":"G"},{"question":"Heart","cd_color":"R"},{"question":"Hearty","cd_color":"G"},{"question":"Helpful","cd_color":"W"},{"question":"Honesty","cd_color":"W"},{"question":"Honor","cd_color":"W"},{"question":"Hope","cd_color":"G"},{"question":"Humble","cd_color":"W"},{"question":"Humor","cd_color":"R"},{"question":"Imaginative","cd_color":"U"},{"question":"Impulsive","cd_color":"R"},{"question":"Independent","cd_color":"R"},{"question":"Individuality","cd_color":"R"},{"question":"Influence","cd_color":"B"},{"question":"Instinct","cd_color":"G"},{"question":"Integrity","cd_color":"W"},{"question":"Intuition","cd_color":"G"},{"question":"Inventive","cd_color":"U"},{"question":"Investigative","cd_color":"U"},{"question":"Joy","cd_color":"R"},{"question":"Justice","cd_color":"W"},{"question":"Knowledge","cd_color":"U"},{"question":"Law","cd_color":"W"},{"question":"Leadership","cd_color":"W"},{"question":"Leverage","cd_color":"B"},{"question":"Live and let live","cd_color":"G"},{"question":"Logical","cd_color":"U"},{"question":"Looking to the Future","cd_color":"U"},{"question":"Love","cd_color":"R"},{"question":"Manipulation","cd_color":"B"},{"question":"Mastery","cd_color":"B"},{"question":"Mischievous","cd_color":"R"},{"question":"Morality","cd_color":"W"},{"question":"Natural","cd_color":"G"},{"question":"Neatness","cd_color":"W"},{"question":"Notices the little things","cd_color":"U"},{"question":"Nuance","cd_color":"U"},{"question":"Opportunistic","cd_color":"B"},{"question":"Organization","cd_color":"W"},{"question":"Originality","cd_color":"R"},{"question":"Passion","cd_color":"R"},{"question":"Peace","cd_color":"W"},{"question":"Perfection","cd_color":"U"},{"question":"Performer","cd_color":"R"},{"question":"Persistence","cd_color":"G"},{"question":"Persuasive","cd_color":"U"},{"question":"Poetic","cd_color":"R"},{"question":"Possessions","cd_color":"B"},{"question":"Power","cd_color":"B"},{"question":"Pragmatism","cd_color":"B"},{"question":"Pride","cd_color":"B"},{"question":"Profanity","cd_color":"B"},{"question":"Professional","cd_color":"W"},{"question":"Progress","cd_color":"U"},{"question":"Protective","cd_color":"W"},{"question":"Purity","cd_color":"W"},{"question":"Purpose","cd_color":"R"},{"question":"Questioning","cd_color":"U"},{"question":"Randomness","cd_color":"R"},{"question":"Rational","cd_color":"U"},{"question":"Realistic","cd_color":"B"},{"question":"Reckless","cd_color":"R"},{"question":"Relentless","cd_color":"B"},{"question":"Remorseless","cd_color":"B"},{"question":"Respect","cd_color":"G"},{"question":"Respect for Life","cd_color":"G"},{"question":"Responsibility","cd_color":"W"},{"question":"Romance","cd_color":"R"},{"question":"Ruthless","cd_color":"B"},{"question":"Sacred","cd_color":"W"},{"question":"Scholarly","cd_color":"U"},{"question":"Seeking Meaningfulness","cd_color":"G"},{"question":"Self-Control","cd_color":"W"},{"question":"Self-interest","cd_color":"B"},{"question":"Self-reliant","cd_color":"B"},{"question":"Sensitive","cd_color":"R"},{"question":"Sentiment","cd_color":"R"},{"question":"Serenity","cd_color":"G"},{"question":"Service","cd_color":"W"},{"question":"Significance","cd_color":"G"},{"question":"Simplicity","cd_color":"G"},{"question":"Skepticism","cd_color":"U"},{"question":"Solitary","cd_color":"B"},{"question":"Soul","cd_color":"G"},{"question":"Speculation","cd_color":"U"},{"question":"Spirituality","cd_color":"G"},{"question":"Spontaneous","cd_color":"R"},{"question":"Stability","cd_color":"G"},{"question":"Strategic","cd_color":"U"},{"question":"Stubborn","cd_color":"G"},{"question":"Studious","cd_color":"U"},{"question":"Subtlety","cd_color":"U"},{"question":"Success","cd_color":"B"},{"question":"Supportive","cd_color":"W"},{"question":"Supremacy","cd_color":"B"},{"question":"Talented","cd_color":"G"},{"question":"Teamwork","cd_color":"W"},{"question":"Technologically Fluent","cd_color":"U"},{"question":"Theorizing","cd_color":"U"},{"question":"Tradition","cd_color":"G"},{"question":"Trustworthy","cd_color":"W"},{"question":"Truth","cd_color":"U"},{"question":"Uninhibited","cd_color":"B"},{"question":"Valuing High Quality","cd_color":"U"},{"question":"Virtue","cd_color":"W"},{"question":"Willing to let go","cd_color":"G"},{"question":"Winning","cd_color":"B"},{"question":"Wisdom","cd_color":"G"},{"question":"Wordplay","cd_color":"U"}]
`;

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
        if(!localStorage.getItem("counter")){
        clearCounter();
        } else {
        questionCounter = parseInt(localStorage.getItem("counter"));
            if(questionCounter > 174){
                let counterDiv = document.querySelector("#counter");
                counterDiv.textContent = 175;
            }else{
                setCounter();
            }
        }
        
    };
    
const checkForAnswerValues = ()=>{
    if(!localStorage.getItem("answers") && !localStorage.getItem("colorsAsked")){
        clearAnswers();
        localStorage.setItem("answers", JSON.stringify(answers));
        localStorage.setItem("colorsAsked", JSON.stringify(colorsAsked));
     } else {
        answers = JSON.parse(localStorage.getItem("answers"));
        colorsAsked = JSON.parse(localStorage.getItem("colorsAsked"));
     }
     
};
const checkForQuestions = ()=>{
    if(!localStorage.getItem("questions")){
       fetchQuestions()
       setMaxQuestionsDiv()
    } else {
        questionWords = JSON.parse(localStorage.getItem("questions"));
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

const fetchQuestions = ()=>{
        questionWords = JSON.parse(listAllQuestionWords);
        shuffle(questionWords);
        questionWordsStringified = JSON.stringify(questionWords);
        localStorage.setItem("questions", questionWordsStringified);
        setQuestion();    
    }

const returnWord =()=>{
    let scoreArray = [colorsAsked.W, colorsAsked.U, colorsAsked.B, colorsAsked.R, colorsAsked.G]
    let scoreArrayAsc = scoreArray.sort((a,b)=>{return a - b});
    let lowestValue = scoreArrayAsc[0];
    for(let i = 0; i < questionWords.length; i+=1){
        if(colorsAsked[questionWords[i].cd_color] === lowestValue){
            removedWords = questionWords.splice(i,1);
            questionWords.unshift(removedWords[0]);
            return questionWords[0];
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
    if(!questionWords[0]){
        questionDiv.textContent = "Quiz Complete!";
    } else {
        questionColor = questionWords[0].cd_color;
        questionDiv.textContent = questionWords[0].question;
    }
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
    questionWords.splice(0,1);
            questionWordsStringified = JSON.stringify(questionWords);
            localStorage.setItem("questions", questionWordsStringified);
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