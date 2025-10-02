let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


document.querySelector('.guess h3').textContent = '?';
document.querySelector('.message').textContent = 'Start guessing...';
document.querySelector('.score').textContent = `💯 Score: ${score}`;
document.querySelector('.highs').textContent = `🥇 High score: ${highScore}`;


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.inp').value);
  console.log(guess, typeof guess);

  
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.guess h3').textContent = secretNumber;

    
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highs').textContent = `🥇 High score: ${highScore}`;
    }

    
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = `💯 Score: ${score}`;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = `💯 Score: 0`;
    }

    
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = `💯 Score: ${score}`;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = `💯 Score: 0`;
    }
  }
});


document.querySelector('.btn').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = `💯 Score: ${score}`;
  document.querySelector('.guess h3').textContent = '?';
  document.querySelector('.inp').value = '';
});


function typeWriter(text, element, speed = 100) {
  let i = 0;
  element.textContent = ""; // نفرغ النص الأول
  const interval = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(interval); // نوقف بعد ما النص يخلص
    }
  }, speed);
}

window.addEventListener("DOMContentLoaded", () => {
  const msgEl = document.querySelector(".message");
  typeWriter("start guessing...", msgEl, 100);
});
