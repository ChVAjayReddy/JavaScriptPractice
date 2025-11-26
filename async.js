// function waits(ms) {
//   return new Promise((resolve, reject) =>
//     setTimeout(
//       () => resolve(console.log("Printed after " + ms + " millseconds")),
//       ms
//     )
//   );
// }
// waits(10000);
// function getApple() {
//   return new Promise((resolve) => resolve("🍎 Apple"));
// }
// function getBanana() {
//   return new Promise((resolve) => resolve("🍌 Banana"));
// }
// function getMango() {
//   return new Promise((resolve) => resolve("🥭 Mango"));
// }
// getApple()
//   .then((res) => console.log(res))
//   .then(getBanana)
//   .then((res) => console.log(res))
//   .then(getMango)
//   .then((res) => console.log(res));
// let data = { id: 1, name: "Ajay", orders: ["Order1", "Order2"] };
// function getUser() {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve({ id: 1, name: "Ajay" }), 1000)
//   );
// }
// function getOrders(userId) {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve(["Order1", "Order2"]), 1000)
//   );
// }

// const { use } = require("react");

// async function showDetails() {
//   const name = await getUser();
//   console.log(name);
//   const orderdetails = await getOrders();
//   console.log(orderdetails);
// }
// showDetails();
// function task1() {
//   return new Promise((r) => setTimeout(() => r("Task 1"), 10000));
// }
// function task2() {
//   return new Promise((r) => setTimeout(() => r("Task 2"), 1500));
// }
// function task3() {
//   return new Promise((r) => setTimeout(() => r("Task 3"), 500));
// }
// async function tasks() {
//   const res = await Promise.all([task1(), task2(), task3()]);
//   console.log("All tasks completed:" + res);
// }
// tasks();
// function getData() {
//   return new Promise((resolve, reject) => {
//     const ok = Math.random() > 0.5;
//     setTimeout(() => {
//       ok ? resolve("Data Loaded") : reject("Failed to load");
//     }, 1000);
//   });
// }
// async function fetchData() {
//   try {
//     const res = await getData();
//     console.log(res);
//   } catch (error) {
//     console.log(e);
//   }
// }
// fetchData();

// async function getData() {
//   try {
//     const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     let res = await data.json();
//     console.log(res.userId, res.title);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   } finally {
//     console.log("Finished");
//   }
// }
// getData();

// async function getData() {
//   try {
//     const [posts, users, comments] = await Promise.all([
//       fetch("https://jsonplaceholder.typicode.com/posts"),
//       fetch("https://jsonplaceholder.typicode.com/users"),
//       fetch("https://jsonplaceholder.typicode.com/comments"),
//     ]);
//     console.log("Users :" + (await users.json()).length);
//     console.log("Posts :" + (await posts.json()).length);
//     console.log("Comments :" + (await comments.json()).length);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   } finally {
//     console.log("Finished");
//   }
// }
// getData();

// async function getData() {
//   for (let i = 1; i <= 3; i++) {
//     try {
//       const jsondata = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/` + i
//       );
//       const data = await jsondata.json();
//       console.log(`post ${i} ` + data.title);
//     } catch (error) {
//       console.error(`Error in fetching ${i} title`);
//     } finally {
//       console.log("Finished");
//     }
//   }
// }
// getData();
// async function fetchData() {
//   try {
//     const response = await fetch("https://api.example.com/data"); // This might throw an error if the network request fails or the server returns an error.
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json(); // This might throw an error if the response is not valid JSON.
//     console.log("Data received:", data);
//   } catch (error) {
//     console.error("An error occurred:", error);
//     // You can perform other error handling actions here, like displaying a user-friendly message.
//   }
// }

// fetchData();
// async function getData() {
//   try {
//     const data = await fetch(url);
//     const json = await data.json();
//   } catch (err) {
//     console.log("Handled Error:", err);
//   }
// }
// getData()
// async function fetchData(url) {
//   try {
//     const response = await fetch(url); // Attempt to fetch data
//     if (!response.ok) {
//       // Check for HTTP errors (e.g., 404 Not Found, 500 Internal Server Error)
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json(); // Parse the JSON response
//     console.log("Data received:", data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error.message); // Log the error message
//     // You might also want to re-throw the error or return a specific value
//     // throw error;
//     // return null;
//   }
// }

// // Example usage:
// (async () => {
//   // Successful fetch
//   await fetchData("https://jsonplaceholder.typicode.com/todos/1");

//   // Fetch with an invalid URL (will trigger a network error)
//   await fetchData("https://invalid-url-example.com/data");

//   // Fetch with a URL that returns an HTTP error (e.g., 404)
//   await fetchData("https://jsonplaceholder.typicode.com/nonexistent-resource");
// })();
// async function getData() {
//   try {
//     const data = await fetch("https://jsonplaceholder.typicode.com/postsss/1");

//     if (!data.ok) {
//       throw new Error("Invalid URL");
//     }

//     const res = await data.json();
//     console.log(res);
//   } catch (error) {
//     console.error(error.message);
//   } finally {
//     console.log("Finished");
//   }
// }

// getData();
// async function getData() {
//   try {
//     const response = await fetch("https://httpstat.us/200?sleep=1000");

//     // This line will throw a SyntaxError (because response is not JSON)
//     const data = await response.json();

//     console.log(data);
//   } catch (err) {
//     console.log("JSON Parsing Failed");
//   } finally {
//     console.log("Finished");
//   }
// }

// getData();
// function riskyFunction() {
//   return new Promise((resolve, reject) => {
//     reject("Something went wrong");
//   });
// }
// async function test() {
//   try {
//     const data = await riskyFunction();
//   } catch (err) {
//     console.log("Custom Error :" + err);
//   }
// }
// test();
// function countCharacters(sentence) {
//   let count = {};
//   let result = [];
//   let newsen = sentence.toLowerCase().split("").sort().join("");
//   console.log(newsen);
//   for (let char of newsen) {
//     if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
//       count[char.toLowerCase()] = (count[char] || 0) + 1;
//     }
//   }
//   for (let c in count) {
//     let str = "";
//     str += c;
//     str += " ";
//     str += count[c];
//     result.push(str);
//   }
//   return result;
// }
// console.log(countCharacters("I love coding challenges!"));
// let data = [
//   { userId: 1, name: "Ajay", posts: ["post1", "post2"] },
//   { userId: 2, name: "Anu", posts: ["post1", "post2"] },
// ];
// function fetchUser(id) {
//   return new Promise((resolve) =>
//     resolve(
//       setTimeout(() => {
//         let temp = data.filter((data) => data.userId === id);
//         return temp;
//       }, 5000)
//     )
//   );
// }
// async function fetchUserAndPosts(id) {
//   const userdata = await fetchUser(id);
//   console.log(userdata);
// }
// fetchUserAndPosts(2);
//Q4 — Random Success or Failure
// function unstableAPI() {
//   return new Promise((resolve, reject) => {
//     Math.random() > 0.5 ? resolve("Success!") : reject("Failed!");
//   });
// }
// async function getData() {
//   try {
//     const data = await unstableAPI();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Fineshed");
//   }
// }
// getData();
//Q5 — Chained Error (Stop Execution)
// async function fetchWithRetry(url, attempts) {
//   while (attempts >= 0) {
//     try {
//       const response = await fetch(url);
//     } catch (error) {
//       attempts--;
//     }
//   }
// }
// fetchWithRetry("https://jsonplaceholder.typicode.com/posts-invalid", 3);
//Q7 — Timeout Error using Promise.race() (Advanced)
//Q10 — Custom Validation Error
function validateuser(user) {
  return new Promise((resove, reject) => {
    if (user.name == "") {
      reject("Name is requred");
    } else if (user.email == "") {
      reject("Email is requred");
    } else {
      resove("User Registered");
    }
  });
}
async function registerUser(user) {
  try {
    const res = await validateuser(user);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
registerUser({ name: "Ajay", email: "" }); //asynch await
