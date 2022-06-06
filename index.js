const userName = prompt("User name: ")
// game level
let level = 1;
// player points
let points = 0;

function guessGame(min, max) {
    const random = Math.floor(Math.random() * (max - min + 1) + min)
    var number = parseInt(prompt('STAGE: ' + level + '. Guess a number between ' + min + ' to ' + max + ': '));
  while(number !== random) {
        number = parseInt(prompt('STAGE: ' + level + '. Guess the number again: '));
    }
  if(number == random) {
    points++;
        console.log('Congratulations ' + userName + 
        '!\nYou guessed the number correct.\nTOTAL POINTS: ' + points + 
        '\nYou are moving to STAGE ' + (level + 1));

    }
    level++;
  guessGame(min, (max + 1));
}
guessGame(1,2);
