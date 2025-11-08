function compressString(str) {
  //write implementation here
  let count = {};
  let result = "";
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  console.log(count);
  for (let char in count) {
    if (count[char] <= 9) {
      result += char;
      if (count[char] != 1) {
        result += count[char];
      }
    } else {
      do {
        result += char;
        result += 9;
        result += char;
        result += count[char] - 9;
      } while (count[char] > 9);
    }
  }
  return result;
}

console.log(
  compressString(
    "aaaabbbbccccddddddeeefffghhhiiiijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"
  )
);
