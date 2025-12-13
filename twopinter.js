// // // function reversestr(str) {
// // //   let strarray = str.split("");
// // //   let right = strarray.length;
// // //   let left = 0;
// // //   while (left < right) {
// // //     [strarray[left], strarray[right]] = [strarray[right], strarray[left]];
// // //     left++;
// // //     right--;
// // //   }
// // //   return strarray.join("");
// // // }
// // // console.log(reversestr("ajay"));
// // // function palindrome(str) {
// // //   let right = str.length - 1;
// // //   let left = 0;
// // //   while (left < right) {
// // //     if (str[left] !== str[right]) return false;
// // //     left++;
// // //     right--;
// // //   }
// // //   return true;
// // // }
// // // console.log(palindrome("madam"));
// // // function findPairSum(arr, target) {
// // //   let right = arr.length - 1;
// // //   let left = 0;
// // //   while (left < right) {
// // //     if (arr[right] + arr[left] === target) return [arr[left], arr[right]];
// // //     else if (arr[right] + arr[left] < target) left++;
// // //     else right--;
// // //   }
// // // }
// // // console.log(findPairSum([2, 3, 4, 6], 7));
// // // function removeduplicate(arr) {
// // //   let left = 1;
// // //   for (let i = 1; i < arr.length; i++) {}
// // // }
// // // console.log(removeduplicate([1, 2, 2, 2, 3, 4, 4, 4, 5]));
// // function bankAccount() {
// //   let balance = 1000; // 🔒 private variable

// //   return {
// //     deposit(amount) {
// //       balance += amount;
// //       console.log("New balance:", balance);
// //     },
// //     getBalance() {
// //       return balance;
// //     },
// //   };
// // }

// // const myAcc = bankAccount();
// // console.log(myAcc);

// // myAcc.deposit(500); // New balance: 1500
// // console.log(myAcc.balance); // ❌ undefined

// // function counter() {
// //   let count = 0;
// //   return function () {
// //     console.log(++count);
// //   };
// // }
// // let result = counter();
// // result();
// // result();
// // result();
// // function multiply(x) {
// //   return function (y) {
// //     console.log(x * y);
// //   };
// // }
// // const multiplicationres = multiply(2);
// // multiplicationres(3);
// // function createFunctions() {
// //   let arr = [];

// //   for (let i = 1; i <= 3; i++) {
// //     arr.push(function () {
// //       console.log(i);
// //     });
// //   }

// //   return arr;
// // }

// // const funcs = createFunctions();
// // funcs[0]();
// // funcs[1]();
// // funcs[2]();
// // let arr = [1, [2, 3, 4, [1, 2]], 2, [6], 3];
// // console.log(arr.push(2, 3));
// // console.log(arr.fill(6, 1, 5));
// // console.log(arr.flatMap((a) => a.push()));
// // const add = (a, b) => a + b;
// // console.log(add);
// // let arr = [1, 2, 3, 4];
// // console.log(arr.slice(0, 3));
// // console.log(arr.splice(1, 2, 5, 6));
// // arr.forEach((element, index) => {
// //   console.log(element, index);
// // });
// // arr.map((element) => {
// //   console.log(element * 2);
// // });
// // function test() {
// //   console.log("hello");
// // }
// // let name = "Ajay";
// // console.log(typeof name);
// // console.log(typeof test);
// let a = [1, 2, 3, 7, 6, 5, 4];
// let b = [12, 13, 13];
// let c = [0, 8, 7];
// let k = a.sort((a, b) => b - a);
// console.log(k);
// console.log(a.concat(b, c, "a", "B"));
// // a = ["HTML", "CSS", "JS", "React"];
// let s = a.toString();
// console.log(s);

// a.splice(1, 0, "AJay");
// console.log(a);
// let a = [1, 2, 3, 4, 15, 16, 50, 17, 18, 10];
// let square = a.map((num) => num ** 2);
// console.log(square);
// console.log(a.filter((num) => num > 10));
// console.log(
//   a.reduce((acc, curr) => {
//     if (acc < curr) {
//       acc = curr;
//     }
//     return acc;
//   }, -Infinity)
// );
// let str = "javascript";
// console.log(
//   str.split("").reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
//   }, {})
// );
// {
//   let x = 10;
// }
// function multiplyBy(n) {
//   return function (m) {
//     console.log(m * n);
//   };
// }
// const double = multiplyBy(2);
// double(5);
// var x = 10;
// {
//   var x = 20;
// }
// console.log(x);msg()

// function removeduplicate(arr) {
//   let map = new Map();
//   for (let num of arr) {
//     map.has(num) ? null : map.set(num, true);
//   }
//   return [...map.keys()];
// }
// console.log(removeduplicate([1, 2, 2, 2, 3, 4, 4, 4, 5]));
// function groupByProperty(arr) {
//   return arr.reduce((acc, curr) => {
//     acc[curr.city] = acc[curr.city] || [];
//     acc[curr.city].push(curr.name);
//     return acc;
//   }, {});
// }
// console.log(
//   groupByProperty([
//     { name: "Ajay", city: "Hyderabad" },
//     { name: "Ravi", city: "Chennai" },
//     { name: "Anu", city: "Hyderabad" },
//     { name: "Teja", city: "Delhi" },
//   ])
// );
// function validsum(arr, target) {
//   let left = arr.length - 1;
//   let right = 0;
//   while (right < left) {
//     if (arr[right] + arr[left] === target) return [right, left];
//     else if (arr[right] + arr[left] < target) right++;
//     else left--;
//   }
// }
// console.log(validsum([2, 7, 11, 15], 9));
// let k = [1, 4, 5, 6, 9, 8];
// let j = [...k];
// console.log(k);
// function sum(...arr) {
//   console.log(arr.reduce((acc, curr) => acc + curr, 0));
// }
// sum(1, 2, 3, 4);
// let cop = JSON.parse(JSON.stringify(k));
// console.log(cop);
// let str = structuredClone(cop);
// console.log(str);
// let numbersArray = [2, 4, 5, 1, 6, 9, 8];
// console.log(Math.max.apply(null, numbersArray));
// let nameObj = {
//   name: "Tony",
// };

// let PrintName = {
//   name: "steve",
//   sayHi: function (village, age) {
//     console.log(village + this.name + " age is " + age);
//   },
// };

// PrintName.sayHi.call(nameObj, "mrk", 42);
// PrintName.sayHi.call(nameObj, "hyd", 2);
// const person = {
//   name: "Reddy",
//   greet: function () {
//     return () => console.log(this.name);
//   },
// };

// const fn = person.greet();
// fn();
// function f() {
//   console.log(this.a);
// }

// const obj = { a: 20 };

// const bound = f.bind(obj);
// bound.call({ a: 50 });
// const s = {
//   name: "Ajay",
//   print: function () {
//     console.log(this.name);
//   },
// };
// let ks = s.print.bind({ name: "R" });
// ks();
// function twoSum(arr, target) {
//   let map = {};
//   for (let i = 0; i < arr.length; i++) {
//     let dif = target - arr[i];
//     if (map[dif] != undefined) {
//       return [i, map[dif]];
//     }
//     map[arr[i]] = i;
//   }
// }
// console.log(twoSum([2, 7, 11, 15], 18));

// function validParanthesis(str) {
//   let stack = [];
//   let obj = {
//     "}": "{",
//     ")": "(",
//     "]": "[",
//   };
//   for (let char of str) {
//     if (char == "{" || char == "[" || char == "(") {
//       stack.push(char);
//     } else {
//       if (obj[char] === stack[stack.length - 1]) {
//         stack.pop();
//       } else return false;
//     }
//   }
//   return stack.length === 0;
// }
// console.log(validParanthesis("[()({)]{}"));
// console.log(typeof []);
//Coding Question 2 — Find the Most Frequent Element
function mostfreqent(arr) {
  let count = {};
  let maxchar;
  let max = -Infinity;
  for (let char of arr) {
    count[char] = (count[char] || 0) + 1;
  }
  console.log(count);
  for (let key in count) {
    if (count[key] > max) {
      maxchar = key;
      max = count[key];
    }
  }
  return maxchar;
}
console.log(mostfreqent(["a", "b", "c", "a", "b", "a"]));
//Coding Question 3 — Longest Word in a Sentence
function longest(str) {
  return str.split(" ").reduce((acc, curr) => {
    if (curr.length > acc.length) {
      acc = curr;
    }
    return acc;
  }, "");
}
console.log(longest("I am learning JavaScript everyday"));
//Coding Question 4 — Check if Two Objects Are Shallow Equal
function shallowEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
console.log(shallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));
console.log(shallowEqual({ a: 1 }, { a: 1, b: 2 }));
//Coding Question 5 — Count Vowels in a String (Efficient)
function countVowels(str) {
  let count = 0;
  for (let char of str) {
    if ("aeiou".includes(char.toLowerCase())) count++;
  }
  return count;
}
console.log(countVowels("Ajay Reddy"));
//🔥 Q1 — Find All Pairs That Sum to Target
function findPairs(arr, target) {
  let map = {};
  let result = [];
  for (let num of arr) {
    if (map[target - num]) result.push([num, target - num]);
    map[num] = true;
  }
  return result;
}
console.log(findPairs([2, 4, 3, 5, 7, 8, 9], 10));
//Q2 — Remove Characters That Appear More Than Once
function remove(str) {
  let count = {};
  let result = "";
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  for (let char in count) {
    if (count[char] === 1) result += char;
  }
  return result;
}
console.log(remove("success"));
//Q4 — Find the First Non-Repeating Number
function nonRepeatNumber(arr) {
  let map = new Map();
  for (let num of arr) {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1);
  }
  console.log(map);
  for (let [key, value] of map) {
    if (map.get(key) === 1) return key;
  }
}
console.log(nonRepeatNumber([4, 5, 1, 2, 0, 4]));
//Q5 — Rotate Array by K Steps (Right Rotation)
function rotate(arr, k) {
  return [...arr.slice(-k), ...arr.slice(0, arr.length - k)];
}
console.log(rotate([1, 2, 3, 4, 5], (k = 2)));
import { useState } from "react";
