function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

// let timeoutId = null;

// NOTIFICATION_DELAY = 3000;
// timeoutId = setTimeout(() => {
//   console.log();
//   // hideNotification();
// }, NOTIFICATION_DELAY);

// clearTimeout(timeoutId);
