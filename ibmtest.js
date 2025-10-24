// function revereString(str) {
//   let newstr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newstr += str[i];
//   }
//   return newstr;
// }
// console.log(revereString("frontend"));
// function findMax(arr) {
//   let max = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax([3, 7, 2, 9, 4]));
// function findDuplicate(arr) {
//   let obj = {};
//   let result = [];
//   for (let num of arr) {
//     obj[num] = (obj[num] || 0) + 1;
//   }
//   for (let num in obj) {
//     if (obj[num] > 1) {
//       result.push(Number(num));
//     }
//   }
//   return result;
// }
// console.log(findDuplicate([1, 2, 3, 2, 4, 3, 5]));
// function anagram(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   else {
//     let count = {};
//     for (let char of str1) {
//       count[char] = (count[char] || 0) + 1;
//     }
//     for (let char of str2) {
//       if (!count[char]) return false;
//       else count[char]--;
//     }
//     for (let c in count) {
//       if (count[c] > 0) return false;
//     }
//     return true;
//   }
// }
// console.log(anagram("listen", "silent"));
// function rotateArray(arr, N) {
//   let newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i + N >= arr.length) {
//       newarr[i + N - arr.length] = arr[i];
//     } else {
//       newarr[i + N] = arr[i];
//     }
//   }
//   return newarr;
// }
// console.log(rotateArray([1, 2, 3, 4, 5], 2));
// function charFrequeency(str) {
//   let freq = {};
//   for (let char of str) {
//     freq[char] = (freq[char] || 0) + 1;
//   }
//   return freq;
// }
// console.log(charFrequeency("reactjs"));
function moveZerostoEnd(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newarr.push(arr[i]);
    }
  }
  for (let i = newarr.length; i < arr.length; i++) {
    newarr.push(0);
  }
  return newarr;
}
console.log(moveZerostoEnd([0, 1, 0, 3, 12]));

function largestWordinaString(str) {
  let max = 0;
  let maxword;
  let word = "";
  for (let i = 1; i <= str.length; i++) {
    if (str[i] == " " || i === str.length) {
      if (max < word.length) {
        max = word.length;
        maxword = word;
      }
      word = "";
    } else {
      word += str[i];
    }
  }
  return maxword;
}
console.log(largestWordinaString("I love frontend development"));
function RemoveDuplicatesfromSortedArray(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {}
}
console.log(RemoveDuplicatesfromSortedArray([1, 1, 2, 2, 3, 4, 4]));
