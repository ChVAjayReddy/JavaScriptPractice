// //Remove Diplicates
// function removeDuplicates(nums) {
//   let count = {};
//   for (let num of nums) {
//     count[num] = (count[num] || 0) + 1;
//   }
//   return Object.keys(count);
// }
// console.log(removeDuplicates([1, 1, 2, 3, 4, 5, 2, 3, 6]));
// //🧩 Q2: Find the Most Frequent Character in a String
// function mostfrequentchar(str) {
//   let count = {};
//   let maxchar;
//   let maxcount = 0;
//   for (let char of str) {
//     count[char] = (count[char] || 0) + 1;
//     if (maxcount < count[char]) maxchar = char;
//   }
//   return maxchar;
// }
// console.log(mostfrequentchar("success"));
// //🧩 Q3: Find the Sum of Even Numbers in an Array
// function sumofeven(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     if (num % 2 === 0) sum += num;
//   }
//   return sum;
// }
// console.log(sumofeven([1, 2, 3, 4, 5, 6]));

let data = "https://worldwide-restaurants.p.rapidapi.com/languages";
console.log(fetch(data));
