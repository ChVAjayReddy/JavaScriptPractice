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

async function getData() {
  try {
    const [posts, users, comments] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/comments"),
    ]);
    console.log("Users :" + (await users.json()).length);
    console.log("Posts :" + (await posts.json()).length);
    console.log("Comments :" + (await comments.json()).length);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    console.log("Finished");
  }
}
getData();
