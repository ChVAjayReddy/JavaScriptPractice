//🧩 Q1: Maximum Sum Subarray of Size K (Fixed Window)
function maxsubarray(arr, k) {
  let result = [];
  let max;
  let index;
  let sum = 0;
  for (let i = 0; i <= arr.length - k; i++) {
    if (i === 0) {
      sum = arr[i] + arr[i + 1] + arr[i + 2];
      max = sum;
      index = i;
    } else {
      sum = sum - arr[i - 1] + arr[i + 2];
      if (sum > max) {
        max = sum;
        index = i;
      }
    }
  }
  for (let i = 0; i < k; i++) {
    result[i] = arr[index + i];
  }
  return result;
}
console.log(maxsubarray([1, 2, 3, 4, 5, 6, 7, 1, 2, 3], 3));
//⚡ Q2: Smallest Subarray With Sum ≥ Target (Variable Window)
function smallestsubarray(arr, target) {
  let result = [];
  let min = +Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;
      let subarr = [];
      for (let k = i; k <= j; k++) {
        subarr.push(arr[k]);
        sum += arr[k];
      }
      if (sum >= target) {
        if (subarr.length < min) {
          min = subarr.length;
          result = subarr;
        }
      }
    }
  }
  return result;
}
console.log(smallestsubarray([2, 3, 1, 2, 4, 3], 7));
