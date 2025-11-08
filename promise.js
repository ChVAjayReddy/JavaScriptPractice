async function loadData() {
  try {
    const [users, posts] = await Promise.all([
      fetch("https://dummyjson.com/users").then((res) => res.json()),
      fetch("https://dummyjson.com/posts").then((res) => res.json()),
    ]);
    console.log(users, posts);
  } catch (err) {
    console.log(err);
  }
}
loadData();
