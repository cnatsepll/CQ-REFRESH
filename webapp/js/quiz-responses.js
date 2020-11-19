


// if (firstPlace *.9 <= secondPlace && firstPlace *.9 <= thirdPlace && firstPlace *.9 <= fourthPlace){
//     mage.add("You are a Multicolored Wonder. The Planes are at your fingertips");
// } else if (whiteCounter == firstPlace && (firstPlace *.72) > secondPlace) {
//     mage.add("You are a Mono White Mage, all for one one for all.");
// } else if ((redCounter == firstPlace && whiteCounter == secondPlace && blueCounter == thirdPlace
//     || redCounter == firstPlace && blueCounter == secondPlace && whiteCounter == thirdPlace
//     || whiteCounter == firstPlace && redCounter == secondPlace && blueCounter == thirdPlace
//     || whiteCounter == firstPlace && blueCounter == secondPlace && redCounter == thirdPlace
//     || blueCounter == firstPlace && redCounter == secondPlace && whiteCounter == thirdPlace
//     || blueCounter == firstPlace && whiteCounter == secondPlace && redCounter == thirdPlace)
//     && (secondPlace *.89) <= thirdPlace) {
//     mage.add("You are a Mage of The Jeskai Way");
// } else if (greenCounter == firstPlace && redCounter == secondPlace) {
//     mage.add("You are a Green/Red Mage (Welcome to the Gruul Clans).");
// }



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
let wubrgAnswers;
let sortedAnswersArray

const calculateResult = (answersObject) =>{
    wubrgAnswers = answersObject;

    white = wubrgAnswers['W'];
    blue = wubrgAnswers['U'];
    black = wubrgAnswers['B'];
    red = wubrgAnswers['R'];
    green = wubrgAnswers['G'];

    sortedAnswersArray = wubrgAnswers;
    sortedAnswersArray.W = [sortedAnswersArray.W, "White"];
    sortedAnswersArray.U = [sortedAnswersArray.U, "Blue"];
    sortedAnswersArray.B = [sortedAnswersArray.B, "Black"];
    sortedAnswersArray.R = [sortedAnswersArray.R, "Red"];
    sortedAnswersArray.G = [sortedAnswersArray.G, "Green"];

    sortedAnswersArray = Object.entries(sortedAnswersArray).sort((a,b) => b[1]-a[1]);
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

    console.log(`wubrg answers  ${JSON.stringify(wubrgAnswers)}`);
    console.log(`sorted answers  ${sortedAnswersArray}`);
    console.log(`answers placed  ${JSON.stringify(placed)}`);

    if(placed.first.value * .72 > placed.second.value){
        twoColor();
    }

}


const twoColor = ()=>{
    if ((placed.first.key == "W" || placed.second.key == "U") && (placed.second.key == "U" || placed.first.key == "W"))
        {
            azorious();
        }
}

const azorious = ()=>{
    console.log(`congrats you did it`)
}