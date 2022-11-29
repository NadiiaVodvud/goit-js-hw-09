import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const calendar = document.querySelector('#datetime-picker');

DateTime = {
  enableTime: true,
  minTime: '00:00:00',
  maxTime: '23:59:59',
};
console.log(calendar);
// const date = Date.now();
// const date = new Date(1650000000000);
// console.log(date);

// setTimeout(() => {
//   const date = new Date();
// }, 3000);
