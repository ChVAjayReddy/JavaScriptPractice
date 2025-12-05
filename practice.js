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
// function adder(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// const add5 = adder(5);
// console.log(add5(3)); //8
// console.log(add5(10)); //15
// function reverseEachWordinString(str) {
//   let newstr = str.split(" ");
//   for (let i = 0; i < newstr.length; i++) {
//     let temp = "";
//     for (let j = newstr[i].length - 1; j >= 0; j--) {
//       temp += newstr[i][j];
//     }
//     newstr[i] = temp;
//   }
//   return newstr.join(" ");
// }
// console.log(reverseEachWordinString("I Love Javascript"));
// function sumofdigits(num) {
//   let sum = 0;
//   while (num != 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }
// console.log(sumofdigits(9872));
// function countvowels(str) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (let c of str) {
//     if (vowels.includes(c.toLowerCase())) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countvowels("Ajay Reddy"));
// function secondlargset(arr) {
//   let max = Math.max(...arr);

//   let secondlargest;
//   let diff = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i == 0) {
//       diff = max - arr[i];
//       secondlargest = arr[i];
//     } else {
//       if (max - arr[i] < diff && max - arr[i] != 0) {
//         diff = max - arr[i];
//         secondlargest = arr[i];
//       }
//     }
//   }
//   return secondlargest;
// }
// console.log(secondlargset([10, 25, 8, 99, 67]));
// function removeduplicates(arr) {
//   let count = {};
//   for (let num of arr) {
//     count[num] = (count[num] || 0) + 1;
//   }
//   return Object.keys(count).map(Number);
// }
// console.log(removeduplicates([1, 2, 2, 3, 4, 4, 5]));
// function intersection(arr1, arr2) {
//   let count = {};
//   let res = [];
//   for (let num of arr1) {
//     if (!count[num]) {
//       count[num] = true;
//     }
//   }
//   for (let num of arr2) {
//     if (count[num]) {
//       res.push(num);
//     }
//   }
//   return res;
// }
// console.log(intersection([1, 2, 3, 4], [2, 3, 4, 5, 6]));
// function countconsecutive(str) {
//   let res = "";
//   let count = {};
//   for (let c of str) {
//     count[c] = (count[c] || 0) + 1;
//   }
//   for (let c in count) {
//     res += c;
//     res += count[c];
//   }
//   return res;
// }
// console.log(countconsecutive("aabbbbcc"));
// function firstnonrepeatingchar(str) {
//   let map = new Map();
//   for (let c of str) {
//     map.set(c, map.has(c) ? map.get(c) + 1 : 1);
//   }
//   for (let [key, value] of map) {
//     if (value == 1) return key;
//   }
// }
// console.log(firstnonrepeatingchar("swiss"));
// function rotatearray(arr, k) {
//   let result = [];
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i + k > arr.length - 1) {
//       result[j] = arr[i];
//       j++;
//     } else result[i + k] = arr[i];
//   }
//   return result;
// }
// console.log(rotatearray([1, 2, 3, 4, 5], 3));
// function isarmstrong(num) {
//   let power = 0;
//   let temp = num;
//   while (temp != 0) {
//     power++;
//     temp = Math.floor(temp / 10);
//   }
//   let sum = 0;
//   let temp1 = num;
//   while (temp1 != 0) {
//     sum = sum + (temp1 % 10) ** power;
//     temp1 = Math.floor(temp1 / 10);
//   }
//   return sum === num ? true : false;
// }
// console.log(isarmstrong(153));
// function longestword(str) {
//   return str
//     .split(" ")
//     .reduce((acc, curr) => (curr.length < acc ? acc : curr), 0);
// }
// console.log(longestword("I love javascript"));
// function isanagram(str1, str2) {
//   let count = {};
//   for (let char of str1) {
//     count[char] = (count[char] || 0) + 1;
//   }

//   for (let char of str2) {
//     if (!count[char]) return "not anagram";
//     else {
//       count[char] = count[char] - 1;
//       if (count[char] == 0) {
//         delete count[char];
//       }
//     }
//   }

//   return Object.keys(count).length === 0 ? "anagram" : "not anagram";
// }
// console.log(isanagram("listen", "silent"));
// function maxrepeatchar(str) {
//   let count = {};
//   let max = 0;
//   let maxchar = "";
//   for (let char of str) {
//     count[char] = (count[char] || 0) + 1;
//   }
//   for (let char in count) {
//     if (count[char] > max) {
//       max = count[char];
//       maxchar = char;
//     }
//   }
//   return maxchar;
// }
// console.log(maxrepeatchar("success"));

// function groupbyproperty(arr) {
//   return arr.reduce((acc, curr) => {
//     if (acc[curr.dept]) {
//       acc[curr.dept].push(curr.name);
//     } else {
//       acc[curr.dept] = [];
//       acc[curr.dept].push(curr.name);
//     }
//     return acc;
//   }, {});
// }
// console.log(
//   groupbyproperty([
//     { name: "ajay", dept: "react" },
//     { name: "ravi", dept: "react" },
//     { name: "anu", dept: "java" },
//   ])
// );
// async function printHello() {
//   return setTimeout(() => console.log("hello"), 1000);
// }
// printHello();
// function reverseorder(str) {
//   return str.split(" ").reverse().join(" ");
// }
// console.log(reverseorder("I love coding"));
// function evensum(arr) {
//   return arr.reduce((acc, curr) => (curr % 2 == 0 ? curr + acc : acc + 0), 0);
// }
// console.log(evensum([1, 2, 3, 4, 5, 6]));
// function fruquency(str) {
//   let count = {};
//   let newarr = str.split(" ");
//   for (let word of newarr) {
//     count[word] = (count[word] || 0) + 1;
//   }
//   return count;
// }
// console.log(fruquency("i love coding and i love javascript"));
// function findunique(arr) {
//   let count = {};
//   for (let num of arr) {
//     count[num] = (count[num] || 0) + 1;
//   }
//   let unique = [];
//   for (let num in count) {
//     if (count[num] === 1) {
//       unique.push(Number(num));
//     }
//   }
//   return unique;
// }
// console.log(findunique([1, 2, 3, 2, 4, 5, 1]));
// function euqalarrays(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) return false;
//   }
//   return true;
// }
// console.log(euqalarrays([1, 2, 3], [1, 2, 3]));
// console.log(euqalarrays([1, 2, 3], [3, 2, 1]));
// console.log("Start");

// const p = new Promise((resolve, reject) => {
//   console.log("Inside Promise");
//   resolve("Resolved");
// });

// p.then((res) => console.log(res));

// console.log("End");
// function fetchDataPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data received");
//     }, 2000);
//   });
// }
// fetchDataPromise()
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// delay(3000).then(() => console.log("Done"));
// Promise.resolve(1)
//   .then((x) => x + 1)
//   .then((x) => {
//     throw new Error("Something went wrong");
//   })
//   .then((x) => console.log("Success", x))
//   .catch((err) => console.log("Error:", err.message));
// function task1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task 1 completed");
//       resolve();
//     }, 1000);
//   });
// }
// function task2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task 2 completed");
//       resolve();
//     }, 1000);
//   });
// }
// function task3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task 3 completed");
//       resolve();
//     }, 1000);
//   });
// }
// task1()
//   .then(() => task2())
//   .then(() => task3());
// async function printdata(ms) {
//   setTimeout(() => console.log("Hello World"), ms);
// }
// printdata(1000);
// async function sequence() {
//   setTimeout(() => console.log("A Done"), 1000);
//   setTimeout(() => console.log("B Done"), 2000);
// }
// sequence();
// function task1(ms) {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => resolve("task1 done"), ms)
//   );
// }
// function task2(ms) {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => resolve("task2 done"), ms)
//   );
// }
// function task3(ms) {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => resolve("task3 done"), ms)
//   );
// }
// async function parallel() {
//   try {
//     const results = await Promise.all([task1(1000), task2(2000), task3(3000)]);
//     console.log("All data fetched successfully:", results);
//   } catch (error) {
//     console.error("One or more data fetches failed:", error);
//   }
// }
// parallel();
// function unstable() {
//   return new Promise((resolve, reject) =>
//     Math.random() > 0.7 ? resolve("success") : reject("fail")
//   );
// }
// async function getrandom() {
//   try {
//     for (let i = 0; i < 3; i++) {
//       const p = unstable();
//       console.log("Attempt " + i + p);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
// getrandom();
// async function printnum() {
//   try {
//     for (let i = 1; i <= 5; i++) {
//       setTimeout(() => console.log(i), 1000);
//     }
//   } catch {
//     console.log("Not printed");
//   }
// }
// printnum();
// function nameaa() {
//   let a = "greeksforgeeks";
//   let res = "";
//   for (let c of a) {
//     if (c !== "e") {
//       res += c;
//     }
//   }
//   return res;
// }
// console.log(nameaa());
// function getuser() {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve("User fetched"), 1000)
//   );
// }
// function getorders() {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve("orders fetched"), 1500)
//   );
// }
// async function getdata() {
//   try {
//     const p1 = await getuser();
//     console.log(p1);
//     const p2 = await getorders();
//     console.log(p2);
//   } catch {
//     console.log("Data not fetched");
//   }
// }
// // getdata();
// async function getdata() {
//   try {
//     const p1 = Promise.all([getuser(), getorders()]);

//     console.log(p1);
//   } catch {
//     console.log("Data not fetched");
//   }
// }
// getdata();
// function groupbyproperty(arr) {
//   return arr.reduce((acc, curr) => {
//     if (acc[curr.dept]) {
//       acc[curr.dept].push(curr.name);
//     } else {
//       acc[curr.dept] = [];
//       acc[curr.dept].push(curr.name);
//     }
//     return acc;
//   }, {});
// }
// console.log(
//   groupbyproperty([
//     { name: "Ajay", dept: "React" },
//     { name: "Anu", dept: "Java" },
//     { name: "Ravi", dept: "React" },
//   ])
// );
// function firstnonrepeatingword(str) {
//   let map = new Map();
//   let strarray = str.split(" ");
//   for (let i = 0; i < strarray.length; i++) {
//     map.set(strarray[i], map.has(strarray[i]) ? map.get(strarray[i]) + 1 : 1);
//   }
//   for (let [key, value] of map) {
//     if (value === 1) {
//       return key;
//     }
//   }
// }
// console.log(firstnonrepeatingword("I love coding and I love javascript"));

// function longestpalindrome(str) {
//   let longestlength = 0;
//   let longest;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       let temp = str.substring(i, j);
//       if (temp === temp.split("").reverse().join("")) {
//         if (longestlength < temp.length) {
//           longestlength = temp.length;
//           longest = temp;
//         }
//       }
//     }
//   }
//   return longest;
// }
// console.log(longestpalindrome("babad"));
// function getdata() {
//   return new Promise((resolve, reject) =>
//     Math.random() < 0.5 ? resolve("success") : reject("fail")
//   );
// }

// async function retry(attempts) {
//   for (let i = 1; i <= attempts; i++) {
//     try {
//       console.log("attempt" + i);
//       const p = await getdata();
//       console.log(p);
//       return;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }
// retry(5);
// function megrintervals(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (res.length === 0) {
//       res.push(arr[i]);
//     } else {
//       let lastinterval = res[res.length - 1];
//       if (arr[i][0] <= lastinterval[1]) {
//         lastinterval[1] = Math.max(lastinterval[1], arr[i][1]);
//       } else {
//         res.push(arr[i]);
//       }
//     }
//   }
//   return res;
// }
// console.log(
//   megrintervals([
//     [1, 3],
//     [2, 4],
//     [6, 8],
//     [9, 10],
//   ])
// );
function findmissing(arr) {
  let total = (arr.length * (arr.length + 1)) / 2;
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return total - sum;
}
console.log(findmissing([3, 0, 1]));
function longestsubstring(str) {
  let sun = [];
  let lenght = 0;
  let maxlength;
  for (let i = 0; i < str.length; i++) {
    let count = {};
    for (let j = i + 1; j <= str.length; j++) {
      let temp = str.substring(i, j);
      let res = true;
      for (let c of temp) {
        if (count[c]) {
          res = false;
        } else {
          count[c] = 1;
        }
      }
      if (res && lenght < temp.length) {
        lenght = temp.length;
        maxlength = temp;
      }
    }
  }
  return maxlength;
}
console.log(longestsubstring("abcabcbb"));
function groupanagrams(strs) {
  let anagram = {};
  for (let str of strs) {
    let newstr = str.split("").sort().join("");
    if (anagram[newstr]) {
      anagram[newstr].push(str);
    } else {
      anagram[newstr] = [];
      anagram[newstr].push(str);
    }
  }
  return Object.values(anagram);
}
console.log(groupanagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
function deepclone(obj) {
  if (obj == null || typeof obj != "object") return obj;
  let clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    clone[key] = deepclone(obj[key]);
  }
  return clone;
}

console.log(deepclone({ name: "ajay", details: { age: 17, city: "hyd" } }));
function flatarray(arr) {
  let res = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      res.push(...flatarray(item));
    } else res.push(item);
  }
  return res;
}
console.log(flatarray([1, 2, [1, 2, 5, [15, 8, 9]], 7, 8, 9]));
