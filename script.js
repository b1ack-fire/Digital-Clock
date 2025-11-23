
const toggle = document.getElementById("toggle");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});


function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  document.getElementById("time").innerText =
    `${hours.toString().padStart(2, "0")}:` +
    `${minutes.toString().padStart(2, "0")}:` +
    `${seconds.toString().padStart(2, "0")} ${ampm}`;

  document.getElementById("date").innerText =
    now.toLocaleDateString("en-US");

  document.getElementById("day").innerText =
    now.toLocaleDateString("en-US", { weekday: "long" });
}

setInterval(updateClock, 1000);
updateClock();


let alarmTime = null;

function setAlarm() {
  alarmTime = document.getElementById("alarmTime").value;
  alert("Alarm set for " + alarmTime);
}


document.getElementById("alarmSound").src =
  "https://dl.meloboom.com/medialink/190950"; // ringtone

setInterval(() => {
  const now = new Date();
  const current = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes()
    .toString()
    .padStart(2, "0")}`;

  if (alarmTime === current) {
    document.getElementById("alarmSound").play();
    alert("⏰ Alarm Ringing!");
    alarmTime = null;
  }
}, 1000);


let timerInterval;

function startTimer() {
  let seconds = parseInt(document.getElementById("timerInput").value);

  if (isNaN(seconds) || seconds <= 0) {
    alert("Enter valid seconds!");
    return;
  }

  let display = document.getElementById("timerDisplay");

  timerInterval = setInterval(() => {
    display.innerText = `Time Left: ${seconds}s`;
    seconds--;

    if (seconds < 0) {
      clearInterval(timerInterval);
      document.getElementById("alarmSound").play();
      display.innerText = "⏰ Timer Finished!";
    }
  }, 1000);
}
