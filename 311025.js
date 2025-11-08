//🧩 Q1: Pair with Target Sum (Two Sum in Sorted Array)
function pairWithTargetSum(arr, target) {
  let left = 0,
    right = arr.length - 1;
  let result = [];
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      result.push(left, right);
      return result;
    } else if (sum < target) left++;
    else right--;
  }
  return false;
}
console.log(pairWithTargetSum([1, 3, 4, 5, 7, 10, 11], 9));
//⚡ Q2: Move All Zeros to End (In-place)
function movezeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      let temp = arr.slice(i, arr.length);
      temp.shift();
      temp.push(0);
      arr.push(...temp);
    }
  }
  return arr;
}
console.log(movezeros([1, 0, 2, 0, 4]));
