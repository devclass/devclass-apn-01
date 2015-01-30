var weapons = ['rock', 'paper', 'scissors'];

module.exports.play = function (user) {
  var computer = weapons[Math.floor(Math.random() * 3)];
  var result;
  if (computer === 'rock') {
    if (user === 'rock') {result = 'tied';}
    if (user === 'paper') {result = 'win';}
    if (user === 'scissors') {result = 'lost';}
  }
  else if (computer === 'paper') {
    if (user === 'rock') {result = 'lost';}
    if (user === 'paper') {result = 'tied';}
    if (user === 'scissors') {result = 'win';}
  }
  else if (computer === 'scissors') {
    if (user === 'rock') {result = 'win';}
    if (user === 'paper') {result = 'lost';}
    if (user === 'scissors') {result = 'tied';}
  }
  return {result: result, computer: computer, user: user};
};
