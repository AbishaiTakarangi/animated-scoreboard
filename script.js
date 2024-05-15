let scoreA = 0;
let scoreB = 0;

const scoreDisplayA = document.getElementById("scoreA");
const scoreDisplayB = document.getElementById("scoreB");

function updateScore(team, amount) {
  if (team === 'A') {
    scoreA += amount;
    scoreDisplayA.innerText = scoreA;
  } else if (team === 'B') {
    scoreB += amount;
    scoreDisplayB.innerText = scoreB;
  }
}

// Example: Update scores every second
setInterval(() => {
  updateScore('A', Math.floor(Math.random() * 3)); // Random score increase for team A
  updateScore('B', Math.floor(Math.random() * 3)); // Random score increase for team B
}, 1000);
