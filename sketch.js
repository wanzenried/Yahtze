let keepAllKey = 65;
let rollAllKey = 83;

let diceAmount = 5;
let dices = [];
let rerollDices = [];

//test


function setup() {
  // put setup code here
  for (var i = 0; i < diceAmount; i++) {
    rerollDices[i] = !!0;
    dices[i] = 0;
  }
  // console.log(arr);
  // console.log(rollDice([3, 4, 5], arr, 1, 6));
}

function draw() {
  // put drawing code here
  console.log(dices);
  console.log(rerollDices);
}

function rollDice(rerollArray, diceArray, minVal, maxVal) {
  let newArray = diceArray;
  for (var i = 0; i < diceArray.length; i++) {
    newArray[i] = (rerollArray[i]) ? diceArray[i] : int(random(minVal, maxVal + 1));
  }
  return newArray;



  // rolls dices in array based on dices said to reroll
  // return array with rerolled dices


}

function keyPressed() {
  if (Number.isInteger(int(key)) && int(key) <= diceAmount && int(key) >= 1) {
    rerollDices[int(key) - 1] = !rerollDices[int(key) - 1];
  }
  if (keyCode == keepAllKey) {
    for (var i = 0; i < rerollDices.length; i++) {
      rerollDices[i] = !!1;
    }
  }
  if (keyCode == rollAllKey) {
    for (var i = 0; i < rerollDices.length; i++) {
      rerollDices[i] = !!0;
    }
  }

  if (keyCode == 32) {

    dices = rollDice(rerollDices, dices, 1, 6);

  }
}
