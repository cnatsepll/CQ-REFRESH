let questionWords;
let colorGroups;
let topResults;
let resultMostLike;


window.onload = ()=>{
    fetch('/charts/listAllQuestionWords')
    .then(response => response.json())
    .then(data => {questionWords = data;});
    
    fetch('/charts/listAllColorGroups')
    .then(response => response.json())
    .then(data => {colorGroups = data;});
}



function getTopResults(){
    fetch('/charts/topResults')
    .then(response => response.json())
    .then(data => {topResults = data;})
    .then(()=>{
        console.log(topResults)
        let count = [];
        let resultColor =[];
        let totalUsers = [];
        for(let i = 0; i<topResults.rows.length; i+=1){
            count.push(topResults.rows[i].user_count);
            resultColor.push(topResults.rows[i].quick_name);
            totalUsers.push(topResults.rows[i].total_users)
        }
        console.log(count);
        var ctx = document.getElementById('topResultsChart').getContext('2d');
        window.topResults = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: resultColor,
              datasets: [{
                  label: 'color total',
                  backgroundColor: "rgb(255,0,0)",
                  borderColor: "rgb(255,0,0)",
                  borderWidth: 1,
                  data: count
              }
            ]
          },
            options: {
                responsive: true,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Top Quiz Results'
                },
                scales: {
                    xAxes: [{
                        display: true,
                    }],
                    yAxes: [{
                        display: true,
                        type: 'linear',
                    }]
                }
            }
        })
    })
}
function getTopResultsDetailed(){
    fetch('/charts/topResultsDetailed')
    .then(response => response.json())
    .then(data => {topResults = data;})
    .then(()=>{
        console.log(topResults)
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
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resultMostLikeSearch)
      })
    .then(response => response.json())
    .then(data => {resultMostLike = data;})
    .then(()=>{
        console.log(resultMostLike)
        let count = [];
        let resultColor =[];
        for(let i = 0; i<resultMostLike.rows.length; i+=1){
            count.push(resultMostLike.rows[i].percent_difference);
            resultColor.push(resultMostLike.rows[i].quick_name);
        }
        console.log(count);
        var ctx = document.getElementById('resultMostLikeChart').getContext('2d');
        window.resultMostLike = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: resultColor,
              datasets: [{
                  label: 'Dataset 1',
                  backgroundColor: "rgb(0,0,255)",
                  borderColor: "rgb(0,0,255)",
                  borderWidth: 1,
                  data: count
              }]
              // second dataset to show the percentage of the result color popularity
          },
            options: {
                responsive: true,
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
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resultLeastLikeSearch)
    })
    .then(response => response.json())
    .then(data => {resultLeastLike = data;})
    .then(()=>{
        console.log(resultLeastLike)
        let count = [];
        let resultColor =[];
        for(let i = 0; i<resultLeastLike.rows.length; i+=1){
            count.push(resultLeastLike.rows[i].percent_difference);
            resultColor.push(resultLeastLike.rows[i].quick_name);
        }
        console.log(count);
        var ctx = document.getElementById('resultLeastLikeChart').getContext('2d');
        window.resultLeastLike = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: resultColor,
              datasets: [{
                  label: 'Dataset 1',
                  backgroundColor: "rgb(0,255,0)",
                  borderColor: "rgb(0,255,0)",
                  borderWidth: 1,
                  data: count
              }]
              // second dataset to show the percentage of the result color popularity
          },
            options: {
                responsive: true,
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
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(topWordsForResultSearch)
    })
    .then(response => response.json())
    .then(data => {topWordsForResult = data;})
    .then(()=>{
        console.log(topWordsForResult)
        let count = [];
        let resultColor =[];
        for(let i = 0; i<topWordsForResult.rows.length; i+=1){
            count.push(topWordsForResult.rows[i].sum);
            resultColor.push(topWordsForResult.rows[i].question_word);
        }
        console.log(count);
        var ctx = document.getElementById('topWordsForResultChart').getContext('2d');
        window.topWordsForResult = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: resultColor,
              datasets: [{
                  label: 'Dataset 1',
                  backgroundColor: "rgb(255,255,0)",
                  borderColor: "rgb(255,255,0)",
                  borderWidth: 1,
                  data: count
              }]
              // second dataset to show the percentage of the result color popularity
          },
            options: {
                responsive: true,
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
        console.log(bottomWordsForResult)
        let count = [];
        let resultColor =[];
        for(let i = 0; i<bottomWordsForResult.rows.length; i+=1){
            count.push(bottomWordsForResult.rows[i].sum);
            resultColor.push(bottomWordsForResult.rows[i].question_word);
        }
        console.log(count);
        var ctx = document.getElementById('bottomWordsForResultChart').getContext('2d');
        window.bottomWordsForResult = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: resultColor,
              datasets: [{
                  label: 'Dataset 1',
                  backgroundColor: "rgb(255,155,0)",
                  borderColor: "rgb(255,155,0)",
                  borderWidth: 1,
                  data: count
              }]
              // second dataset to show the percentage of the result color popularity
          },
            options: {
                responsive: true,
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
    .then(data => {fiveColorRadar = data;
        let white_counter = (fiveColorRadar.rows[0].white_counter / fiveColorRadar.rows[0].total_counter).toFixed(2);
        let blue_counter = (fiveColorRadar.rows[0].blue_counter / fiveColorRadar.rows[0].total_counter).toFixed(2);
        let black_counter = (fiveColorRadar.rows[0].black_counter / fiveColorRadar.rows[0].total_counter).toFixed(2);
        let red_counter = (fiveColorRadar.rows[0].red_counter / fiveColorRadar.rows[0].total_counter).toFixed(2);
        let green_counter = (fiveColorRadar.rows[0].green_counter / fiveColorRadar.rows[0].total_counter).toFixed(2);
        let decimals = 2;
        Number(Math.round(white_counter+'e'+decimals)+'e-'+decimals);
        Number(Math.round(blue_counter+'e'+decimals)+'e-'+decimals);
        Number(Math.round(black_counter+'e'+decimals)+'e-'+decimals);
        Number(Math.round(red_counter+'e'+decimals)+'e-'+decimals);
        Number(Math.round(green_counter+'e'+decimals)+'e-'+decimals);
        var ctx = document.getElementById('fiveColorRadarChart').getContext('2d');
        window.fiveColorRadar = new Chart(ctx, {
            type: 'radar',
            data: {
              labels: ['White', 'Blue', 'Black', 'Red', 'Green'],
              datasets: [{
                  label: 'Percentage of Result',
                  backgroundColor: "rgba(55,55,55,.6)",
                  borderColor: "rgba(225,215,0, .6)",
                  borderWidth: 3,
                  data: [`${white_counter*100}`, `${blue_counter*100}`, `${black_counter*100}`, `${red_counter*100}`, `${green_counter*100}`]
              }]
              // second dataset to show the percentage of the result color popularity
          },
            options: {
                responsive: true,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: `${question_word} Radar Graph`
                },
                scale: {
                    pointLabels :{
                       fontStyle: "bold",
                    },
                    ticks: {
                        suggestedMin: 15,
                        suggestedMax: 25
                    }
                }
            }
        })
    })
}

function randomScalingFactor(){
    return Math.floor(Math.random() * Math.floor(25))
}

function randomQuestionWord(e){
    num = Math.floor(Math.random() * Math.floor(questionWords.rows.length));
    let eventId = e.id.slice(0,-6);
    const question_word = document.getElementById(`${eventId}Search`);
    question_word.value = questionWords.rows[num].question;
}
function randomColorGroup(e){
    num = Math.floor(Math.random() * Math.floor(colorGroups.rows.length));
    let eventId = e.id.slice(0,-6);
    const question_word = document.getElementById(`${eventId}Search`);
    question_word.value = colorGroups.rows[num].quick_name;
}
