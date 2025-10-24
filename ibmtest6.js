// function MatrixBorderSum(arr) {
//   let sum = 0;
//   for (let j = 0; j < arr.length; j++) {
//     for (let k = 0; k < arr.length; k++) {
//       if (j === 0 || j === arr.length - 1 || k === 0 || k === arr.length - 1) {
//         sum += arr[j][k];
//       }
//     }
//   }
//   return sum;
// }
// console.log(
//   MatrixBorderSum([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
// //Q2️⃣ – Rearrange String by Frequency
// function RearrangeByFrequency(str) {
//   let obj = {};
//   let temp = [];
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     obj[str[i]] = (obj[str[i]] || 0) + 1;
//   }
//   for (let freq in obj) {
//     temp.push([freq, obj[freq]]);
//   }
//   for (let i = 1; i <= temp.length; i++) {}
// }
// console.log(RearrangeByFrequency("bbbccdaa"));

// function maxproductsubarray(arr) {
//   let temp = 1;
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] > arr[i]) {
//       temp *= arr[i];
//     } else {
//       temp *= arr[i];
//       if (result < temp) {
//         result = temp;
//       }

//       temp = 1;
//     }
//   }
//   return result;
// }

// console.log(maxproductsubarray([2, 9, -2, 4, 1, 7, 8, 4, 5, 3]));
//Sliding WIndow Maximum
// function SlidingWindowMaximun(arr, n) {
//   let result = [];
//   for (let i = 0; i <= arr.length - n; i++) {
//     let max = -Infinity;
//     for (let j = i; j < n + i; j++) {
//       if (max < arr[j]) max = arr[j];
//     }
//     result.push(max);
//     max = -Infinity;
//   }
//   return result;
// }
// console.log(SlidingWindowMaximun([1, 3, -1, -3, 5, 3, 6, 7], 3));
//Consecutive Character Frequency Sort
// function ConsecutiveCharFrequencySort(str) {}
// console.log(ConsecutiveCharFrequencySort("aaabbccccdde"));
// function rainWaterTrapped(arr) {
//   let total = 0;
//   for (let i = 1; i < arr.length - 1; i++) {
//     let leftmax = Math.max(...arr.slice(0, i + 1));
//     let rightmax = Math.max(...arr.slice(i + 1, arr.length));
//     let diff = Math.min(leftmax, rightmax) - arr[i];
//     console.log(diff);
//     if (diff > 0) {
//       total += diff;
//     }
//   }
//   console.log(total);
// }
// rainWaterTrapped([1, 2, 3, 4]);
//Q1️⃣ – Count Subarrays with Given Sum
// function CountSubarraysWithGivenSum(arr, k) {
//   let Count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let total = 0;
//     for (let j = i; j < arr.length; j++) {
//       total += arr[j];
//       if (total === k) {
//         Count++;
//       }
//     }
//   }
//   console.log(Count);
// }
// CountSubarraysWithGivenSum([1, 2, 3, -2, 5, 2, 3], 5);
//🔠 Q2️⃣ – Rearrange Characters by Frequency (Medium–Hard)
// function RearrangeByFrequency(str) {
//   let obj = {};
//   let max = 0;
//   let maxchar;
//   let result = "";
//   for (let char of str) {
//     obj[char] = (obj[char] || 0) + 1;
//   }
//   do {
//     for (let char in obj) {
//       if (obj[char] > max) {
//         max = obj[char];
//         maxchar = char;
//       }
//     }
//     console.log(max, maxchar);
//     for (let i = 0; i < max; i++) {
//       result += maxchar;
//     }
//     delete obj[maxchar];
//     max = 0;
//     maxchar = "";
//   } while (Object.keys(obj).length !== 0);
//   return result;
// }
// console.log(RearrangeByFrequency("bbccaaa"));
//Transform Array Based on Parity
function TransformArray(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) result += arr[i] * 2;
    else result += arr[i] * 3;
  }
  return result;
}
console.log(TransformArray([2, 5, 7, 8]));

function ZigZag(str) {
  let count = {};
  let min = +Infinity;
  let minchar;
  let max = -Infinity;
  let maxchar;
  let result = "";
  let objcount = 0;
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  for (let char in count) {
    objcount++;
  }
  do {
    for (let char in count) {
      if (count[char] > max) {
        max = count[char];
        maxchar = char;
      }
      if (count[char] < min) {
        min = count[char];
        minchar = char;
      }
    }
    for (let i = 0; i < max; i++) {
      result += maxchar;
    }
    for (let i = 0; i < min; i++) {
      result += minchar;
    }
    min = +Infinity;
    minchar;
    max = -Infinity;
    maxchar;
    delete count[maxchar];
    objcount--;
    delete count[minchar];
    objcount--;
  } while (objcount !== 0);
  return result;
}
console.log(ZigZag("aabbbcddddd"));
