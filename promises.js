// let Data = {
//   user: "Ajay",
//   posts: ["post 1", "post 2"],
//   comments: ["Good Posts!", "Nice Work!"],
// };
// function getUser() {
//   // Return a promise that resolves after 1 second with "Ajay"
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       let success = true;
//       if (success) {
//         resolve(Data.user);
//       } else {
//         reject(new Error("Failed to get data"));
//       }
//     }, 1000)
//   );
// }

// function getPosts(user) {
//   // Return a promise that resolves after 1 second with an array of 2 posts
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       if (user === "Ajay") {
//         resolve(Data.posts);
//       } else {
//         reject(new Error("Failed to get posts of Ajay"));
//       }
//     }, 1000)
//   );
// }

// function getComments(post) {
//   // Return a promise that resolves after 1 second with 2 comments
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       if (!post) {
//         resolve(Data.comments);
//       } else {
//         reject(new Error("Failed to get commnets of Ajay"));
//       }
//     }, 1000)
//   );
// }

// getUser()
//   .then((user) => {
//     console.log("User fetched:", user);
//     return getPosts(user); // return Promise from getPosts()
//   })
//   .then((posts) => {
//     console.log("Posts fetched:", posts);
//     return getComments(posts[0]); // return Promise from getComments()
//   })
//   .then((comments) => {
//     console.log("Comments fetched:", comments);
//     console.log("✅ All data fetched successfully");
//   })
//   .catch((error) => {
//     console.error("❌ Error:", error.message);
//   })
//   .finally(() => {
//     console.log("🎯 Task completed!");
//   });

// Now chain them together here
// getUser()
//   .then(...)
//   .then(...)
//   .catch(...);
let url = "https://picsum.photos/200";
function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;

    img.onload = () => resolve(`✅ Image loaded successfully: ${url}`);
    img.onerror = () => reject(`❌ Failed to load image: ${url}`);
  });
}

loadImage(url)
  .then(console.log(Promise))
  .catch((error) => console.error(error.message));
