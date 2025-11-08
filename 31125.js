//Q1: Count frequency of each element in an array.
function Count(arr) {
  let frequency = {};
  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
  }
  return frequency;
}
console.log(Count([2, 3, 2, 5, 3, 2]));
//Q2: Find the First Non-Repeating Element in an Array
function FirstNonRepeatChar(arr) {
  let frequency = new Map();
  for (let num of arr) {
    frequency.set(num, frequency.has(num) ? frequency.get(num) + 1 : 1);
  }

  for (let [key, value] of frequency) {
    if (value === 1) return key;
  }
}
console.log(FirstNonRepeatChar([4, 5, 1, 2, 0, 4]));

//🧩 Q1: Check if Two Arrays are Equal (ignoring order)
function isArraysareEqual(arr1, arr2) {
  let Count = {};
  for (let num of arr1) {
    Count[num] = (Count[num] || 0) + 1;
  }
  for (let num of arr2) {
    if (!Count[num]) return false;
    else {
      Count[num] = Count[num] - 1;
      if (Count[num] === 0) delete Count[num];
    }
  }
  if (Object.keys(Count).length === 0) return true;
}
console.log(isArraysareEqual([1, 2, 3, 4], [4, 3, 2, 1]));
//⚡ Q2: Find Intersection of Two Arrays
function Intersection(arr1, arr2) {
  let result = [];
  let count = {};
  if (arr1.length <= arr2.length) {
    let temp = arr1;
    arr1 = arr2;
    arr2 = temp;
  }

  for (let num of arr1) {
    count[num] = (count[num] || 0) + 1;
  }
  for (let num of arr2) {
    if (count[num]) result.push(num);
  }
  return result;
}
console.log(Intersection([4, 9, 5], [9, 4, 9, 8, 4, 4]));
//🧩 Q1: Find the Longest Consecutive Sequence
function LongestConsecutiveSequence(arr) {
  let set = new Set(arr);
  let longestStreak = 0;
  for (let num of set) {
    console.log(num);
  }
}

console.log(LongestConsecutiveSequence([100, 4, 200, 1, 3, 2]));
//⚡ Q2: Find All Pairs With Given Sum
function Pairs(arr, target) {
  let frequency = new Map();
  for (let num of arr) {
    frequency.set(num, frequency.has(num) ? frequency.get(num) + 1 : 1);
  }
  for (let [key, value] of frequency) {
    if (frequency.has(target - key)) result.push([key, target - key]);
  }
  console.log(frequency);
  return result;
}
console.log(Pairs([1, 5, 7, -1, 5], 6));

//
function Pairs1(arr, target) {
  let result = [];
  let freq = new Map();

  for (let num of arr) {
    let complement = target - num;
    if (freq.has(complement)) {
      for (let i = 0; i < freq.get(complement); i++) {
        result.push([num, complement]);
      }
    }
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  return result;
}

console.log(Pairs1([1, 5, 7, -1, 5], 6));
