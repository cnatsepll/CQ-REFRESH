let topResults;
let resultMostLike;

function getTopResults(){
    fetch('/charts/topResults')
    .then(response => response.json())
    .then(data => {topResults = data;})
    .then(()=>{
        console.log(topResults)
        let count = [];
        let resultColor =[];
        for(let i = 0; i<topResults.rows.length; i+=1){
            count.push(topResults.rows[i].count);
            resultColor.push(topResults.rows[i].result_color);
        }
        console.log(count);
        var ctx = document.getElementById('topResultsChart').getContext('2d');
        window.topResults = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: resultColor,
              datasets: [{
                  label: 'Dataset 1',
                  backgroundColor: "rgb(255,0,0)",
                  borderColor: "rgb(255,0,0)",
                  borderWidth: 1,
                  data: count
              }
            //   ,{
            //       label: 'Dataset 2',
            //       backgroundColor: "rgb(0,0,255)",
            //       borderColor: "rgb(0,0,255)",
            //       borderWidth: 1,
            //       data: [
            //           randomScalingFactor(),
            //           randomScalingFactor(),
            //           randomScalingFactor(),
            //           randomScalingFactor(),
            //           randomScalingFactor(),
            //           randomScalingFactor(),
            //           randomScalingFactor()
            //       ]
            //   }
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
                }
            }
        })
    })
}

function getResultMostLike(){
    fetch('/charts/resultMostLike')
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
                    text: 'Results most like "Skepticism"'
                }
            }
        })
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



function randomScalingFactor(){
    return Math.floor(Math.random() * Math.floor(25))
}

