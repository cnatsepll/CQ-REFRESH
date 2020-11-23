let questionWords;
let colorGroups;
let topResults;
let resultMostLike;
let selectorsQuestionWords = document.getElementById('question-words');
let selectorsColorGroups = document.getElementById('color-groups');

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
        colorGroups.sort(compareValues('quick_name', 'desc'));
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
}

// most / least popular words
// most / least defining words
// most / least aligned words
// box and whisker plot of color type value averages for each result color

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
                        type: 'linear'
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
          'Content-Type': 'application/json'
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
          'Content-Type': 'application/json'
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
          'Content-Type': 'application/json'
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
        let white_counter = (fiveColorRadar.rows[0].white_counter / fiveColorRadar.rows[0].total_counter).toFixed(3);
        let blue_counter = (fiveColorRadar.rows[0].blue_counter / fiveColorRadar.rows[0].total_counter).toFixed(3);
        let black_counter = (fiveColorRadar.rows[0].black_counter / fiveColorRadar.rows[0].total_counter).toFixed(3);
        let red_counter = (fiveColorRadar.rows[0].red_counter / fiveColorRadar.rows[0].total_counter).toFixed(3);
        let green_counter = (fiveColorRadar.rows[0].green_counter / fiveColorRadar.rows[0].total_counter).toFixed(3);

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
                  label: 'Percentage of Result',
                  backgroundColor: colorCounterArray[0].name,
                  borderColor: colorCounterArray[1].name,
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

        console.log(colorCounterArray)


        var ctx = document.getElementById('resultColorpieSlicesChart').getContext('2d');
        window.colorpieSlices = new Chart(ctx, {
            type: 'pie',
            data: {
              labels: [colorCounterArray[0].name, colorCounterArray[1].name, colorCounterArray[2].name, colorCounterArray[3].name, colorCounterArray[4].name],
              datasets: [{
                backgroundColor: [colorCounterArray[0].name, colorCounterArray[1].name, colorCounterArray[2].name, colorCounterArray[3].name, colorCounterArray[4].name],
                borderColor: 'black',
                borderWidth: 3,
                  label: 'Percentage of Result',
                  data: [`${colorCounterArray[0].count*100}`, `${colorCounterArray[1].count*100}`, `${colorCounterArray[2].count*100}`, `${colorCounterArray[3].count*100}`, `${colorCounterArray[4].count*100}`]
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