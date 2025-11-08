//Q1️⃣: Balance Index in Array
function BalanceIndex(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    let leftsum = 0;
    let rightsum = 0;
    for (let j = 0; j < i; j++) {
      leftsum += arr[j];
    }
    for (let j = i + 1; j < arr.length; j++) {
      rightsum += arr[j];
    }
    if (rightsum === leftsum) return i;
  }
  return -1;
}
console.log(BalanceIndex([1, 2, 3, 4, -1]));
//Q2️⃣: Group Characters by Occurrence
function GroupCharacters(str) {
  let result = "";
  let count = 0;
  let countobj = {};
  let min = +Infinity;
  let minchar = "";
  for (let i = 0; i < str.length; i++) {
    countobj[str[i]] = (countobj[str[i]] || 0) + 1;
  }
  for (let char in countobj) {
    count++;
  }
  do {
    for (let char in countobj) {
      if (countobj[char] < min) {
        min = countobj[char];
        minchar = char;
      }
    }
    for (let i = 0; i < min; i++) {
      result += minchar;
    }
    delete countobj[minchar];
    min = +Infinity;
    minchar = "";
    count--;
  } while (count !== 0);
  return result;
}
console.log(GroupCharacters("palasupriya"));
