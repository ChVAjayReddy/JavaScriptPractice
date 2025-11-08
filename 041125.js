function LongestConsecutiveSequence(arr) {
  let set = new Set(arr);
  let longestStreak = 0;

  for (let num of set) {
    if (set.has(num + 1)) {
      let count = 0;

      do {
        count++;

        num++;
      } while (set.has(num));
      longestStreak = Math.max(count, longestStreak);
    }
  }

  return longestStreak;
}

console.log(
  LongestConsecutiveSequence([
    100, 4, 200, 1, 3, 2, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20,
  ])
); // 20

//🧩 Q1: Longest Subarray with Given Sum (Positive + Negative Numbers)
function longestsubarray(arr, target) {
  let Subarraylength = 0;
  for (let i = 0; i < arr.length; i++) {
    let index = i;
    let Sum = 0;
    let count = 0;
    do {
      count++;
      Sum += arr[index];
      index++;
    } while (Sum < target);
    if (Sum === target) {
      Subarraylength = Math.max(Subarraylength, count);
    }
    if (Subarraylength > arr.length - i) return Subarraylength;
  }
  return Subarraylength;
}
console.log(longestsubarray([10, 5, 2, 7, 1, 1, 9], 16));
//⚡ Q2: Subarray with Zero Sum
function Subarraywithzerosum(arr) {
    

}
console.log(Subarraywithzerosum([4, 2, -3, 1, 6]));
