// let arr = [];
// function insertatending(arr, n) {
//   arr.push(n);
//   return arr;
// }
// console.log(insertatending(arr, 4));
// function insertatbeginnin(arr, n) {
//   arr.unshift(n);
//   return arr;
// }
// console.log(insertatbeginnin(arr, 8));
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.forEach((element) => {
//   element * 2;
// });
// console.log(arr);
// const fruits = ["apple", "banana", "cherry"];

// fruits.forEach((fruit, index) => {
//   console.log(`Fruit at index ${index}: ${fruit}`);
// });
// const fruits = ["apple", "banana", "cherry"];

// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });

// fruits.forEach((fruit, index) => {
//   console.log(`Fruit at index ${index}: ${fruit}`);
// });
// let arr = [];
// function insertend(arr, n) {
//   arr.push(n);
//   return arr;
// }
// console.log(insertend(arr, 5));
// function insertbegin(arr, n) {
//   for (let i = arr.length; i >= 1; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = n;

//   return arr;
// }
// console.log(insertbegin(arr, 8));
/**
 * @param {number[]} nums
 * @returns {number[]}
 */
// function FrequencySort(nums) {
//   let count = {};
//   for (let i = 0; i < nums.length; i++) {
//     count[nums[i]] = (count[nums[i]] || 0) + 1;
//   } let newar=[];
//   for (let num in count) {

//   }
// }
// console.log(FrequencySort([4, -2, 10, 12, -8, 4]));
// function longestsubstring(s, k) {
//   let countnm = 0;
//   for (let i = 0; i < s.length; i++) {
//     let count = {};
//     let str = "";
//     for (let j = i; j < s.length; i++) {
//       str += s[i];
//       count[s[i]] = (count[s[i]] || 0) + 1;
//       if (Object.keys(count).length >= 3) {
//         break;
//       } else {
//         let temp = 0;
//         for (let c in count) {
//           temp += count[c];
//         }
//         if (countnm < temp) {
//           countnm = temp;
//         }
//       }
//     }
//   }
//   console.log(countnm);
// }
// longestsubstring("eceba", 2);
// let arr = [1, 2, 3, 4, 5, 9, 6, 7, 8];
// console.log(arr.unshift(1, 32, 4));
// console.log(arr);
// function remove(arr) {
//   let newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i == 0) newarr.push(arr[i]);
//     else {
//       if (!newarr.includes(arr[i])) {
//         newarr.push(arr[i]);
//       }
//     }
//   }
//   return newarr;
// }
// console.log(remove([1, 1, 1, 2, 3, 3, 4, 5, 5]));
// function count(str) {
//   let countobj = {};
//   for (let c of str) {
//     countobj[c] = (countobj[c] || 0) + 1;
//   }
//   return countobj;
// }
// console.log(count("ajay"));
// function flatarray(arr, newar = []) {
//   for (let a of arr) {
//     if (Array.isArray(a)) {
//       flatarray(a, newar);
//     } else newar.push(a);
//   }
//   return newar;
// }
// console.log(flatarray([1, 2, 3, [1, 2, 3, [2, 6, [8, 9]]]]));
// function a() {
//   console.log(b);
//   let b = 20;
// }
// a();
// function reverse(str) {
//   let res = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     res += str[i];
//   }
//   return res;
// }
// console.log(reverse("ajay"));
// function anagram(str1, str2) {
//   let count = {};
//   for (let c of str1) {
//     count[c] = (count[c] || 0) + 1;
//   }
//   for (let c of str2) {
//     if (count[c]) {
//       count[c] = count[c] - 1;
//       if (count[c] === 0) {
//         delete count[c];
//       }
//     } else {
//       return false;
//     }
//   }

//   if (Object.keys(count) >= 1) return false;
//   else return true;
// }
// console.log(anagram("listen", "silent"));
// function countvowels(str) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (let c of str) {
//     if (vowels.includes(c.toLowerCase())) count++;
//   }
//   return count;
// }
// console.log(countvowels("JavaScript"));
// function secondlargest(arr) {
//   let max = Math.max(...arr);
//   let diff = 0;
//   let secondlargest = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i === 0) diff = max - arr[i];
//     else {
//       if (diff > max - arr[i]) {
//         if (arr[i] !== max) {
//           secondlargest = arr[i];
//           diff = max - arr[i];
//         }
//       }
//     }
//   }
//   return secondlargest;
// }
// console.log(secondlargest([10, 18, 5, 6, 20, 7, 8, 9]));
// function missingnum(arr) {
//   for (let i = 0; i <= arr.length; i++) {
//     if (!arr.includes(i)) {
//       return i;
//     } else {
//     }
//   }
// }
// console.log(missingnum([0, 1, 2, 4]));

// function removeduplicate(arr) {
//   let obj = {};
//   for (let num of arr) {
//     obj[num] = (obj[num] || 0) + 1;
//   }
//   return Object.keys(obj).map(Number);
// }
// console.log(removeduplicate([1, 1, 1, 2, 3, 4, 4, 4, 5]));

// function group(arr) {
//   let grp = {};
//   for (let i = 0; i < arr.length; i++) {
//     grp[arr[i].dept] = grp[arr[i].dept] || [];
//     grp[arr[i].dept].push(arr[i].name);
//   }
//   return grp;
// }
// console.log(
//   group([
//     { name: "ajay", dept: "React" },
//     { name: "ravi", dept: "React" },
//     { name: "anu", dept: "Java" },
//   ])
// );
// function longest(str) {
//   let newstr = str.split(" ");
//   let largest = "";
//   console.log(newstr);
//   for (let i = 0; i < newstr.length; i++) {
//     if (largest.length < newstr[i].length) {
//       largest = newstr[i];
//     }
//   }
//   console.log(largest);
// }
// longest("I love javascript");
// function uniquechar(str) {
//   let unique = "";
//   let newstr = str.split("");
//   let count = {};
//   for (let c of newstr) {
//     count[c] = (count[c] || 0) + 1;
//   }
//   for (let c in count) {
//     if (count[c] == 1) {
//       unique += c;
//     }
//   }
//   return unique;
// }
// console.log(uniquechar("abca"));
// function intersection(arr1, arr2) {
//   let count = {};
//   let intersection = [];
//   for (let num of arr1) {
//     count[num] = (count[num] || 0) + 1;
//   }
//   for (let num of arr2) {
//     if (count[num]) intersection.push(num);
//   }
//   return intersection;
// }
// console.log(intersection([1, 2, 3, 4], [3, 4, 5]));

// function rotatearray(arr, k) {
//   // let res = [];
//   // for (let i = 0; i < arr.length; i++) {
//   //   if (i + k <= arr.length - 1) {
//   //     res[i + k] = arr[i];
//   //   } else {
//   //     res[i + k - arr.length] = arr[i];
//   //   }
//   // }
//   // return res;
//   return arr.slice(-k).concat(arr.slice(0, arr.length - k));
// }
// console.log(rotatearray([1, 2, 3, 4, 5], 2));
// const originalObject = {
//   name: "Alice",
//   details: { age: 30, city: "New York" },
// };

// const deepCopy = JSON.parse(JSON.stringify(originalObject));

// deepCopy.details.city = "London"; // Modifying the deep copy

// console.log(originalObject.details.city); // Output: New York (original remains unchanged)
// console.log(deepCopy.details.city);
// const copy = structuredClone(originalObject);
// let arr = [1, 2, 3, 4];
// let a = arr.map((num) => num + 2);
// let b = arr.filter((a) => a > 2);
// console.log(b);
// let data = [
//   { name: "Ajay", lname: "reddy", age: 17 },
//   { name: "Ay", lname: "rey", age: 17 },
//   { name: "Ay", lname: "rey", age: 19 },
//   { name: "Ar", lname: "rey", age: 30 },
// ];
// let newarr = data.reduce((acc, current) => {
//   if (current.age < 25) {
//     acc.push(current.name);
//   }
//   return acc;
// }, []);
// console.log(newarr);
// const products = [
//   { name: "Laptop", category: "Electronics", price: 1200 },
//   { name: "Mouse", category: "Electronics", price: 25 },
//   { name: "Keyboard", category: "Electronics", price: 75 },
//   { name: "T-Shirt", category: "Apparel", price: 20 },
//   { name: "Jeans", category: "Apparel", price: 60 },
// ];
// let newpr = products.reduce((acc, cur) => {
//   if (acc[cur.category]) {
//     acc[cur.categoryff].push(cur);
//   } else {
//     acc[cur.category] = [];
//     acc[cur.category].push(cur);
//   }
//   return acc;
// }, {});
// console.log(newpr);
// namedss();
// function namedss() {
//   console.log("ajay");
// }

// sayhello();
// var sayhello = function () {
//   console.log("a");
// };
// var a = 10;
// function test() {
//   console.log(a);
// }
// test();
// var x = 1;
// if (true) {
//   var x = 2;
//   console.log(x);
// }
// console.log(x);
// let y = 1;
// if (true) {
//   let y = 2;
//   console.log(y);
// }
// console.log(y);
// const z = 10;
// console.log(z);
// console.log(a);
// var a = 5;
// console.log(a);
// console.log(b);
// let b = 5;
// console.log(b);
// function test() {
//   let c = 10;
//   console.log(c);
// }
// test();
// console.log(c);
// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
// }
// console.log(c);
// function outer() {
//   let count = 0;
//   function inner() {
//     count++;
//     console.log(count);
//   }
//   return inner;
// }
// const fn = outer();
// fn();
// fn();
// fn();
function adder(x) {
  return function (y) {
    return x + y;
  };
}
const add5 = adder(5);
console.log(add5(3)); //8
console.log(add5(10)); //15
