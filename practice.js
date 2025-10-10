function task1() {
  let date = Date.now();
  let delay = 2000;
  let sum = delay + date;
  while (Date.now() <= sum) {}
  console.log("Ajay");
}

function task2() {
  let date = Date.now();
  let delay = 2000;
  let sum = delay + date;
  while (Date.now() <= sum) {}
  console.log("Ajay Reddy");
}
task2();
task1();
console.log("Vijay");
