import './styles.css';

const refs = {
  days: document.querySelector('.timer span[data-value="days"]'),
  hours: document.querySelector('.timer span[data-value="hours"]'),
  mins: document.querySelector('.timer span[data-value="mins"]'),
  secs: document.querySelector('.timer span[data-value="secs"]'),
};

class CountdownTimer {
  constructor(date) {
    this.targetDate = date.targetDate;
  }
  start = () => {
    const startTime = this.targetDate;
    this.timerId = setInterval(() => {
      const currentTime = new Date();
      this.deltaTime = startTime - currentTime;

      updateClockface(this.deltaTime);
    }, 1000);
  };
}

function updateClockface(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

let countdownTimer = new CountdownTimer({
  targetDate: new Date('Dec 28, 2019'),
});

countdownTimer.start();
