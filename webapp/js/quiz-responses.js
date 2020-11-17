


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




let white;
let blue;
let black;
let red;
let green;
let sortedAnswers;

const quizAnswer = (answersObject) =>{
    white = answersObject['W'];
    blue = answersObject['U'];
    black = answersObject['B'];
    red = answersObject['R'];
    green = answersObject['G'];

    sortedAnswers = answersObject;
    sortedAnswers = Object.entries(sortedAnswers).sort((a,b) => b[1]-a[1]);
    console.log(`wubrg answers ${JSON.stringify(answersObject)}`);
    console.log(`sorted answers ${sortedAnswers}`);
}



