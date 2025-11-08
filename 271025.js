// Problem:
// Find the index where the sum of elements on the left
// equals the sum of elements on the right.

function balanceIndex(arr) {
  //   for (let i = 1; i < arr.length - 1; i++) {
  //     let sum = 0;
  //     for (let j = 0; j < i; j++) {
  //       sum += arr[j];
  //     }
  //     for (let j = i + 1; j < arr.length; j++) {
  //       sum -= arr[j];
  //     }
  //     if (!sum) {
  //       return i;
  //     }
  //   }
  //   return -1;
}

// Example:
console.log(balanceIndex([1, 7, 3, 6, 5, 6])); // Output: 3
console.log(balanceIndex([1, 2, 3])); // Output: -1
// Problem:
// Move all zeros to the end while keeping the order of non-zero elements.

function moveZeros(arr) {
  let result = [];
  let count = 0;
  // Write your code here
  for (let i = 0; i < arr.length; i++) {
    arr[i] !== 0 ? result.push(arr[i]) : count++;
  }
  for (let i = 0; i < count; i++) {
    result.push(0);
  }
  return result;
}

// Example:
console.log(moveZeros([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
console.log(moveZeros([0, 0, 1])); // Output: [1, 0, 0]
//Q3: Check for Anagrams
function Anagrams(str1, str2) {
  if (str1.length != str2.length) return false;
  let count = {};
  for (let i = 0; i < str1.length; i++) {
    count[str1[i]] = (count[str1[i]] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    count[str1[i]]
      ? (count[str1[i]] = count[str1[i]] - 1)
      : (count[str1[i]] = (count[str1[i]] || 0) + 1);
    if (count[str1[i]] === 0) delete count[str1[i]];
  }
  if (Object.keys(count).length === 0) return "True";
  else return "False";
}

console.log(Anagrams("listen", "silent"));

//Q4: Maximum Consecutive Ones
function MaximumConsecutiveOnes(arr) {
  let count = 0;
  let Maximum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) count++;
    else {
      if (Maximum < count) {
        Maximum = count;
      }
      count = 0;
    }
  }
  return Maximum;
}
console.log(MaximumConsecutiveOnes([1, 0, 1, 1, 0, 1]));

//🧩 Q1: Sum of Digits
function SumofDigits(n) {
  for (let num of n) {
    console.log(num);
  }
}
SumofDigits([1, 2, 3]);
