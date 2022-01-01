let questionWords = [{"question":"Acceptance","cd_color":"G"},{"question":"Achievement","cd_color":"B"},{"question":"Adaptability","cd_color":"U"},{"question":"Advantageous","cd_color":"B"},{"question":"Adventure","cd_color":"R"},{"question":"Affection","cd_color":"R"},{"question":"Agreeable","cd_color":"G"},{"question":"Ambition","cd_color":"B"},{"question":"Amorality","cd_color":"B"},{"question":"Analyzing","cd_color":"U"},{"question":"Arrogant","cd_color":"B"},{"question":"Assertive","cd_color":"R"},{"question":"Authenticity","cd_color":"R"},{"question":"Authority","cd_color":"W"},{"question":"Autonomy","cd_color":"B"},{"question":"Balance","cd_color":"G"},{"question":"Being Present","cd_color":"R"},{"question":"Benevolence","cd_color":"W"},{"question":"Boldness","cd_color":"R"},{"question":"Calculating","cd_color":"B"},{"question":"Calm","cd_color":"G"},{"question":"Casual","cd_color":"R"},{"question":"Centered","cd_color":"G"},{"question":"Charm","cd_color":"R"},{"question":"Cold (attitude)","cd_color":"U"},{"question":"Commitment","cd_color":"W"},{"question":"Common sense","cd_color":"G"},{"question":"Community","cd_color":"G"},{"question":"Competitive","cd_color":"B"},{"question":"Complexity","cd_color":"U"},{"question":"Connected","cd_color":"G"},{"question":"Contentment","cd_color":"G"},{"question":"Contribution","cd_color":"W"},{"question":"Cooperation","cd_color":"W"},{"question":"Courage","cd_color":"R"},{"question":"Curiosity","cd_color":"U"},{"question":"Cynical","cd_color":"U"},{"question":"Deception","cd_color":"B"},{"question":"Decisive","cd_color":"W"},{"question":"Dedication","cd_color":"W"},{"question":"Defiance","cd_color":"B"},{"question":"Desire","cd_color":"B"},{"question":"Desire to Know","cd_color":"U"},{"question":"Destiny","cd_color":"G"},{"question":"Discerning","cd_color":"U"},{"question":"Discipline","cd_color":"W"},{"question":"Dominance","cd_color":"B"},{"question":"Earthy","cd_color":"G"},{"question":"Efficiency","cd_color":"U"},{"question":"Ego","cd_color":"B"},{"question":"Emotion","cd_color":"R"},{"question":"Empathy","cd_color":"R"},{"question":"Enthusiasm","cd_color":"R"},{"question":"Exploitation","cd_color":"B"},{"question":"Fairness","cd_color":"W"},{"question":"Flamboyant","cd_color":"R"},{"question":"Focus","cd_color":"U"},{"question":"Formality","cd_color":"W"},{"question":"Fortitude","cd_color":"G"},{"question":"Freedom","cd_color":"R"},{"question":"Friendship","cd_color":"R"},{"question":"Fun","cd_color":"R"},{"question":"Generosity","cd_color":"W"},{"question":"Growth","cd_color":"G"},{"question":"Guardian","cd_color":"W"},{"question":"Guile","cd_color":"U"},{"question":"Harmony","cd_color":"G"},{"question":"Heart","cd_color":"R"},{"question":"Hearty","cd_color":"G"},{"question":"Helpful","cd_color":"W"},{"question":"Honesty","cd_color":"W"},{"question":"Honor","cd_color":"W"},{"question":"Hope","cd_color":"G"},{"question":"Humble","cd_color":"W"},{"question":"Humor","cd_color":"R"},{"question":"Imaginative","cd_color":"U"},{"question":"Impulsive","cd_color":"R"},{"question":"Independent","cd_color":"R"},{"question":"Individuality","cd_color":"R"},{"question":"Influence","cd_color":"B"},{"question":"Instinct","cd_color":"G"},{"question":"Integrity","cd_color":"W"},{"question":"Intuition","cd_color":"G"},{"question":"Inventive","cd_color":"U"},{"question":"Investigative","cd_color":"U"},{"question":"Joy","cd_color":"R"},{"question":"Justice","cd_color":"W"},{"question":"Knowledge","cd_color":"U"},{"question":"Law","cd_color":"W"},{"question":"Leadership","cd_color":"W"},{"question":"Leverage","cd_color":"B"},{"question":"Live and let live","cd_color":"G"},{"question":"Logical","cd_color":"U"},{"question":"Looking to the Future","cd_color":"U"},{"question":"Love","cd_color":"R"},{"question":"Manipulation","cd_color":"B"},{"question":"Mastery","cd_color":"B"},{"question":"Mischievous","cd_color":"R"},{"question":"Morality","cd_color":"W"},{"question":"Natural","cd_color":"G"},{"question":"Neatness","cd_color":"W"},{"question":"No limits","cd_color":"B"},{"question":"Notices the little things","cd_color":"U"},{"question":"Nuance","cd_color":"U"},{"question":"Opportunistic","cd_color":"B"},{"question":"Organization","cd_color":"W"},{"question":"Originality","cd_color":"R"},{"question":"Passion","cd_color":"R"},{"question":"Peace","cd_color":"W"},{"question":"Perfection","cd_color":"U"},{"question":"Performer","cd_color":"R"},{"question":"Persistence","cd_color":"G"},{"question":"Persuasive","cd_color":"U"},{"question":"Poetic","cd_color":"R"},{"question":"Possessions","cd_color":"B"},{"question":"Power","cd_color":"B"},{"question":"Pragmatism","cd_color":"B"},{"question":"Pride","cd_color":"B"},{"question":"Profanity","cd_color":"B"},{"question":"Professional","cd_color":"W"},{"question":"Progress","cd_color":"U"},{"question":"Protective","cd_color":"W"},{"question":"Purity","cd_color":"W"},{"question":"Purpose","cd_color":"R"},{"question":"Questioning","cd_color":"U"},{"question":"Randomness","cd_color":"R"},{"question":"Rational","cd_color":"U"},{"question":"Realistic","cd_color":"B"},{"question":"Reckless","cd_color":"R"},{"question":"Relentless","cd_color":"B"},{"question":"Remorseless","cd_color":"B"},{"question":"Respect","cd_color":"G"},{"question":"Respect for Life","cd_color":"G"},{"question":"Responsibility","cd_color":"W"},{"question":"Romance","cd_color":"R"},{"question":"Ruthless","cd_color":"B"},{"question":"Sacred","cd_color":"W"},{"question":"Scholarly","cd_color":"U"},{"question":"Seeking Meaningfulness","cd_color":"G"},{"question":"Self-Control","cd_color":"W"},{"question":"Self-interest","cd_color":"B"},{"question":"Self-reliant","cd_color":"B"},{"question":"Sensitive","cd_color":"R"},{"question":"Sentiment","cd_color":"R"},{"question":"Serenity","cd_color":"G"},{"question":"Service","cd_color":"W"},{"question":"Significance","cd_color":"G"},{"question":"Simplicity","cd_color":"G"},{"question":"Skepticism","cd_color":"U"},{"question":"Solitary","cd_color":"B"},{"question":"Soul","cd_color":"G"},{"question":"Speculation","cd_color":"U"},{"question":"Spirituality","cd_color":"G"},{"question":"Spontaneous","cd_color":"R"},{"question":"Stability","cd_color":"G"},{"question":"Strategic","cd_color":"U"},{"question":"Stubborn","cd_color":"G"},{"question":"Studious","cd_color":"U"},{"question":"Subtlety","cd_color":"U"},{"question":"Success","cd_color":"B"},{"question":"Supportive","cd_color":"W"},{"question":"Supremacy","cd_color":"B"},{"question":"Talented","cd_color":"G"},{"question":"Teamwork","cd_color":"W"},{"question":"Technologically Fluent","cd_color":"U"},{"question":"Theorizing","cd_color":"U"},{"question":"Tradition","cd_color":"G"},{"question":"Trustworthy","cd_color":"W"},{"question":"Truth","cd_color":"U"},{"question":"Uninhibited","cd_color":"B"},{"question":"Valuing High Quality","cd_color":"U"},{"question":"Virtue","cd_color":"W"},{"question":"Willing to let go","cd_color":"G"},{"question":"Winning","cd_color":"B"},{"question":"Wisdom","cd_color":"G"},{"question":"Wordplay","cd_color":"U"}]
let colorGroups =[{"quick_name":"Abzan","color_group":["w","b","g"]},{"quick_name":"Azorius","color_group":["w","u"]},{"quick_name":"Bant","color_group":["w","u","g"]},{"quick_name":"Boros","color_group":["w","r"]},{"quick_name":"Dimir","color_group":["u","b"]},{"quick_name":"Esper","color_group":["w","u","b"]},{"quick_name":"Golgari","color_group":["b","g"]},{"quick_name":"Grixis","color_group":["u","b","r"]},{"quick_name":"Gruul","color_group":["r","g"]},{"quick_name":"Izzet","color_group":["u","r"]},{"quick_name":"Jeskai","color_group":["w","u","r"]},{"quick_name":"Jund","color_group":["b","r","g"]},{"quick_name":"Mardu","color_group":["w","b","r"]},{"quick_name":"Mono Black","color_group":["b"]},{"quick_name":"Mono Blue","color_group":["u"]},{"quick_name":"Mono Green","color_group":["g"]},{"quick_name":"Mono Red","color_group":["r"]},{"quick_name":"Mono White","color_group":["u"]},{"quick_name":"Multicolored","color_group":["w","u","b","r","g"]},{"quick_name":"Naya","color_group":["w","r","g"]},{"quick_name":"Orzhov","color_group":["w","b"]},{"quick_name":"Rakdos","color_group":["b","r"]},{"quick_name":"Selesnya","color_group":["w","g"]},{"quick_name":"Simic","color_group":["u","g"]},{"quick_name":"Sultai","color_group":["u","b","g"]},{"quick_name":"Temur","color_group":["u","r","g"]}];
let topResults;
let resultMostLike;
let selectorsQuestionWords = document.getElementById('question-words');
let selectorsColorGroups = document.getElementById('color-groups');
let wordSelects = document.querySelectorAll(".word-select");
let colorSelects = document.querySelectorAll(".color-select");
//Chart.register(ChartDataLabels);

window.onload = ()=>{
    for(let i = 0; i < questionWords.length; i+=1){
        let wordDiv = document.createElement('div');
        let colorDiv = document.createElement('div');
        let questionContainer = document.createElement('div');
        questionContainer.className ='question-container';
        wordDiv.className = 'question-word-div'
        colorDiv.className = 'color-type-div';
        wordDiv.innerText = questionWords[i].question;
        colorDiv.innerText = questionWords[i].cd_color;
        questionContainer.appendChild(wordDiv);
        questionContainer.appendChild(colorDiv);
        document.getElementById('question-words').appendChild(questionContainer);
    }
    for(let i = 0; i < colorGroups.length; i+=1){
        let resultDiv = document.createElement('div');
        let colorArrayDiv = document.createElement('div');
        let resultContainer = document.createElement('div');
        resultContainer.className ='result-container';
        resultDiv.className = 'result-group-div'
        colorArrayDiv.classList.add('color-array-div');
        colorArrayDiv.classList.add('flex-end');
        resultDiv.innerText = colorGroups[i].quick_name;
            for(let e = 0 ; e < colorGroups[i].color_group.length; e+=1){
                colorArrayDiv.innerText += `  ${colorGroups[i].color_group[e].toUpperCase()}`;
            }
            resultContainer.appendChild(resultDiv);
            resultContainer.appendChild(colorArrayDiv);
            document.getElementById('color-groups').appendChild(resultContainer);
    }
    for(let i=0; i < wordSelects.length; i+=1){
        let select = wordSelects[i];
        for(let i = 0; i < questionWords.length; i+=1){
            option  = document.createElement("option");
            option.text = `${questionWords[i].question}`;
            select.add(option);
        }
    }
    for(let i=0; i < colorSelects.length; i+=1){
        let select = colorSelects[i];
        for(let i = 0; i < colorGroups.length; i+=1){
            option  = document.createElement("option");
            option.text = `${colorGroups[i].quick_name}`;
            select.add(option);
        }
    }
}

Chart.defaults.font.size = 13;

  let orderedColors = {
        Abzan: "darkolivegreen",
        Azorius: "lightskyblue", 
        Bant: "lightseagreen", 
        Boros: "lightcoral", 
        Dimir: "darkblue", 
        Esper: "lightslategray", 
        Golgari: "darkolivegreen",
        Grixis: "darkorchid",
        Gruul: "peru",
        Izzet: "mediumslateblue",
        Jeskai: "lavender",
        Jund: "sienna",
        Mardu: "brown",
        MonoBlack: "black",
        MonoBlue: "blue",
        MonoGreen: "green",
        MonoRed: "red",
        MonoWhite: "white",
        Multicolored: "grey",
        Naya: "goldenrod",
        Orzhov: "darkgrey",
        Rakdos: "maroon",
        Selesnya: "palegreen",
        Simic: "mediumaquamarine",
        Sultai: "darkslategrey",
        Temur: "silver"
    }


let colorScheme = [];

const orderColors=(chartColors)=>{
    colorScheme = [];
    for(let i =0 ; i < chartColors.length ; i++){
        colorScheme.push(orderedColors[chartColors[i]])
    }
}

// most / least popular words
// most / least defining words
// most / least aligned words
// most / least popular colors
// box and whisker plot of color type value averages for each result color

const storeResult =(name, newData) =>{
    if(!!localStorage.getItem(name)){
        let storageItem = JSON.parse(localStorage.getItem(name));
        storageItem.push(newData);
        localStorage.setItem(name, JSON.stringify(storageItem))
    }else{
        let newItem = []
        newItem.push(newData);
        localStorage.setItem(name, JSON.stringify(newItem))
    }
}

const checkStorage = (name, question_word) =>{
    let storageItem = JSON.parse(localStorage.getItem(name));
    let storageReturn;
    if(!!storageItem){
        if(name === "topResults"){
            storageReturn = storageItem[0];
        } 
        else {
            for(let i=0; i < storageItem.length; i +=1){
                if(storageItem[i].question_word === question_word){
                    storageReturn = storageItem[i];
                    break;
                }
            }
        }
    }
    return storageReturn;
}

const loadingToggle =(container)=>{
    let loaded = container.querySelector(".loading");
    if(!!loaded){
        loaded.remove();
    }else{
        let loading = document.createElement("div");
        loading.className = "loading";
        let spinner = document.createElement("div");
        spinner.className = "lds-spinner";
        for(let i = 0; i < 12; i+=1){
            let spoke = document.createElement("div")
            spinner.appendChild(spoke);
        }
        loading.appendChild(spinner);
        container.appendChild(loading);
    }
}

let fiveColorRadarSearch = { question_word: '' };
let responseObject;
const getfiveColorRadar=()=>{
    document.getElementById('fiveColorRadarChart').remove(); 
    let container = document.getElementById('fiveColorRadarChartContainer').parentElement;
    const question_word = document.getElementById('fiveColorRadarSearch').value;
    let storageReturn = checkStorage("fiveColorRadar", question_word);
    if(storageReturn){
        buildFiveColorRadar(storageReturn.data, storageReturn.question_word)
    }else{
        buttonToggle("fiveColorRadar");
        loadingToggle(container);
        fiveColorRadarSearch.question_word = question_word;
        fetch('/charts/fiveColorRadar',{
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(fiveColorRadarSearch)
        })
        .then(response => response.json())
        .then(data => {
            buttonToggle();
            loadingToggle(container);
            let chartData = data.rows;
            let chartObject = {
                data: chartData,
                question_word: question_word
            }
            storeResult("fiveColorRadar", chartObject);
            buildFiveColorRadar(chartData, question_word);
        })
    }
}
const buildFiveColorRadar = (fiveColorRadar, question_word) =>{
    let canvas = document.createElement('canvas');
    canvas.id = 'fiveColorRadarChart';
    document.getElementById('fiveColorRadarChartContainer').append(canvas);
    let white_counter = (fiveColorRadar[4].percentage);
    let blue_counter = (fiveColorRadar[1].percentage);
    let black_counter = (fiveColorRadar[0].percentage);
    let red_counter = (fiveColorRadar[3].percentage);
    let green_counter = (fiveColorRadar[2].percentage);
    let colorCounterArray = [
        {name: 'white', count: white_counter},
        {name: 'blue', count: blue_counter},
        {name: 'black', count: black_counter},
        {name: 'red', count: red_counter},
        {name: 'green', count: green_counter}
    ];
    colorCounterArray.sort((a,b)=> b.count - a.count);
    var ctx = document.getElementById('fiveColorRadarChart').getContext('2d');
    window.fiveColorRadar = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['White', 'Blue', 'Black', 'Red', 'Green'],
          datasets: [{
              label: question_word,
              backgroundColor: colorCounterArray[0].name,
              borderColor: colorCounterArray[1].name,
              borderWidth: 3,
              data: [`${(white_counter*100).toFixed(1)}`, `${(blue_counter*100).toFixed(1)}`, `${(black_counter*100).toFixed(1)}`, `${(red_counter*100).toFixed(1)}`, `${(green_counter*100).toFixed(1)}`]
          }]
          // second dataset to show the percentage of the result color popularity
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `${question_word} Radar Graph`
            },
            scales: {
                r: {
                    angleLines: {
                        display: false
                    },
                    // suggestedMin: 20,
                    // suggestedMax: 90
                }
            },
            plugins:{
                datalabels: {
                    backgroundColor: 'black',
                    color: 'white',
                    weight: 'bold',
                    formatter: Math.round,
                    formatter: function(value, context) {
                        return context.chart.data.labels[context.value];
                    }
                }
            }
        }
    })
}

const getTopResults=()=>{
    let storageReturn = checkStorage("topResults", "all");
    document.getElementById('topResultsChart').remove(); 
    let container = document.getElementById('topResultsChartContainer').parentElement;
    if(storageReturn){
        buildTopResults(storageReturn.data, storageReturn.question_word)
    }else{
        buttonToggle();
        loadingToggle(container);
        fetch('/charts/topResults')
        .then(response => response.json())
        .then(data => {
            buttonToggle();
            loadingToggle(container);
                let chartData = data.rows;
                let chartObject = {
                    data: chartData,
                    question_word: "all"
                }
                storeResult("topResults", chartObject);
                buildTopResults(chartData);
            })
    }
}
const buildTopResults=(topResults)=>{
    let canvas = document.createElement('canvas');
    canvas.id = 'topResultsChart';
    document.getElementById('topResultsChartContainer').append(canvas);
        let count = [];
        let resultColor =[];
        let totalUsers = [];
        let chartColors = [];
        for(let i = 0; i<topResults.length; i+=1){
            count.push(topResults[i].user_count);
            resultColor.push(topResults[i].quick_name);
            totalUsers.push(topResults[i].total_users);

            chartColors.push((topResults[i].quick_name).replace(/\s/g, ''));
        }
        orderColors(chartColors);
        var ctx = document.getElementById('topResultsChart').getContext('2d');
        window.topResults = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: resultColor,
              datasets: [{
                  label: 'Total Results',
                  backgroundColor: colorScheme,
                  borderColor: 'black',
                  borderWidth: 1,
                  data: count
              }
            ]
          },
            options: {
                maintainAspectRatio: false,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Top Quiz Results'
                }
            }
        })
    }

const resultMostLikeSearch = { question_word: '' };
const getResultMostLike=()=>{
    const question_word = document.getElementById('resultMostLikeSearch').value;
    document.getElementById('resultMostLikeChart').remove(); 
    let container = document.getElementById('resultMostLikeChartContainer').parentElement;
    let storageReturn = checkStorage("resultsMostLike", question_word);
    if(storageReturn){
        buildResultMostLike(storageReturn.data, storageReturn.question_word)
    }else{
        resultMostLikeSearch.question_word = question_word;
        buttonToggle();
        loadingToggle(container);
        fetch('/charts/resultMostLike',{
            method: 'POST',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(resultMostLikeSearch)
        })
        .then(response => response.json())
        .then(data => {
            buttonToggle();
            loadingToggle(container);
            let chartData = data.rows;
            let chartObject = {
                data: chartData,
                question_word: question_word
            }
            storeResult("resultsMostLike", chartObject);
            buildResultMostLike(chartData, question_word);
        })
    }
}
const buildResultMostLike=(resultMostLike, question_word)=>{
    let canvas = document.createElement('canvas');
    canvas.id = 'resultMostLikeChart';
    document.getElementById('resultMostLikeChartContainer').append(canvas);
    let count = [];
        let resultColor =[];
        let chartColors = [];
        for(let i = 0; i<resultMostLike.length; i+=1){
            count.push((resultMostLike[i].percent_difference * 100).toFixed(1));
            resultColor.push(resultMostLike[i].quick_name);
            
            chartColors.push((resultMostLike[i].quick_name).replace(/\s/g, ''));
        }
        orderColors(chartColors);
        var ctx = document.getElementById('resultMostLikeChart').getContext('2d');
        window.resultMostLike = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: resultColor,
              datasets: [{
                  label: question_word,
                  backgroundColor: colorScheme,
                  borderColor: "black",
                  borderWidth: 1,
                  data: count
              }]
              // second dataset to show the percentage of the result color popularity
          },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: `Results most like "${question_word}"`
                }
            }
        })
}
let resultLeastLikeSearch = { question_word: '' };
const getResultLeastLike=()=>{
    const question_word = document.getElementById('resultLeastLikeSearch').value;
    document.getElementById('resultLeastLikeChart').remove(); 
    let container = document.getElementById('resultLeastLikeChartContainer').parentElement;
    let storageReturn = checkStorage("resultsLeastLike", question_word);
    if(storageReturn){
        buildResultLeastLike(storageReturn.data, storageReturn.question_word)
    }else{
    resultLeastLikeSearch.question_word = question_word;
    buttonToggle();
    loadingToggle(container);
    fetch('/charts/resultLeastLike',{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(resultLeastLikeSearch)
        })
        .then(response => response.json())
        .then(data => {
            buttonToggle();
            loadingToggle(container);
            let chartData = data.rows;
            let chartObject = {
                data: chartData,
                question_word: question_word
            }
            storeResult("resultsLeastLike", chartObject);
            buildResultLeastLike(chartData, question_word);
        })
    }
}
const buildResultLeastLike=(resultLeastLike, question_word)=>{
    let canvas = document.createElement('canvas');
    canvas.id = 'resultLeastLikeChart';
    document.getElementById('resultLeastLikeChartContainer').append(canvas);
    let count = [];
    let resultColor =[];
    let chartColors = [];
    for(let i = 0; i<resultLeastLike.length; i+=1){
        count.push((resultLeastLike[i].percent_difference * 100).toFixed(1));
        resultColor.push(resultLeastLike[i].quick_name);
        
        chartColors.push((resultLeastLike[i].quick_name).replace(/\s/g, ''));
    }
    orderColors(chartColors);
    var ctx = document.getElementById('resultLeastLikeChart').getContext('2d');
    window.resultLeastLike = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resultColor,
          datasets: [{
              label: question_word,
              backgroundColor: colorScheme,
              borderColor: "black",
              borderWidth: 1,
              data: count
          }]
          // second dataset to show the percentage of the result color popularity
      },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `Results least like "${question_word}"`
            }
        }
    })
}
let topWordsForResultSearch = { question_word: '' };
const getTopWordsForResult=()=>{
    const question_word = document.getElementById('topWordsForResultSearch').value;
    document.getElementById('topWordsForResultChart').remove(); 
    let storageReturn = checkStorage("topWordsForResult", question_word);
    let container = document.getElementById('topWordsForResultChartContainer').parentElement;
    if(storageReturn){
        buildTopWordsForResult(storageReturn.data, storageReturn.question_word)
    }else{
        buttonToggle();
        loadingToggle(container);
        topWordsForResultSearch.question_word = question_word;
        fetch('/charts/topWordsForResult',{
            method: 'POST',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(topWordsForResultSearch)
        })
        .then(response => response.json())
        .then(data => {
            buttonToggle();
            loadingToggle(container);
            let chartData = data.rows;
            let chartObject = {
                data: chartData,
                question_word: question_word
            }
            storeResult("topWordsForResult", chartObject);
            buildTopWordsForResult(chartData, question_word);
        })
    }
}
const buildTopWordsForResult=(topWordsForResult, question_word)=>{
    let canvas = document.createElement('canvas');
    canvas.id = 'topWordsForResultChart';
    document.getElementById('topWordsForResultChartContainer').append(canvas);
    let count = [];
        let resultColor = [];
        let barColor = [];
        for(let i = 0; i<topWordsForResult.length; i+=1){
            count.push((topWordsForResult[i].percentage * 100).toFixed(1));
            resultColor.push(topWordsForResult[i].question_word);
            if(topWordsForResult[i].color_type_key == 'w'){
                barColor.push('white')
            }
            if(topWordsForResult[i].color_type_key == 'u'){
                barColor.push('blue')
            }
            if(topWordsForResult[i].color_type_key == 'b'){
                barColor.push('black')
            }
            if(topWordsForResult[i].color_type_key == 'r'){
                barColor.push('red')
            }
            if(topWordsForResult[i].color_type_key == 'g'){
                barColor.push('green')
            }
        }
        var ctx = document.getElementById('topWordsForResultChart').getContext('2d');
        window.topWordsForResult = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: resultColor,
              datasets: [{
                  label: question_word,
                  backgroundColor: barColor,
                  borderColor: "black",
                  borderWidth: 1,
                  data: count
              }]
              // second dataset to show the percentage of the result color popularity
          },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: `${question_word} Profile Top Words`
                }
            }
        })
}
let bottomWordsForResultSearch = { question_word: '' };
const getBottomWordsForResult=()=>{
    document.getElementById('bottomWordsForResultChart').remove(); 
    let container =document.getElementById('bottomWordsForResultChartContainer').parentElement;
    const question_word = document.getElementById('bottomWordsForResultSearch').value;
    let storageReturn = checkStorage("bottomWordsForResult", question_word);
    if(storageReturn){
        buildBottomWordsForResult(storageReturn.data, storageReturn.question_word)
    }else{
        buttonToggle();
        loadingToggle(container);
        bottomWordsForResultSearch.question_word = question_word;
        fetch('/charts/bottomWordsForResult',{
            method: 'POST',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(bottomWordsForResultSearch)
        })
        .then(response => response.json())
        .then(data => {
            buttonToggle();
            loadingToggle(container);
            let chartData = data.rows;
            let chartObject = {
                data: chartData,
                question_word: question_word
            }
            storeResult("bottomWordsForResult", chartObject);
            buildBottomWordsForResult(chartData, question_word);
        })
    }
}
const buildBottomWordsForResult=(bottomWordsForResult, question_word)=>{
    let canvas = document.createElement('canvas');
    canvas.id = 'bottomWordsForResultChart';
    document.getElementById('bottomWordsForResultChartContainer').append(canvas);
    let count = [];
    let resultColor =[];
    let barColor = [];
    for(let i = 0; i<bottomWordsForResult.length; i+=1){
        count.push((bottomWordsForResult[i].percentage * 100).toFixed(1));
        resultColor.push(bottomWordsForResult[i].question_word);
        if(bottomWordsForResult[i].color_type_key == 'w'){
            barColor.push('white')
        }
        if(bottomWordsForResult[i].color_type_key == 'u'){
            barColor.push('blue')
        }
        if(bottomWordsForResult[i].color_type_key == 'b'){
            barColor.push('black')
        }
        if(bottomWordsForResult[i].color_type_key == 'r'){
            barColor.push('red')
        }
        if(bottomWordsForResult[i].color_type_key == 'g'){
            barColor.push('green')
        }
    }
    var ctx = document.getElementById('bottomWordsForResultChart').getContext('2d');
    window.bottomWordsForResult = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resultColor,
          datasets: [{
              label: question_word,
              backgroundColor: barColor,
              borderColor: "black",
              borderWidth: 1,
              data: count
          }]
          // second dataset to show the percentage of the result color popularity
      },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `${question_word} Profile Bottom Words`
            }
        }
    })
}
let colorpieSlicesSearch = { question_word: '' };
const getColorpieSlices=()=>{
    document.getElementById('resultColorpieSlicesChart').remove(); 
    let container = document.getElementById('resultColorpieSlicesChartContainer').parentElement;
    const question_word = document.getElementById('resultColorpieSlicesSearch').value;
    colorpieSlicesSearch.question_word = question_word;
    let storageReturn = checkStorage("colorpieSlices", question_word);
    if(storageReturn){
        buildColorPieSlices(storageReturn.data, storageReturn.question_word)
    }else{
        buttonToggle();
        loadingToggle(container);
    fetch('/charts/resultColorpieSlices',{
        method: 'POST',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(colorpieSlicesSearch)
    })
    .then(response => response.json())
        .then(data => {
            buttonToggle();
            loadingToggle(container);
            let chartData = data.rows;
            let chartObject = {
                data: chartData,
                question_word: question_word
            }
            storeResult("colorpieSlices", chartObject);
            buildColorPieSlices(chartData, question_word);
        })
    }
}
const buildColorPieSlices=(colorpieSlices, question_word)=>{
    let canvas = document.createElement('canvas');
    canvas.id = 'resultColorpieSlicesChart';
    document.getElementById('resultColorpieSlicesChartContainer').append(canvas);
    let white_counter = (colorpieSlices[0].white_counter / colorpieSlices[0].total_counter).toFixed(3);
    let blue_counter = (colorpieSlices[0].blue_counter / colorpieSlices[0].total_counter).toFixed(3);
    let black_counter = (colorpieSlices[0].black_counter / colorpieSlices[0].total_counter).toFixed(3);
    let red_counter = (colorpieSlices[0].red_counter / colorpieSlices[0].total_counter).toFixed(3);
    let green_counter = (colorpieSlices[0].green_counter / colorpieSlices[0].total_counter).toFixed(3);

    let colorCounterArray = [
        {name: 'white', count: white_counter},
        {name: 'blue', count: blue_counter},
        {name: 'black', count: black_counter},
        {name: 'red', count: red_counter},
        {name: 'green', count: green_counter}
    ];
    colorCounterArray.sort((a,b)=> b.count - a.count);
    var ctx = document.getElementById('resultColorpieSlicesChart').getContext('2d');
    window.colorpieSlices = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: [colorCounterArray[0].name, colorCounterArray[1].name, colorCounterArray[2].name, colorCounterArray[3].name, colorCounterArray[4].name],
          datasets: [{
            backgroundColor: [colorCounterArray[0].name, colorCounterArray[1].name, colorCounterArray[2].name, colorCounterArray[3].name, colorCounterArray[4].name],
            borderColor: 'black',
            borderWidth: 3,
              label: question_word,
              data: [`${(colorCounterArray[0].count*100).toFixed(1)}`, `${(colorCounterArray[1].count*100).toFixed(1)}`, `${(colorCounterArray[2].count*100).toFixed(1)}`, `${(colorCounterArray[3].count*100).toFixed(1)}`, `${(colorCounterArray[4].count*100).toFixed(1)}`]
          }]
          // second dataset to show the percentage of the result color popularity
      },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `${question_word} Color Pie`
            }
        }
    })
}



function randomScalingFactor(){
    return Math.floor(Math.random() * Math.floor(25))
}

function randomQuestionWord(e){
    num = Math.floor(Math.random() * Math.floor(questionWords.length));
    let eventId = e.id.slice(0,-6);
    const question_word = document.getElementById(`${eventId}Search`);
    question_word.value = questionWords[num].question;
}
function randomColorGroup(e){
    num = Math.floor(Math.random() * Math.floor(colorGroups.length));
    let eventId = e.id.slice(0,-6);
    const question_word = document.getElementById(`${eventId}Search`);
    question_word.value = colorGroups[num].quick_name;
}


function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }



const buttons = document.querySelectorAll(".query");
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function(){buttonToggle()});
// }
function buttonToggle(){
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("disabled-button");
    }
}
