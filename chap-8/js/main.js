const eventNameInputEle = document.querySelector("#event-name");
const eventDayInputEle = document.querySelector("#event-day");
const formEle = document.querySelector(".form-count-down");
const resultEle = document.querySelector(".js-result-count-down");

// console.log(eventNameInputEle, "eventNameInputEle");
// console.log(eventDayInputEle, "eventDayInputEle");
// console.log(formEle, "formEle");

const handleStartCountDown = (event) => {
  event.preventDefault();
  const eventName = eventNameInputEle.value;
  const eventDay = eventDayInputEle.value;

  if (!eventDay) {
    return;
  }

  const currentDay = new Date();
  const diffMilliseconds = new Date(eventDay).getTime() - currentDay.getTime();

  if (diffMilliseconds <= 0) {
    resultEle.textContent = "Please input eventDay > now";
    return; // Dừng xử lý với kết quả trên
  }

  // Milliseconds => seconds => minutes => hours => day
  const dayResult = diffMilliseconds / 1000 / 60 / 60 / 24;
  resultEle.textContent = `${dayResult.toFixed(1)} days until to ${eventName}`;
};

formEle.addEventListener("submit", handleStartCountDown);
