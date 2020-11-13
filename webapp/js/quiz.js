let questionWords;

window.onload = function(e){ 
    fetch("/charts/listAllQuestionWords")
    .then(response => response.json())
    .then(response => {questionWords = response.rows;})
    .then(()=>{
        console.log(questionWords)
    });
}

const selected = (responseValue) => {
    alert(responseValue)
}