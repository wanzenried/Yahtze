reRoll = function (dice, save = []) {
  for (var i = 0; i < dice.length; i++) {
    if (notSave(i, save))
    dice[i] = int(random(1,7));
  }
  return dice
};

notSave = function (die, save) {
  for (var i = 0; i < save.length; i++) {
    if (save[i] === die)
    return false
  }
  return true
}
