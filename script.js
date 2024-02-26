let slideIndex = 1;

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}

const targetDate = new Date()
  .getTime()
  + (1000 * 3600 * 48);
let days, hours, minutes, seconds;

const countdown = document
  .getElementById("tiles");

getCountdown();

const timer = setInterval(getCountdown, 1000);

function pad(n) {
  return (n < 10 ? '0' : '') + n;
}

function getCountdown(){
  const currentDate = new Date().getTime();
  let secondsLeft = (targetDate - currentDate) / 1000;

  if (secondsLeft < 0) {
    clearInterval(timer);
    return;
  }

  days = pad(parseInt(secondsLeft / 86400));
  secondsLeft %= 86400;

  hours = pad(parseInt(secondsLeft / 3600));
  secondsLeft %= 3600;

  minutes = pad(parseInt(secondsLeft / 60));
  seconds = pad(parseInt(secondsLeft % 60));

  countdown.innerHTML = `
  <span>${days}</span>
  <span>${hours}</span>
  <span>${minutes}</span>
  <span>${seconds}</span>
  `;
}
