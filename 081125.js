function find(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  if (sum % 2 === 0 && sum % 3 != 0) return sum * 2;
  else if (sum % 3 === 0 && sum % 3 != 0) return sum * 3;
  else if (sum % 6 === 0) return sum * 6;
  else return sum;
}
console.log(find([1, 2, 3]));
