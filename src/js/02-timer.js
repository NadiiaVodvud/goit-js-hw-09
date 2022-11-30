import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const timer = document.querySelector('.timer');
const daysCounter = document.querySelector('[data-days]');
const hoursCounter = document.querySelector('[data-hours]');
const minutesCounter = document.querySelector('[data-minutes]');
const secondsCounter = document.querySelector('[data-seconds]');

document.body.style.backgroundColor = '#88cedc25';

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure(`Please choose a date in the future`);
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr(inputDate, options);

// or:
// flatpickr('#datetime-picker', {
//   enableTime: true,
//   minTime: '00:00:00',
//   maxTime: '23:59:59',
// });

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick(e) {
  let timerOn = setInterval(() => {
    let countdown = new Date(inputDate.value) - new Date();

    startBtn.disabled = true;

    if (countdown >= 0) {
      let timeObject = convertMs(countdown);
      daysCounter.textContent = addLeadingZero(timeObject.days);
      hoursCounter.textContent = addLeadingZero(timeObject.hours);
      minutesCounter.textContent = addLeadingZero(timeObject.minutes);
      secondsCounter.textContent = addLeadingZero(timeObject.seconds);
      if (countdown <= 10000) {
        timer.style.color = 'red';
      }
    } else {
      Notiflix.Notify.success('Time up');
      timer.style.color = 'black';
      clearInterval(timerOn);
    }
  }, 1000);
}
