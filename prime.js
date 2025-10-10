function prime(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
    if (count > 2) {
      return false;
    }
  }

  return true;
}
let a = { name: "ajay", age: "28" };
console.log(a);
