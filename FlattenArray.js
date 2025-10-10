const ajay = new Promise((resolve, reject) => {
  let a = 10;
  let b = 20;
  if (a + b === 30) {
    resolve("success");
  }
});
console.log(ajay);
