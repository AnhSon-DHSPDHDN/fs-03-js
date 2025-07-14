const timerEle = document.querySelector(".js-timer");
const btnControlEle = document.querySelector(".js-button-control");

// 5 Minutes
// let leftTime = 60 * 5;
let leftTime = 10;
let isStart = false;
let timer = null;

const handleToggleTimer = () => {
  if (leftTime <= 0 && timer) {
    clearInterval(timer);
    return;
  }

  // Switch true <=> false
  isStart = !isStart;

  if (isStart) {
    btnControlEle.textContent = "Pause";
    timer = setInterval(() => {
      if (leftTime < 0 && timer) {
        btnControlEle.textContent = "Start";
        clearInterval(timer);
        const ring = new Audio("assets/ring.mp3");
        ring.play();
        return;
      }

      const leftMinutes = Math.floor(leftTime / 60);
      const leftSeconds = leftTime % 60;
      leftTime = leftTime - 1;
      timerEle.textContent = `0${leftMinutes}:${
        leftSeconds < 10 ? "0" + leftSeconds : leftSeconds
      }`;
    }, 1000);
  } else {
    btnControlEle.textContent = "Start";
    clearInterval(timer);
  }
};

btnControlEle.addEventListener("click", handleToggleTimer);
