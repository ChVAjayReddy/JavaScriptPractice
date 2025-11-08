//🧩 Q1: Remove Duplicates from Sorted Array
function removeDuplicates(nums) {
  let result = [];
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) result.push(nums[i]);
    else {
      if (nums[i] > result[j]) {
        j++;
        result.push(nums[i]);
      }
    }
  }
  return result.length;
}
console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4, 4, 4, 4, 4]));
//⚡ Q2: Find the Middle Element of an Array
function middlelement(arr) {
  return arr[Math.floor(arr.length / 2)];
}
console.log(middlelement([10, 20, 30, 40, 50]));
