function findMissingNumber(nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
}

console.log(findMissingNumber([3, 0, 2, 1, 4, 5, 6]));
