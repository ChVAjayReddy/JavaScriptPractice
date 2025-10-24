function MatrixDiagonalDifference(arr) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j === i) {
        sum1 += arr[i][j];
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr.length - i - 1 === j) {
        sum2 += arr[i][j];
      }
    }
  }
  return sum1 - sum2;
}
console.log(
  MatrixDiagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
//Compress the String
function compressthestring(str) {
  let result = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (i == 0) result += str[i];
    else {
      if (str[i - 1] === str[i]) count++;
      else {
        result += count;
        count = 1;
        result += str[i];
      }
    }
  }
  result += count;
  return result;
}
console.log(compressthestring("aaabbcccaaab"));
