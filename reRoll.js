reRoll = function (dice, save = []) {
  for (var i = 0; i < dice.length; i++) {
    if (!saveDie(i, save))
    dice[i] = rollDie();
  }
  return dice
};

saveDie = function (die, save) {
  for (var i = 0; i < save.length; i++) {
    if (save[i] === die)
    return true
  }
  return false
}
