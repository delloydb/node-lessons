// global object
console.log(global);

setTimeout(() => {
  console.log("in timeout type");
}, 3000);

const int = setInterval(() => {
  console.log("in the interval typing again");
}, 1000);

// Optional: Clear interval after some time to stop it
setTimeout(() => {
  clearInterval(int);
  console.log("Interval stopped");
}, 10000); // Stops after 10 seconds
