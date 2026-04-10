// // function waits(ms) {
// //   return new Promise((resolve, reject) =>
// //     setTimeout(
// //       () => resolve(console.log("Printed after " + ms + " millseconds")),
// //       ms
// //     )
// //   );
// // }
// // waits(10000);
// // function getApple() {
// //   return new Promise((resolve) => resolve("🍎 Apple"));
// // }
// // function getBanana() {
// //   return new Promise((resolve) => resolve("🍌 Banana"));
// // }
// // function getMango() {
// //   return new Promise((resolve) => resolve("🥭 Mango"));
// // }
// // getApple()
// //   .then((res) => console.log(res))
// //   .then(getBanana)
// //   .then((res) => console.log(res))
// //   .then(getMango)
// //   .then((res) => console.log(res));
// // let data = { id: 1, name: "Ajay", orders: ["Order1", "Order2"] };
// // function getUser() {
// //   return new Promise((resolve) =>
// //     setTimeout(() => resolve({ id: 1, name: "Ajay" }), 1000)
// //   );
// // }
// // function getOrders(userId) {
// //   return new Promise((resolve) =>
// //     setTimeout(() => resolve(["Order1", "Order2"]), 1000)
// //   );
// // }

// const { reject } = require("async");

// // const { use } = require("react");

// // async function showDetails() {
// //   const name = await getUser();
// //   console.log(name);
// //   const orderdetails = await getOrders();
// //   console.log(orderdetails);
// // }
// // showDetails();
// // function task1() {
// //   return new Promise((r) => setTimeout(() => r("Task 1"), 10000));
// // }
// // function task2() {
// //   return new Promise((r) => setTimeout(() => r("Task 2"), 1500));
// // }
// // function task3() {
// //   return new Promise((r) => setTimeout(() => r("Task 3"), 500));
// // }
// // async function tasks() {
// //   const res = await Promise.all([task1(), task2(), task3()]);
// //   console.log("All tasks completed:" + res);
// // }
// // tasks();
// // function getData() {
// //   return new Promise((resolve, reject) => {
// //     const ok = Math.random() > 0.5;
// //     setTimeout(() => {
// //       ok ? resolve("Data Loaded") : reject("Failed to load");
// //     }, 1000);
// //   });
// // }
// // async function fetchData() {
// //   try {
// //     const res = await getData();
// //     console.log(res);
// //   } catch (error) {
// //     console.log(e);
// //   }
// // }
// // fetchData();

// // async function getData() {
// //   try {
// //     const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
// //     let res = await data.json();
// //     console.log(res.userId, res.title);
// //   } catch (error) {
// //     console.error("Error fetching data:", error);
// //   } finally {
// //     console.log("Finished");
// //   }
// // }
// // getData();

// // async function getData() {
// //   try {
// //     const [posts, users, comments] = await Promise.all([
// //       fetch("https://jsonplaceholder.typicode.com/posts"),
// //       fetch("https://jsonplaceholder.typicode.com/users"),
// //       fetch("https://jsonplaceholder.typicode.com/comments"),
// //     ]);
// //     console.log("Users :" + (await users.json()).length);
// //     console.log("Posts :" + (await posts.json()).length);
// //     console.log("Comments :" + (await comments.json()).length);
// //   } catch (error) {
// //     console.error("Error fetching data:", error);
// //   } finally {
// //     console.log("Finished");
// //   }
// // }
// // getData();

// // async function getData() {
// //   for (let i = 1; i <= 3; i++) {
// //     try {
// //       const jsondata = await fetch(
// //         `https://jsonplaceholder.typicode.com/posts/` + i
// //       );
// //       const data = await jsondata.json();
// //       console.log(`post ${i} ` + data.title);
// //     } catch (error) {
// //       console.error(`Error in fetching ${i} title`);
// //     } finally {
// //       console.log("Finished");
// //     }
// //   }
// // }
// // getData();
// // async function fetchData() {
// //   try {
// //     const response = await fetch("https://api.example.com/data"); // This might throw an error if the network request fails or the server returns an error.
// //     if (!response.ok) {
// //       throw new Error(`HTTP error! status: ${response.status}`);
// //     }
// //     const data = await response.json(); // This might throw an error if the response is not valid JSON.
// //     console.log("Data received:", data);
// //   } catch (error) {
// //     console.error("An error occurred:", error);
// //     // You can perform other error handling actions here, like displaying a user-friendly message.
// //   }
// // }

// // fetchData();
// // async function getData() {
// //   try {
// //     const data = await fetch(url);
// //     const json = await data.json();
// //   } catch (err) {
// //     console.log("Handled Error:", err);
// //   }
// // }
// // getData()
// // async function fetchData(url) {
// //   try {
// //     const response = await fetch(url); // Attempt to fetch data
// //     if (!response.ok) {
// //       // Check for HTTP errors (e.g., 404 Not Found, 500 Internal Server Error)
// //       throw new Error(`HTTP error! status: ${response.status}`);
// //     }
// //     const data = await response.json(); // Parse the JSON response
// //     console.log("Data received:", data);
// //     return data;
// //   } catch (error) {
// //     console.error("Error fetching data:", error.message); // Log the error message
// //     // You might also want to re-throw the error or return a specific value
// //     // throw error;
// //     // return null;
// //   }
// // }

// // // Example usage:
// // (async () => {
// //   // Successful fetch
// //   await fetchData("https://jsonplaceholder.typicode.com/todos/1");

// //   // Fetch with an invalid URL (will trigger a network error)
// //   await fetchData("https://invalid-url-example.com/data");

// //   // Fetch with a URL that returns an HTTP error (e.g., 404)
// //   await fetchData("https://jsonplaceholder.typicode.com/nonexistent-resource");
// // })();
// // async function getData() {
// //   try {
// //     const data = await fetch("https://jsonplaceholder.typicode.com/postsss/1");

// //     if (!data.ok) {
// //       throw new Error("Invalid URL");
// //     }

// //     const res = await data.json();
// //     console.log(res);
// //   } catch (error) {
// //     console.error(error.message);
// //   } finally {
// //     console.log("Finished");
// //   }
// // }

// // getData();
// // async function getData() {
// //   try {
// //     const response = await fetch("https://httpstat.us/200?sleep=1000");

// //     // This line will throw a SyntaxError (because response is not JSON)
// //     const data = await response.json();

// //     console.log(data);
// //   } catch (err) {
// //     console.log("JSON Parsing Failed");
// //   } finally {
// //     console.log("Finished");
// //   }
// // }

// // getData();
// // function riskyFunction() {
// //   return new Promise((resolve, reject) => {
// //     reject("Something went wrong");
// //   });
// // }
// // async function test() {
// //   try {
// //     const data = await riskyFunction();
// //   } catch (err) {
// //     console.log("Custom Error :" + err);
// //   }
// // }
// // test();
// // function countCharacters(sentence) {
// //   let count = {};
// //   let result = [];
// //   let newsen = sentence.toLowerCase().split("").sort().join("");
// //   console.log(newsen);
// //   for (let char of newsen) {
// //     if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
// //       count[char.toLowerCase()] = (count[char] || 0) + 1;
// //     }
// //   }
// //   for (let c in count) {
// //     let str = "";
// //     str += c;
// //     str += " ";
// //     str += count[c];
// //     result.push(str);
// //   }
// //   return result;
// // }
// // console.log(countCharacters("I love coding challenges!"));
// // let data = [
// //   { userId: 1, name: "Ajay", posts: ["post1", "post2"] },
// //   { userId: 2, name: "Anu", posts: ["post1", "post2"] },
// // ];
// // function fetchUser(id) {
// //   return new Promise((resolve) =>
// //     resolve(
// //       setTimeout(() => {
// //         let temp = data.filter((data) => data.userId === id);
// //         return temp;
// //       }, 5000)
// //     )
// //   );
// // }
// // async function fetchUserAndPosts(id) {
// //   const userdata = await fetchUser(id);
// //   console.log(userdata);
// // }
// // fetchUserAndPosts(2);
// //Q4 — Random Success or Failure
// // function unstableAPI() {
// //   return new Promise((resolve, reject) => {
// //     Math.random() > 0.5 ? resolve("Success!") : reject("Failed!");
// //   });
// // }
// // async function getData() {
// //   try {
// //     const data = await unstableAPI();
// //     console.log(data);
// //   } catch (error) {
// //     console.log(error);
// //   } finally {
// //     console.log("Fineshed");
// //   }
// // }
// // getData();
// //Q5 — Chained Error (Stop Execution)
// // async function fetchWithRetry(url, attempts) {
// //   while (attempts >= 0) {
// //     try {
// //       const response = await fetch(url);
// //     } catch (error) {
// //       attempts--;
// //     }
// //   }
// // }
// // fetchWithRetry("https://jsonplaceholder.typicode.com/posts-invalid", 3);
// //Q7 — Timeout Error using Promise.race() (Advanced)
// //Q10 — Custom Validation Error
// // function validateuser(user) {
// //   return new Promise((resove, reject) => {
// //     if (user.name == "") {
// //       reject("Name is requred");
// //     } else if (user.email == "") {
// //       reject("Email is requred");
// //     } else {
// //       resove("User Registered");
// //     }
// //   });
// // }
// // async function registerUser(user) {
// //   try {
// //     const res = await validateuser(user);
// //     console.log(res);
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }
// // registerUser({ name: "Ajay", email: "" }); //asynch await

// // function isFizzBuzz(sequence) {
// //   for (let i = 0; i < sequence.length; i++) {
// //     if ((i + 1) % 3 == 0 && (i + 1) % 3 == 0) {
// //       if (sequence[i] !== "FizzBuzz") {
// //         return false;
// //       }
// //     } else if ((i + 1) % 3 == 0) {
// //       if (sequence[i] !== "Fizz") {
// //         return false;
// //       }
// //     } else if ((i + 1) % 5 == 0) {
// //       if (sequence[i] !== "Buzz") {
// //         return false;
// //       }
// //     } else {
// //       if (sequence[i] !== i + 1) {
// //         return false;
// //       }
// //     }
// //   }

// //   return true;
// // }
// // console.log(isFizzBuzz([1, 2, "Fizz", 4]));
// // function calculateAge(birthday) {
// //   let year = "";
// //   for (let char of birthday) {
// //     if (char == "-") {
// //       break;
// //     }
// //     year += char;
// //   }

// //   return year;
// // }
// // console.log(calculateAge("2000-11-20"));
// // function factorial(n) {
// //   let result = 1;
// //   while (n >= 1) {
// //     result = result * n;
// //     n--;
// //   }
// //   console.log(result);
// // }
// // factorial(5);

// // async function getdata() {
// //   return "Ajay";
// // }
// // const data = getdata();
// // data.then((es) => console.log(es));
// // function fetchData() {
// //   return new Promise((resolve) =>
// //     setTimeout(() => resolve("Data fetched"), 1000)
// //   );
// // }

// // fetchData()
// //   .then((data) => {
// //     console.log(data);
// //     return "Processing data";
// //   })
// //   .then((result) => console.log(result))
// //   .catch((err) => console.log(err));
// // async function getData() {
// //   try {
// //     const data = await fetchData();
// //     console.log(data);
// //   } catch {}
// // }

// //2️⃣ Sequential API Calls (Order Matters)
// // function task1() {
// //   return new Promise((res) => setTimeout(() => res("Task 1"), 1000));
// // }
// // function task2() {
// //   return new Promise((res) => setTimeout(() => res("Task 2"), 1000));
// // }
// // function task3() {
// //   return new Promise((res) => setTimeout(() => res("Task 3"), 1000));
// // }
// // async function seqenceaAPI() {
// //   try {
// //     const data1 = await task1();
// //     console.log(data1);

// //     const data2 = await task2();
// //     console.log(data2);

// //     const data3 = await task2();
// //     console.log(data3);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }
// // seqenceaAPI();
// // //3️⃣ Parallel Execution using Promise.all
// // async function parallelExecution() {
// //   try {
// //     const data = await Promise.all([task1(), task2(), task3()]);
// //     console.log(data);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }
// // parallelExecution();

// // //4️⃣ Retry Promise on Failure
// // function unstableAPI() {
// //   return new Promise((resolve, reject) => {
// //     Math.random() > 0.7 ? resolve("Success") : reject("Failed");
// //   });
// // }
// // async function retryPromise(retries) {
// //   for (let i = 1; i <= retries; i++) {
// //     try {
// //       const data = await unstableAPI();
// //       console.log(data);
// //       return;
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   }
// // }
// // retryPromise(4);

// // //5️⃣ Async Delay Function
// // function delay(ms) {
// //   return new Promise((resolve, reject) => setTimeout(() => resolve("End"), ms));
// // }
// // async function delayfn(ms) {
// //   try {
// //     console.log("Start");
// //     const data = await delay(ms);
// //     console.log(data);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }
// // delayfn(2000);
// //Q1️⃣ Remove Duplicates but Keep LAST Occurrence
// //Q2️⃣ Find First Non-Repeating Character
// // function nonrepeatchar(str) {
// //   let count = new Map();
// //   for (let char of str) {
// //     count.set(char, count.has(char) ? count.get(char) + 1 : 1);
// //   }
// //   for (const [key, value] of count) {
// //     if (value === 1) return key;
// //   }
// // }
// // console.log(nonrepeatchar("javascript"));
// // //Q3️⃣ Two Sum (Indexes)
// // function twosum(arr, target) {
// //   let num = {};
// //   for (let i = 0; i < arr.length; i++) {
// //     let diff = target - arr[i];
// //     if (diff in num) {
// //       return [i, num[diff]];
// //     }
// //     num[arr[i]] = i;
// //   }
// // }
// // console.log(twosum([2, 7, 11, 15], 9));
// // //Q4️⃣ Flatten Nested Array (No flat())
// // function FlattenArray(arr) {
// //   let result = [];
// //   for (let num of arr) {
// //     if (Array.isArray(num)) {
// //       result.push(...FlattenArray(num));
// //     } else {
// //       result.push(num);
// //     }
// //   }
// //   return result;
// // }
// // console.log(FlattenArray([1, [2, [3, 4], 5], 6]));
// // //Q5️⃣ Longest Word in Sentence
// // function longest(str) {
// //   return str.split(" ").reduce((acc, curr) => {
// //     if (acc.length < curr.length) acc = curr;
// //     return acc;
// //   }, "");
// // }
// // console.log(longest("I am learning JavaScript"));
// // //Q6️⃣ Count Frequency of Elements
// // function countFrequency(arr) {
// //   let count = {};
// //   for (let num of arr) {
// //     count[num] = (count[num] || 0) + 1;
// //   }
// //   return count;
// // }
// // console.log(countFrequency([1, 2, 2, 3, 3, 3]));
// // //Q7️⃣ Check Anagram
// // function isAnagram(str1, str2) {
// //   let count = {};
// //   for (let char of str1) {
// //     count[char] = (count[char] || 0) + 1;
// //   }
// //   for (let char of str2) {
// //     if (!count[char]) return false;
// //     count[char] = count[char] - 1;
// //     if (count[char] === 0) delete count[char];
// //   }
// //   return Object.keys(count).length === 0 ? true : false;
// // }
// // console.log(isAnagram("listen", "silent"));
// // //Q8️⃣ Move All Zeros to End (In-place)
// // function movezeros(arr) {
// //   let left = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] !== 0) {
// //       [arr[i], arr[left]] = [arr[left], arr[i]];
// //       left++;
// //     }
// //   }

// //   return arr;
// // }
// // console.log(movezeros([0, 1, 0, 3, 12]));
// // //Q9️⃣ Find Missing Number (0 to N)
// // function findmissing(arr) {
// //   let sum = 0;
// //   let totalsum = (arr.length * (arr.length + 1)) / 2;
// //   for (let num of arr) {
// //     sum += num;
// //   }
// //   return totalsum - sum;
// // }
// // console.log(findmissing([3, 0, 1]));
// //Q🔟 Reverse Each Word (Order Same)
// // function reversestr(str) {
// //   return str
// //     .split(" ")
// //     .map((word) => {
// //       return word.split("").reverse().join("");
// //     })
// //     .join(" ");
// // }
// // console.log(reversestr("I love JavaScript"));

// // //Q3️⃣ Merge Two Sorted Arrays (Without sort())
// // function merge() {}
// // let ar = [1, 2, 3];
// // console.log(ar.toString());
// // const originalObj = {
// //   name: "Alice",
// //   details: { age: 30, hobbies: ["coding", "hiking"] },
// // };
// // function deepclone(value) {
// //   // 1️⃣ Base condition (primitive values)
// //   if (value === null || typeof value !== "object") {
// //     return value;
// //   }

// //   // 2️⃣ Handle Date
// //   if (value instanceof Date) {
// //     return new Date(value);
// //   }

// //   // 3️⃣ Handle Array
// //   if (Array.isArray(value)) {
// //     return value.map((item) => deepclone(item));
// //   }

// //   // 4️⃣ Handle Object
// //   const clonedObj = {};
// //   for (let key in value) {
// //     clonedObj[key] = deepclone(value[key]);
// //   }

// //   return clonedObj;
// // }

// // console.log(deepclone(originalObj));
// function task() {
//   return new Promise((resolve, reject) =>
//     Math.random() > 1.5 ? resolve("Success 1") : reject("Fail")
//   );
// }
// function task1() {
//   return new Promise((resolve, reject) =>
//     Math.random() > 1.5 ? resolve("Success 2") : reject("Fail 2")
//   );
// }

// function task2() {
//   return new Promise((resolve, reject) =>
//     Math.random() > 1.5 ? resolve("Success 3") : reject("Fail 3")
//   );
// }

// async function task4() {
//   try {
//     let data = await Promise.allSettled([task6(), task1(), task2()]);
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.log("Promise.all is executed");
//   }
// }
// task4();
//🟢 Question 1: Sequential API Calls
// function task1() {
//   return new Promise((resolve, reject) =>
//     Math.random() > 0.5 ? resolve(true) : reject(false)
//   );
// }
// function task2(result) {
//   return new Promise((resolve, reject) =>
//     result ? resolve("true") : reject("false")
//   );
// }
// async function call() {
//   try {
//     const task1res = await task1();
//     const task2res = await task2(task1res);
//     console.log(task2res);
//     return task2res;
//   } catch (err) {
//     console.error(err);
//   }
// }
// call();
// //✅ Q1. Convert Promise chain to async/await
// function fetchUser() {
//   return new Promise((resolve) => setTimeout(() => resolve("User data"), 1000));
// }

// async function getData() {
//   try {
//     const data = await fetchUser();
//     console.log(data);
//     console.log("Processed");
//   } catch (err) {
//     console.error(err);
//   }
// }
// getData();
// //✅ Q2. Sequential async execution
// async function sequence() {
//   try {
//     const task1 = await new Promise((resolve) =>
//       setTimeout(() => resolve("Task 1 done"), 1000)
//     );
//     console.log(task1);
//     const task2 = await new Promise((resolve) =>
//       setTimeout(() => resolve("Task 2 done"), 1000)
//     );
//     console.log(task2);
//     const task3 = await new Promise((resolve) =>
//       setTimeout(() => resolve("Task 3 done"), 1000)
//     );
//     console.log(task3);
//   } catch (err) {
//     console.error(err);
//   }
// }
// sequence();
// //✅ Q3. Parallel execution using Promise.all
// function api1() {
//   return new Promise((res) => setTimeout(() => res("API 1"), 1000));
// }
// function api2() {
//   return new Promise((res) => setTimeout(() => res("API 2"), 2000));
// }
// async function parallel() {
//   try {
//     const data = await Promise.all([api1(), api2()]);
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }
// parallel();
// //✅ Q4. Retry API on failure (interview favorite)
// function unstableAPI() {
//   return new Promise((resolve, reject) => {
//     Math.random() > 0.7 ? resolve("Success") : reject("Fail");
//   });
// }
// async function retry(num) {
//   for (let i = 1; i <= num; i++) {
//     try {
//       const data = await unstableAPI();
//       console.log(data);
//       return;
//     } catch (err) {
//       console.error(err);
//     }
//   }
// }
// retry(7);
// //✅ Q5. Delay function using async/await
// function delay(ms) {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve(`Hello after ${ms / 1000} seconds`), ms)
//   );
// }
// async function asyncdelay(ms) {
//   try {
//     const data = await delay(ms);
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }
// asyncdelay(10000);
//🔥 Q1. Async Task Queue (Sequential Execution)
// function task(ms, value) {
//   return new Promise((resolve) => setTimeout(() => resolve(value), ms));
// }
// runSequential([
//   () => task(1000, "A"),
//   () => task(500, "B"),
//   () => task(300, "C"),
// ]);
// async function runSequential(tasks) {
//   for (let i = 0; i < tasks.length; i++) {
//     try {
//       const data = await tasks[i]();
//       console.log(data);
//     } catch (err) {
//       console.error(err);
//     }
//   }
// }
// //🔥 Q2. Concurrency Limit (Very Common in Interviews)
// function task(ms, value) {
//   return new Promise((resolve) => setTimeout(() => resolve(value), ms));
// }
// const tasks = [
//   () => task(1000, "A"),
//   () => task(500, "B"),
//   () => task(300, "C"),
//   () => task(400, "D"),
// ];
// async function runWithLimit(tasks, limit) {
//   for (let i = 0; i < limit; i++) {
//     try {
//       const data = await tasks[i]();
//       console.log(data);
//     } catch (err) {
//       console.error(err);
//     }
//   }
// }
// runWithLimit(tasks, 2);
// function DetectNumbersfromJumbledCharacters(numchars) {
//   let num = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
//   ];
//   let res = [];
//   let arr = numchars.split("");
//   console.log(arr);
//   for (let i = 0; i < 10; i++) {
//     let cont = 0;
//     for (let char of num[i]) {
//       if (arr.indexOf(char)) {
//         let temp = arr.indexOf(char);
//         arr.splice(temp, 1);

//         cont++;
//       }
//     }

//     if (cont === num[i].length) {
//       res.push(i);
//     }
//   }

//   return res;
// }

// console.log(DetectNumbersfromJumbledCharacters("onexotw"));
// // function waits(ms) {
// //   return new Promise((resolve, reject) =>
// //     setTimeout(
// //       () => resolve(console.log("Printed after " + ms + " millseconds")),
// //       ms
// //     )
// //   );
// // }
// // waits(10000);
// // function getApple() {
// //   return new Promise((resolve) => resolve("🍎 Apple"));
// // }
// // function getBanana() {
// //   return new Promise((resolve) => resolve("🍌 Banana"));
// // }
// // function getMango() {
// //   return new Promise((resolve) => resolve("🥭 Mango"));
// // }
// // getApple()
// //   .then((res) => console.log(res))
// //   .then(getBanana)
// //   .then((res) => console.log(res))
// //   .then(getMango)
// //   .then((res) => console.log(res));
// // let data = { id: 1, name: "Ajay", orders: ["Order1", "Order2"] };
// // function getUser() {
// //   return new Promise((resolve) =>
// //     setTimeout(() => resolve({ id: 1, name: "Ajay" }), 1000)
// //   );
// // }
// // function getOrders(userId) {
// //   return new Promise((resolve) =>
// //     setTimeout(() => resolve(["Order1", "Order2"]), 1000)
// //   );
// // }

// const { reject } = require("async");

// // const { use } = require("react");

// // async function showDetails() {
// //   const name = await getUser();
// //   console.log(name);
// //   const orderdetails = await getOrders();
// //   console.log(orderdetails);
// // }
// // showDetails();
// // function task1() {
// //   return new Promise((r) => setTimeout(() => r("Task 1"), 10000));
// // }
// // function task2() {
// //   return new Promise((r) => setTimeout(() => r("Task 2"), 1500));
// // }
// // function task3() {
// //   return new Promise((r) => setTimeout(() => r("Task 3"), 500));
// // }
// // async function tasks() {
// //   const res = await Promise.all([task1(), task2(), task3()]);
// //   console.log("All tasks completed:" + res);
// // }
// // tasks();
// // function getData() {
// //   return new Promise((resolve, reject) => {
// //     const ok = Math.random() > 0.5;
// //     setTimeout(() => {
// //       ok ? resolve("Data Loaded") : reject("Failed to load");
// //     }, 1000);
// //   });
// // }
// // async function fetchData() {
// //   try {
// //     const res = await getData();
// //     console.log(res);
// //   } catch (error) {
// //     console.log(e);
// //   }
// // }
// // fetchData();

// // async function getData() {
// //   try {
// //     const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
// //     let res = await data.json();
// //     console.log(res.userId, res.title);
// //   } catch (error) {
// //     console.error("Error fetching data:", error);
// //   } finally {
// //     console.log("Finished");
// //   }
// // }
// // getData();

// // async function getData() {
// //   try {
// //     const [posts, users, comments] = await Promise.all([
// //       fetch("https://jsonplaceholder.typicode.com/posts"),
// //       fetch("https://jsonplaceholder.typicode.com/users"),
// //       fetch("https://jsonplaceholder.typicode.com/comments"),
// //     ]);
// //     console.log("Users :" + (await users.json()).length);
// //     console.log("Posts :" + (await posts.json()).length);
// //     console.log("Comments :" + (await comments.json()).length);
// //   } catch (error) {
// //     console.error("Error fetching data:", error);
// //   } finally {
// //     console.log("Finished");
// //   }
// // }
// // getData();

// // async function getData() {
// //   for (let i = 1; i <= 3; i++) {
// //     try {
// //       const jsondata = await fetch(
// //         `https://jsonplaceholder.typicode.com/posts/` + i
// //       );
// //       const data = await jsondata.json();
// //       console.log(`post ${i} ` + data.title);
// //     } catch (error) {
// //       console.error(`Error in fetching ${i} title`);
// //     } finally {
// //       console.log("Finished");
// //     }
// //   }
// // }
// // getData();
// // async function fetchData() {
// //   try {
// //     const response = await fetch("https://api.example.com/data"); // This might throw an error if the network request fails or the server returns an error.
// //     if (!response.ok) {
// //       throw new Error(`HTTP error! status: ${response.status}`);
// //     }
// //     const data = await response.json(); // This might throw an error if the response is not valid JSON.
// //     console.log("Data received:", data);
// //   } catch (error) {
// //     console.error("An error occurred:", error);
// //     // You can perform other error handling actions here, like displaying a user-friendly message.
// //   }
// // }

// // fetchData();
// // async function getData() {
// //   try {
// //     const data = await fetch(url);
// //     const json = await data.json();
// //   } catch (err) {
// //     console.log("Handled Error:", err);
// //   }
// // }
// // getData()
// // async function fetchData(url) {
// //   try {
// //     const response = await fetch(url); // Attempt to fetch data
// //     if (!response.ok) {
// //       // Check for HTTP errors (e.g., 404 Not Found, 500 Internal Server Error)
// //       throw new Error(`HTTP error! status: ${response.status}`);
// //     }
// //     const data = await response.json(); // Parse the JSON response
// //     console.log("Data received:", data);
// //     return data;
// //   } catch (error) {
// //     console.error("Error fetching data:", error.message); // Log the error message
// //     // You might also want to re-throw the error or return a specific value
// //     // throw error;
// //     // return null;
// //   }
// // }

// // // Example usage:
// // (async () => {
// //   // Successful fetch
// //   await fetchData("https://jsonplaceholder.typicode.com/todos/1");

// //   // Fetch with an invalid URL (will trigger a network error)
// //   await fetchData("https://invalid-url-example.com/data");

// //   // Fetch with a URL that returns an HTTP error (e.g., 404)
// //   await fetchData("https://jsonplaceholder.typicode.com/nonexistent-resource");
// // })();
// // async function getData() {
// //   try {
// //     const data = await fetch("https://jsonplaceholder.typicode.com/postsss/1");

// //     if (!data.ok) {
// //       throw new Error("Invalid URL");
// //     }

// //     const res = await data.json();
// //     console.log(res);
// //   } catch (error) {
// //     console.error(error.message);
// //   } finally {
// //     console.log("Finished");
// //   }
// // }

// // getData();
// // async function getData() {
// //   try {
// //     const response = await fetch("https://httpstat.us/200?sleep=1000");

// //     // This line will throw a SyntaxError (because response is not JSON)
// //     const data = await response.json();

// //     console.log(data);
// //   } catch (err) {
// //     console.log("JSON Parsing Failed");
// //   } finally {
// //     console.log("Finished");
// //   }
// // }

// // getData();
// // function riskyFunction() {
// //   return new Promise((resolve, reject) => {
// //     reject("Something went wrong");
// //   });
// // }
// // async function test() {
// //   try {
// //     const data = await riskyFunction();
// //   } catch (err) {
// //     console.log("Custom Error :" + err);
// //   }
// // }
// // test();
// // function countCharacters(sentence) {
// //   let count = {};
// //   let result = [];
// //   let newsen = sentence.toLowerCase().split("").sort().join("");
// //   console.log(newsen);
// //   for (let char of newsen) {
// //     if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
// //       count[char.toLowerCase()] = (count[char] || 0) + 1;
// //     }
// //   }
// //   for (let c in count) {
// //     let str = "";
// //     str += c;
// //     str += " ";
// //     str += count[c];
// //     result.push(str);
// //   }
// //   return result;
// // }
// // console.log(countCharacters("I love coding challenges!"));
// // let data = [
// //   { userId: 1, name: "Ajay", posts: ["post1", "post2"] },
// //   { userId: 2, name: "Anu", posts: ["post1", "post2"] },
// // ];
// // function fetchUser(id) {
// //   return new Promise((resolve) =>
// //     resolve(
// //       setTimeout(() => {
// //         let temp = data.filter((data) => data.userId === id);
// //         return temp;
// //       }, 5000)
// //     )
// //   );
// // }
// // async function fetchUserAndPosts(id) {
// //   const userdata = await fetchUser(id);
// //   console.log(userdata);
// // }
// // fetchUserAndPosts(2);
// //Q4 — Random Success or Failure
// // function unstableAPI() {
// //   return new Promise((resolve, reject) => {
// //     Math.random() > 0.5 ? resolve("Success!") : reject("Failed!");
// //   });
// // }
// // async function getData() {
// //   try {
// //     const data = await unstableAPI();
// //     console.log(data);
// //   } catch (error) {
// //     console.log(error);
// //   } finally {
// //     console.log("Fineshed");
// //   }
// // }
// // getData();
// //Q5 — Chained Error (Stop Execution)
// // async function fetchWithRetry(url, attempts) {
// //   while (attempts >= 0) {
// //     try {
// //       const response = await fetch(url);
// //     } catch (error) {
// //       attempts--;
// //     }
// //   }
// // }
// // fetchWithRetry("https://jsonplaceholder.typicode.com/posts-invalid", 3);
// //Q7 — Timeout Error using Promise.race() (Advanced)
// //Q10 — Custom Validation Error
// // function validateuser(user) {
// //   return new Promise((resove, reject) => {
// //     if (user.name == "") {
// //       reject("Name is requred");
// //     } else if (user.email == "") {
// //       reject("Email is requred");
// //     } else {
// //       resove("User Registered");
// //     }
// //   });
// // }
// // async function registerUser(user) {
// //   try {
// //     const res = await validateuser(user);
// //     console.log(res);
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }
// // registerUser({ name: "Ajay", email: "" }); //asynch await

// // function isFizzBuzz(sequence) {
// //   for (let i = 0; i < sequence.length; i++) {
// //     if ((i + 1) % 3 == 0 && (i + 1) % 3 == 0) {
// //       if (sequence[i] !== "FizzBuzz") {
// //         return false;
// //       }
// //     } else if ((i + 1) % 3 == 0) {
// //       if (sequence[i] !== "Fizz") {
// //         return false;
// //       }
// //     } else if ((i + 1) % 5 == 0) {
// //       if (sequence[i] !== "Buzz") {
// //         return false;
// //       }
// //     } else {
// //       if (sequence[i] !== i + 1) {
// //         return false;
// //       }
// //     }
// //   }

// //   return true;
// // }
// // console.log(isFizzBuzz([1, 2, "Fizz", 4]));
// // function calculateAge(birthday) {
// //   let year = "";
// //   for (let char of birthday) {
// //     if (char == "-") {
// //       break;
// //     }
// //     year += char;
// //   }

// //   return year;
// // }
// // console.log(calculateAge("2000-11-20"));
// // function factorial(n) {
// //   let result = 1;
// //   while (n >= 1) {
// //     result = result * n;
// //     n--;
// //   }
// //   console.log(result);
// // }
// // factorial(5);

// // async function getdata() {
// //   return "Ajay";
// // }
// // const data = getdata();
// // data.then((es) => console.log(es));
// // function fetchData() {
// //   return new Promise((resolve) =>
// //     setTimeout(() => resolve("Data fetched"), 1000)
// //   );
// // }

// // fetchData()
// //   .then((data) => {
// //     console.log(data);
// //     return "Processing data";
// //   })
// //   .then((result) => console.log(result))
// //   .catch((err) => console.log(err));
// // async function getData() {
// //   try {
// //     const data = await fetchData();
// //     console.log(data);
// //   } catch {}
// // }

// //2️⃣ Sequential API Calls (Order Matters)
// // function task1() {
// //   return new Promise((res) => setTimeout(() => res("Task 1"), 1000));
// // }
// // function task2() {
// //   return new Promise((res) => setTimeout(() => res("Task 2"), 1000));
// // }
// // function task3() {
// //   return new Promise((res) => setTimeout(() => res("Task 3"), 1000));
// // }
// // async function seqenceaAPI() {
// //   try {
// //     const data1 = await task1();
// //     console.log(data1);

// //     const data2 = await task2();
// //     console.log(data2);

// //     const data3 = await task2();
// //     console.log(data3);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }
// // seqenceaAPI();
// // //3️⃣ Parallel Execution using Promise.all
// // async function parallelExecution() {
// //   try {
// //     const data = await Promise.all([task1(), task2(), task3()]);
// //     console.log(data);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }
// // parallelExecution();

// // //4️⃣ Retry Promise on Failure
// // function unstableAPI() {
// //   return new Promise((resolve, reject) => {
// //     Math.random() > 0.7 ? resolve("Success") : reject("Failed");
// //   });
// // }
// // async function retryPromise(retries) {
// //   for (let i = 1; i <= retries; i++) {
// //     try {
// //       const data = await unstableAPI();
// //       console.log(data);
// //       return;
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   }
// // }
// // retryPromise(4);

// // //5️⃣ Async Delay Function
// // function delay(ms) {
// //   return new Promise((resolve, reject) => setTimeout(() => resolve("End"), ms));
// // }
// // async function delayfn(ms) {
// //   try {
// //     console.log("Start");
// //     const data = await delay(ms);
// //     console.log(data);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }
// // delayfn(2000);
// //Q1️⃣ Remove Duplicates but Keep LAST Occurrence
// //Q2️⃣ Find First Non-Repeating Character
// // function nonrepeatchar(str) {
// //   let count = new Map();
// //   for (let char of str) {
// //     count.set(char, count.has(char) ? count.get(char) + 1 : 1);
// //   }
// //   for (const [key, value] of count) {
// //     if (value === 1) return key;
// //   }
// // }
// // console.log(nonrepeatchar("javascript"));
// // //Q3️⃣ Two Sum (Indexes)
// // function twosum(arr, target) {
// //   let num = {};
// //   for (let i = 0; i < arr.length; i++) {
// //     let diff = target - arr[i];
// //     if (diff in num) {
// //       return [i, num[diff]];
// //     }
// //     num[arr[i]] = i;
// //   }
// // }
// // console.log(twosum([2, 7, 11, 15], 9));
// // //Q4️⃣ Flatten Nested Array (No flat())
// // function FlattenArray(arr) {
// //   let result = [];
// //   for (let num of arr) {
// //     if (Array.isArray(num)) {
// //       result.push(...FlattenArray(num));
// //     } else {
// //       result.push(num);
// //     }
// //   }
// //   return result;
// // }
// // console.log(FlattenArray([1, [2, [3, 4], 5], 6]));
// // //Q5️⃣ Longest Word in Sentence
// // function longest(str) {
// //   return str.split(" ").reduce((acc, curr) => {
// //     if (acc.length < curr.length) acc = curr;
// //     return acc;
// //   }, "");
// // }
// // console.log(longest("I am learning JavaScript"));
// // //Q6️⃣ Count Frequency of Elements
// // function countFrequency(arr) {
// //   let count = {};
// //   for (let num of arr) {
// //     count[num] = (count[num] || 0) + 1;
// //   }
// //   return count;
// // }
// // console.log(countFrequency([1, 2, 2, 3, 3, 3]));
// // //Q7️⃣ Check Anagram
// // function isAnagram(str1, str2) {
// //   let count = {};
// //   for (let char of str1) {
// //     count[char] = (count[char] || 0) + 1;
// //   }
// //   for (let char of str2) {
// //     if (!count[char]) return false;
// //     count[char] = count[char] - 1;
// //     if (count[char] === 0) delete count[char];
// //   }
// //   return Object.keys(count).length === 0 ? true : false;
// // }
// // console.log(isAnagram("listen", "silent"));
// // //Q8️⃣ Move All Zeros to End (In-place)
// // function movezeros(arr) {
// //   let left = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] !== 0) {
// //       [arr[i], arr[left]] = [arr[left], arr[i]];
// //       left++;
// //     }
// //   }

// //   return arr;
// // }
// // console.log(movezeros([0, 1, 0, 3, 12]));
// // //Q9️⃣ Find Missing Number (0 to N)
// // function findmissing(arr) {
// //   let sum = 0;
// //   let totalsum = (arr.length * (arr.length + 1)) / 2;
// //   for (let num of arr) {
// //     sum += num;
// //   }
// //   return totalsum - sum;
// // }
// // console.log(findmissing([3, 0, 1]));
// //Q🔟 Reverse Each Word (Order Same)
// // function reversestr(str) {
// //   return str
// //     .split(" ")
// //     .map((word) => {
// //       return word.split("").reverse().join("");
// //     })
// //     .join(" ");
// // }
// // console.log(reversestr("I love JavaScript"));

// // //Q3️⃣ Merge Two Sorted Arrays (Without sort())
// // function merge() {}
// // let ar = [1, 2, 3];
// // console.log(ar.toString());
// // const originalObj = {
// //   name: "Alice",
// //   details: { age: 30, hobbies: ["coding", "hiking"] },
// // };
// // function deepclone(value) {
// //   // 1️⃣ Base condition (primitive values)
// //   if (value === null || typeof value !== "object") {
// //     return value;
// //   }

// //   // 2️⃣ Handle Date
// //   if (value instanceof Date) {
// //     return new Date(value);
// //   }

// //   // 3️⃣ Handle Array
// //   if (Array.isArray(value)) {
// //     return value.map((item) => deepclone(item));
// //   }

// //   // 4️⃣ Handle Object
// //   const clonedObj = {};
// //   for (let key in value) {
// //     clonedObj[key] = deepclone(value[key]);
// //   }

// //   return clonedObj;
// // }

// // console.log(deepclone(originalObj));
// function task() {
//   return new Promise((resolve, reject) =>
//     Math.random() > 1.5 ? resolve("Success 1") : reject("Fail")
//   );
// }
// function task1() {
//   return new Promise((resolve, reject) =>
//     Math.random() > 1.5 ? resolve("Success 2") : reject("Fail 2")
//   );
// }

// function task2() {
//   return new Promise((resolve, reject) =>
//     Math.random() > 1.5 ? resolve("Success 3") : reject("Fail 3")
//   );
// }

// async function task4() {
//   try {
//     let data = await Promise.allSettled([task6(), task1(), task2()]);
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.log("Promise.all is executed");
//   }
// }
// task4();
//🟢 Question 1: Sequential API Calls
// function task1() {
//   return new Promise((resolve, reject) =>
//     Math.random() > 0.5 ? resolve(true) : reject(false)
//   );
// }
// function task2(result) {
//   return new Promise((resolve, reject) =>
//     result ? resolve("true") : reject("false")
//   );
// }
// async function call() {
//   try {
//     const task1res = await task1();
//     const task2res = await task2(task1res);
//     console.log(task2res);
//     return task2res;
//   } catch (err) {
//     console.error(err);
//   }
// }
// call();
// //✅ Q1. Convert Promise chain to async/await
// function fetchUser() {
//   return new Promise((resolve) => setTimeout(() => resolve("User data"), 1000));
// }

// async function getData() {
//   try {
//     const data = await fetchUser();
//     console.log(data);
//     console.log("Processed");
//   } catch (err) {
//     console.error(err);
//   }
// }
// getData();
// //✅ Q2. Sequential async execution
// async function sequence() {
//   try {
//     const task1 = await new Promise((resolve) =>
//       setTimeout(() => resolve("Task 1 done"), 1000)
//     );
//     console.log(task1);
//     const task2 = await new Promise((resolve) =>
//       setTimeout(() => resolve("Task 2 done"), 1000)
//     );
//     console.log(task2);
//     const task3 = await new Promise((resolve) =>
//       setTimeout(() => resolve("Task 3 done"), 1000)
//     );
//     console.log(task3);
//   } catch (err) {
//     console.error(err);
//   }
// }
// sequence();
// //✅ Q3. Parallel execution using Promise.all
// function api1() {
//   return new Promise((res) => setTimeout(() => res("API 1"), 1000));
// }
// function api2() {
//   return new Promise((res) => setTimeout(() => res("API 2"), 2000));
// }
// async function parallel() {
//   try {
//     const data = await Promise.all([api1(), api2()]);
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }
// parallel();
// //✅ Q4. Retry API on failure (interview favorite)
// function unstableAPI() {
//   return new Promise((resolve, reject) => {
//     Math.random() > 0.7 ? resolve("Success") : reject("Fail");
//   });
// }
// async function retry(num) {
//   for (let i = 1; i <= num; i++) {
//     try {
//       const data = await unstableAPI();
//       console.log(data);
//       return;
//     } catch (err) {
//       console.error(err);
//     }
//   }
// }
// retry(7);
// //✅ Q5. Delay function using async/await
// function delay(ms) {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve(`Hello after ${ms / 1000} seconds`), ms)
//   );
// }
// async function asyncdelay(ms) {
//   try {
//     const data = await delay(ms);
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }
// asyncdelay(10000);
//🔥 Q1. Async Task Queue (Sequential Execution)
// function task(ms, value) {
//   return new Promise((resolve) => setTimeout(() => resolve(value), ms));
// }
// runSequential([
//   () => task(1000, "A"),
//   () => task(500, "B"),
//   () => task(300, "C"),
// ]);
// async function runSequential(tasks) {
//   for (let i = 0; i < tasks.length; i++) {
//     try {
//       const data = await tasks[i]();
//       console.log(data);
//     } catch (err) {
//       console.error(err);
//     }
//   }
// }
// //🔥 Q2. Concurrency Limit (Very Common in Interviews)
// function task(ms, value) {
//   return new Promise((resolve) => setTimeout(() => resolve(value), ms));
// }
// const tasks = [
//   () => task(1000, "A"),
//   () => task(500, "B"),
//   () => task(300, "C"),
//   () => task(400, "D"),
// ];
// async function runWithLimit(tasks, limit) {
//   for (let i = 0; i < limit; i++) {
//     try {
//       const data = await tasks[i]();
//       console.log(data);
//     } catch (err) {
//       console.error(err);
//     }
//   }
// }
// runWithLimit(tasks, 2);
// function DetectNumbersfromJumbledCharacters(numchars) {
//   let num = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
//   ];
//   let res = [];
//   let arr = numchars.split("");
//   console.log(arr);
//   for (let i = 0; i < 10; i++) {
//     let cont = 0;
//     for (let char of num[i]) {
//       if (arr.indexOf(char)) {
//         let temp = arr.indexOf(char);
//         arr.splice(temp, 1);

//         cont++;
//       }
//     }

//     if (cont === num[i].length) {
//       res.push(i);
//     }
//   }

//   return res;
// }

// console.log(DetectNumbersfromJumbledCharacters("onexotw"));
// function task() {
//   return new Promise((resolve, reject) =>
//     Math.random() > 1.5 ? resolve("Success 1") : reject("Fail")
//   );
// }
// function rotatearray(arr, k) {
//   k = k % arr.length;
//   let part1 = arr.slice(-k);
//   let part2 = arr.slice(0, arr.length - k);
//   return part1.concat(part2);
// }
// console.log(rotatearray([1, 2, 3, 4, 5, 6, 7], 3));
// function revString(str) {
//   let rev = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
//   }
//   return rev;
// }
// console.log(revString("ajay"));

// function isPrime(num) {
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i == 0) return "Not a Prime";
//   }
//   return "Prime";
// }
// console.log(isPrime(531));
// function isPalindrome(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] != str[str.length - 1 - i]) return "Not a Palindrome";
//   }
//   return "Palindrome";
// }
// console.log(isPalindrome("madam"));

// function factorial(num) {
//   let res = 1;

//   for (let i = num; i >= 2; i--) {
//     res *= i;
//   }
//   return res;
// }
// console.log(factorial(5));

// function secondLargest(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
//   }
//   let min;
//   let value;
//   for (let i = 0; i < arr.length; i++) {
//     if (i == 0) {
//       min = max - arr[i];
//       value = arr[i];
//     } else {
//       if (max - arr[i] != 0 && max - arr[i] < min) {
//         min = max - arr[i];
//         value = arr[i];
//       }
//     }
//   }
//   return value;
// }
// console.log(secondLargest([2, 3, 4, 5, 6, 7, 1, 19, 10, 20, 11, 17]));
// let aj = new Map();

// const inventory = new Map();

// // Add items with .set()
// inventory.set("apples", 500);
// inventory.set("bananas", 300);
// inventory.set("oranges", 200);
// console.log(inventory.size);
// let a = {
//   name: "Ajay",
//   age: 24,
//   hobbies: ["coding", "hiking"],
//   Qualification: "M.Tech",
// };
// console.log(a);
// function countchar(str) {
//   let count = {};
//   for (let char of str) {
//     count[char] = (count[char] || 0) + 1;
//   }
//   return count;
// }
// console.log(countchar("ajayreddy"));
// let b = {
//   name: "A",
//   age: 24,
//   hobbies: ["coding", "hiking"],
//   Qualification: "B.Tech",
// };

// const fusedObject = { ...a, ...b };
// console.log(fusedObject);
// let name = "Ajay";
// console.log(name.split("").reverse().join(" ,"));
let arr1 = [6, 7, 8, 9, 10];
let arr2 = [1, 2, 3, 4, 5];
let arr3 = [15, 14, 9965, 76];
console.log([...arr1, ...arr2, ...arr3].sort((a, b) => b - a));
function reverseString(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(reverseString("I love React"));
function NonRepeatingCharacter(str) {
  let obj = new Map();
  for (let char of str) {
    obj.set(char, obj.has(char) ? obj.get(char) + 1 : 1);
  }
  for (const [key, value] of obj) {
    if (value === 1) return key;
  }
}
console.log(NonRepeatingCharacter("aabbcdeff"));

function Anagrams(str1, str2) {
  let obj = new Map();
  for (let char of str1) {
    obj.set(char, obj.has(char) ? obj.get(char) + 1 : 1);
  }

  for (let char of str2) {
    obj.set(char, obj.has(char) ? obj.get(char) - 1 : 1);
  }
  console.log(obj);
  for (const [key, value] of obj) {
    if (value != 0) return "Not Anagrams";
  }
  return "Anagrams";
}
console.log(Anagrams("listen", "silent"));

function removeDuplicatefromArray(arr) {
  let count = {};
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }
  return Object.keys(count);
}
console.log(removeDuplicatefromArray([1, 2, 2, 3, 4, 4, 5]));
function LongestWordinaSentence(str) {
  return str.split(" ").sort((a, b) => b.length - a.length)[0];
}
console.log(LongestWordinaSentence("I am learning JavaScript deeply"));

function GroupAnagrams(arr) {
  let obj = new Map();
  for (let str of arr) {
    let sorted = str.split("").sort().join("");
    if (!obj.has(sorted)) {
      obj.set(sorted, []);
    }
    obj.get(sorted).push(str);
  }
  return Array.from(obj.values());
}
console.log(GroupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let num of arr) {
  sum += num;
}
console.log(sum);

function deleteduplicatesfromSortedArray(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
let k = [1, 2, 3, 4, 5, 6, 7];
console.log(k.map((num) => num * 2));
console.log(k.map((num) => num - 10));
let newarr = k.filter((num) => num / 2 == 0);
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((n) => n % 2 != 0);
console.log(evens);
