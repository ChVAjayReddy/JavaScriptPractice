function createCounter() {
  let count = 0;
  function incrementcount() {
    count++;
    console.log(count);
  }
  return incrementcount;
}

const counter = createCounter();
counter();
counter();
counter();
