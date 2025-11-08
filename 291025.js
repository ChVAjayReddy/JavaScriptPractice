//🧩 Q1: Remove Duplicates from Sorted Array
function removeDuplicates(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) count++;
    else {
      if (arr[i] > arr[i - 1]) count++;
    }
  }
  return count;
}
console.log(removeDuplicates([1, 1, 2, 2, 3, 5, 5, 5, 6, 6, 7, 7, 7, 7, 7, 8]));

//⚡ Q2: Find Missing Number (0 to n Range)
function findmissingnum(arr) {
  let total = (arr.length * (arr.length + 1)) / 2;
  for (let num of arr) {
    total -= num;
  }
  return total;
}
console.log(findmissingnum([0, 1, 2, 3, 4, 5, 7]));

//🧩 Q3: Majority Element (Appears More Than n/2 Times)
function MajorityElement(arr) {
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] = (count[arr[i]] || 0) + 1;
    if (count[arr[i]] > arr.length / 2) return arr[i];
  }
}
console.log(MajorityElement([2, 2, 1, 1, 1, 2, 2]));
//⚡ Q4: Rotate Array (Right Rotation)
function RotateArray(arr, k) {
  for (let i = 0; i < k; i++) {
    let last = arr.pop();
    arr.unshift(last);
  }
  return arr;
}
console.log(RotateArray([1, 2, 3, 4, 5, 6, 7], 4));
//🧩 Q1️⃣: Product of Array Except Self (No Division)
function productExceptSelf(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        result[i] = (result[i] || 1) * arr[j];
      }
    }
  }

  return result;
}
console.log(productExceptSelf([1, 2, 3, 4]));
