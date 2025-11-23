// function waits(ms) {
//   return new Promise((resolve, reject) =>
//     setTimeout(
//       () => resolve(console.log("Printed after " + ms + " millseconds")),
//       ms
//     )
//   );
// }
// waits(10000);
function getApple() {
  return new Promise((resolve) => resolve("🍎 Apple"));
}
function getBanana() {
  return new Promise((resolve) => resolve("🍌 Banana"));
}
function getMango() {
  return new Promise((resolve) => resolve("🥭 Mango"));
}
getApple()
  .then((res) => console.log(res))
  .then(getBanana)
  .then((res) => console.log(res))
  .then(getMango)
  .then((res) => console.log(res));
