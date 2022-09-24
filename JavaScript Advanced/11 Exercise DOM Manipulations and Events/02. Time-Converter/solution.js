function attachEventsListeners() {
  let daysBtn = document.getElementById("daysBtn");
  let hoursBtn = document.getElementById("hoursBtn");
  let minutesBtn = document.getElementById("minutesBtn");
  let secondsBtn = document.getElementById("secondsBtn");
  let days = document.getElementById("days");
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");

  let rations = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };

  daysBtn.addEventListener("click", onConvert);
  hoursBtn.addEventListener("click", onConvert);
  minutesBtn.addEventListener("click", onConvert);
  secondsBtn.addEventListener("click", onConvert);

  function convert(value, unit) {
    let days = value / rations[unit];
    return {
      days: days,
      hours: days * rations.hours,
      minutes: days * rations.minutes,
      seconds: days * rations.seconds,
    };
  }

  function onConvert(event) {
    let input = event.target.parentElement.querySelector('input[type="text"]');
    let time = convert(Number(input.value), input.id);

    days.value = time.days;
    hours.value = time.hours;
    minutes.value = time.minutes;
    seconds.value = time.seconds;
  }
}
