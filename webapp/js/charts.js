let questionWords;
let topResults;
let resultMostLike;


window.onload = ()=>{
    fetch('/charts/listAllQuestionWords')
    .then(response => response.json())
    .then(data => {questionWords = data;})
    .then(()=>{
        console.log(questionWords)
    })
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
              ,{
                  label: 'total users',
                  backgroundColor: "rgb(200,200,200)",
                  borderColor: "rgb(200,200,200)",
                  borderWidth: 1,
                  data: totalUsers
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
                        type: 'logarithmic',
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
        method: 'POST', // or 'PUT'
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
            resultColor.push(resultMostLike.rows[i].result_color);
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
function getResultLeastLike(){
    fetch('/charts/resultLeastLike')
    .then(response => response.json())
    .then(data => {resultLeastLike = data;})
    .then(()=>{
        console.log(resultLeastLike)
        let count = [];
        let resultColor =[];
        for(let i = 0; i<resultLeastLike.rows.length; i+=1){
            count.push(resultLeastLike.rows[i].percent_difference);
            resultColor.push(resultLeastLike.rows[i].result_color);
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
                    text: 'Results last like "Service"'
                }
            }
        })
    })
}


function getTopWordsForResult(){
    fetch('/charts/topWordsForResult')
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
                    text: 'Jund Profile Top Words'
                }
            }
        })
    })
}
function getBottomWordsForResult(){
    fetch('/charts/bottomWordsForResult')
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
                    text: 'Jund Profile bottom words'
                }
            }
        })
    })
}


function randomScalingFactor(){
    return Math.floor(Math.random() * Math.floor(25))
}

function randomQuestionWord(){
    num = Math.floor(Math.random() * Math.floor(questionWords.rows.length));
    const question_word = document.getElementById('resultMostLikeSearch');
    question_word.value = questionWords.rows[num].question;
}
