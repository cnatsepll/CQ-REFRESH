let questionWords;
let colorGroups;
let topResults;
let resultMostLike;
let selectorsQuestionWords = document.getElementById('question-words');
let selectorsColorGroups = document.getElementById('color-groups');
//Chart.register(ChartDataLabels);

window.onload = ()=>{
    fetch('/charts/listAllQuestionWords')
    .then(response => response.json())
    .then(response => {questionWords = response.rows;})
    .then(()=>{
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
    });
    
    fetch('/charts/listAllColorGroups')
    .then(response => response.json())
    .then(response => {colorGroups = response.rows;})
    .then(()=>{
        colorGroups.sort(compareValues('quick_name', 'asc'));
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
    });

    fetch('/charts/getTotalResults')
    .then(response => response.json())
    .then(response => {results = response.rows;})
    .then(()=>{
        document.querySelector('#total-results').textContent = results[0].estimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });
    fetch('/charts/getTotalAnswers')
    .then(response => response.json())
    .then(response => {answers = response.rows;})
    .then(()=>{
        document.querySelector('#total-answers').textContent = answers[0].estimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });
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

function orderColors(chartColors){
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

function getTopResults(){
    fetch('/charts/topResults')
    .then(response => response.json())
    .then(data => {topResults = data;})
    .then(()=>{
        buttonToggle();
        let count = [];
        let resultColor =[];
        let totalUsers = [];
        let chartColors = [];
        for(let i = 0; i<topResults.rows.length; i+=1){
            count.push(topResults.rows[i].user_count);
            resultColor.push(topResults.rows[i].quick_name);
            totalUsers.push(topResults.rows[i].total_users);

            chartColors.push((topResults.rows[i].quick_name).replace(/\s/g, ''));
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
    })
}

const resultMostLikeSearch = { question_word: '' };
function getResultMostLike(){
    const question_word = document.getElementById('resultMostLikeSearch').value;
    resultMostLikeSearch.question_word = question_word;
    document.getElementById('resultMostLikeChart').remove(); 
    let canvas = document.createElement('canvas');
    canvas.id = 'resultMostLikeChart';
    document.getElementById('resultMostLikeChartContainer').append(canvas);
    fetch('/charts/resultMostLike',{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(resultMostLikeSearch)
      })
    .then(response => response.json())
    .then(data => {resultMostLike = data;})
    .then(()=>{
        buttonToggle();
        let count = [];
        let resultColor =[];
        let chartColors = [];
        for(let i = 0; i<resultMostLike.rows.length; i+=1){
            count.push((resultMostLike.rows[i].percent_difference * 100).toFixed(1));
            resultColor.push(resultMostLike.rows[i].quick_name);
            
            chartColors.push((resultMostLike.rows[i].quick_name).replace(/\s/g, ''));
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
        window.resultMostLike.update()
    })
    .catch((error) => {
        console.error('Error:', error);
      })
}
let resultLeastLikeSearch = { question_word: '' };
function getResultLeastLike(){
    const question_word = document.getElementById('resultLeastLikeSearch').value;
    resultLeastLikeSearch.question_word = question_word;
    document.getElementById('resultLeastLikeChart').remove(); 
    let canvas = document.createElement('canvas');
    canvas.id = 'resultLeastLikeChart';
    document.getElementById('resultLeastLikeChartContainer').append(canvas);
    fetch('/charts/resultLeastLike',{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(resultLeastLikeSearch)
    })
    .then(response => response.json())
    .then(data => {resultLeastLike = data;})
    .then(()=>{
        buttonToggle();
        let count = [];
        let resultColor =[];
        let chartColors = [];
        for(let i = 0; i<resultLeastLike.rows.length; i+=1){
            count.push((resultLeastLike.rows[i].percent_difference * 100).toFixed(1));
            resultColor.push(resultLeastLike.rows[i].quick_name);
            
            chartColors.push((resultLeastLike.rows[i].quick_name).replace(/\s/g, ''));
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
    })
}

let topWordsForResultSearch = { question_word: '' };
function getTopWordsForResult(){
    const question_word = document.getElementById('topWordsForResultSearch').value;
    topWordsForResultSearch.question_word = question_word;
    document.getElementById('topWordsForResultChart').remove(); 
    let canvas = document.createElement('canvas');
    canvas.id = 'topWordsForResultChart';
    document.getElementById('topWordsForResultChartContainer').append(canvas);
    fetch('/charts/topWordsForResult',{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(topWordsForResultSearch)
    })
    .then(response => response.json())
    .then(data => {topWordsForResult = data;})
    .then(()=>{
        buttonToggle();
        let count = [];
        let resultColor = [];
        let barColor = [];
        for(let i = 0; i<topWordsForResult.rows.length; i+=1){
            count.push((topWordsForResult.rows[i].percentage * 100).toFixed(1));
            resultColor.push(topWordsForResult.rows[i].question_word);
            if(topWordsForResult.rows[i].color_type_key == 'w'){
                barColor.push('white')
            }
            if(topWordsForResult.rows[i].color_type_key == 'u'){
                barColor.push('blue')
            }
            if(topWordsForResult.rows[i].color_type_key == 'b'){
                barColor.push('black')
            }
            if(topWordsForResult.rows[i].color_type_key == 'r'){
                barColor.push('red')
            }
            if(topWordsForResult.rows[i].color_type_key == 'g'){
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
    })
}
let bottomWordsForResultSearch = { question_word: '' };
function getBottomWordsForResult(){
    const question_word = document.getElementById('bottomWordsForResultSearch').value;
    bottomWordsForResultSearch.question_word = question_word;
    document.getElementById('bottomWordsForResultChart').remove(); 
    let canvas = document.createElement('canvas');
    canvas.id = 'bottomWordsForResultChart';
    document.getElementById('bottomWordsForResultChartContainer').append(canvas);
    fetch('/charts/bottomWordsForResult',{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bottomWordsForResultSearch)
    })
    .then(response => response.json())
    .then(data => {bottomWordsForResult = data;})
    .then(()=>{
        buttonToggle();
        let count = [];
        let resultColor =[];
        let barColor = [];
        for(let i = 0; i<bottomWordsForResult.rows.length; i+=1){
            count.push((bottomWordsForResult.rows[i].percentage * 100).toFixed(1));
            resultColor.push(bottomWordsForResult.rows[i].question_word);
            if(bottomWordsForResult.rows[i].color_type_key == 'w'){
                barColor.push('white')
            }
            if(bottomWordsForResult.rows[i].color_type_key == 'u'){
                barColor.push('blue')
            }
            if(bottomWordsForResult.rows[i].color_type_key == 'b'){
                barColor.push('black')
            }
            if(bottomWordsForResult.rows[i].color_type_key == 'r'){
                barColor.push('red')
            }
            if(bottomWordsForResult.rows[i].color_type_key == 'g'){
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
    })
}
let fiveColorRadarSearch = { question_word: '' };
let responseObject;
function getfiveColorRadar(){
    const question_word = document.getElementById('fiveColorRadarSearch').value;
    fiveColorRadarSearch.question_word = question_word;
    document.getElementById('fiveColorRadarChart').remove(); 
    let canvas = document.createElement('canvas');
    canvas.id = 'fiveColorRadarChart';
    document.getElementById('fiveColorRadarChartContainer').append(canvas);
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
        fiveColorRadar = data;
        // let white_counter = (fiveColorRadar.rows[0].white_counter / (parseInt(fiveColorRadar.rows[1].white_counter)));
        // let blue_counter = (fiveColorRadar.rows[0].blue_counter / (parseInt(fiveColorRadar.rows[1].blue_counter)));
        // let black_counter = (fiveColorRadar.rows[0].black_counter / (parseInt(fiveColorRadar.rows[1].black_counter)));
        // let red_counter = (fiveColorRadar.rows[0].red_counter / (parseInt(fiveColorRadar.rows[1].red_counter)));
        // let green_counter = (fiveColorRadar.rows[0].green_counter / (parseInt(fiveColorRadar.rows[1].green_counter)));
        let white_counter = (fiveColorRadar.rows[4].percentage);
        let blue_counter = (fiveColorRadar.rows[1].percentage);
        let black_counter = (fiveColorRadar.rows[0].percentage);
        let red_counter = (fiveColorRadar.rows[3].percentage);
        let green_counter = (fiveColorRadar.rows[2].percentage);
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
    })
}
let colorpieSlicesSearch = { question_word: '' };
function getColorpieSlices(){
    const question_word = document.getElementById('resultColorpieSlicesSearch').value;
    colorpieSlicesSearch.question_word = question_word;
    document.getElementById('resultColorpieSlicesChart').remove(); 
    let canvas = document.createElement('canvas');
    canvas.id = 'resultColorpieSlicesChart';
    document.getElementById('resultColorpieSlicesChartContainer').append(canvas);
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
        let colorpieSlices = data;
        let white_counter = (colorpieSlices.rows[0].white_counter / colorpieSlices.rows[0].total_counter).toFixed(3);
        let blue_counter = (colorpieSlices.rows[0].blue_counter / colorpieSlices.rows[0].total_counter).toFixed(3);
        let black_counter = (colorpieSlices.rows[0].black_counter / colorpieSlices.rows[0].total_counter).toFixed(3);
        let red_counter = (colorpieSlices.rows[0].red_counter / colorpieSlices.rows[0].total_counter).toFixed(3);
        let green_counter = (colorpieSlices.rows[0].green_counter / colorpieSlices.rows[0].total_counter).toFixed(3);

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
                    text: `${question_word} Radar Graph`
                }
            }
        })
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
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){buttonToggle()});
}
function buttonToggle(){
    for (let i = 0; i < buttons.length; i++) {
        console.log("button")
        buttons[i].classList.toggle("disabled-button");
    }
}
