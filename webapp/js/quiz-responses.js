let first;
let second;
let third;
let fourth;
let fifth;
let white;
let blue;
let black;
let red;
let green;
let placed;
let sortedAnswersArray = {};

const calculateResult = (ansObj) =>{   
    let newTest = {};

    white = ansObj['W'];
    blue = ansObj['U'];
    black = ansObj['B'];
    red = ansObj['R'];
    green = ansObj['G'];

    newTest.W = [ansObj.W, "White"];
    newTest.U = [ansObj.U, "Blue"];
    newTest.B = [ansObj.B, "Black"];
    newTest.R = [ansObj.R, "Red"];
    newTest.G = [ansObj.G, "Green"];

    sortedAnswersArray = Object.entries(newTest).sort((a,b) => b[1][0]-a[1][0]);
    first = sortedAnswersArray[0];
    second = sortedAnswersArray[1];
    third = sortedAnswersArray[2];
    fourth = sortedAnswersArray[3];
    fifth = sortedAnswersArray[4];

    placed = {
        first: {
            key: first[0],
            value: first[1][0],
            name: first[1][1]
        },
        second: {
            key: second[0],
            value: second[1][0],
            name: second[1][1]
        },
        third: {
            key: third[0],
            value: third[1][0],
            name: third[1][1]
        },
        fourth: {
            key: fourth[0],
            value: fourth[1][0],
            name: first[1][1]
        },
        fifth: {
            key: fifth[0],
            value: fifth[1][0],
            name: fifth[1][1]
        }
    };

    // console.log(`wubrg answers  ${JSON.stringify(wubrgAnswers)}`);
    // console.log(`sorted answers  ${sortedAnswersArray}`);
    // console.log(`answers placed  ${JSON.stringify(placed)}`);
    if(placed.first.value *.9 <= placed.second.value 
        && placed.first.value *.9 <= placed.third.value  
        && placed.first.value *.9 <= placed.fourth.value){
        // Colorless
    } else if(placed.first.value * .72 > placed.second.value){
        // monoColor();
    } else if(placed.second.value * .89 <= placed.third.value){
        //triColor()
    } else if(placed.first.value >= placed.second.value){
        twoColor();
    } else {
        console.log('no result');
    }

}


const twoColor = ()=>{
    if ((placed.first.key == "W" || placed.second.key == "U") && (placed.second.key == "U" || placed.first.key == "W"))
        {azorious();}
    else if ((placed.first.key == "W" || placed.second.key == "B") && (placed.second.key == "B" || placed.first.key == "W"))
        {orzhov();}
}

const azorious = ()=>{
    let azoriousResponse = `azorious is you`;
    console.log(azoriousResponse);
    setResult(azoriousResponse);
}
const orzhov = ()=>{
    let orzhovResponse = `orzhov is you`;
    console.log(orzhovResponse);
    setResult(orzhovResponse);
}

const setResult = (result)=>{
    let totalsDiv = document.querySelector("#totals");
    let resultsDiv = document.querySelector("#results");

    totalsDiv.textContent = JSON.stringify(answers);
    resultsDiv.textContent = result;
}