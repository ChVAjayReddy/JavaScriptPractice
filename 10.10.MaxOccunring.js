function maxOccuring(sentence) {
  let freq = {};
  let count = 0;
  let maxchar = [];
  for (let char of sentence) {
    freq[char] = (freq[char] || 0) + 1;
    if (freq[char] >= count) {
      count = freq[char];
    }
  }
  for (let char in freq) {
    if (count === freq[char]) {
      maxchar.push(char);
    }
  }
  return maxchar;
}

console.log(maxOccuring("aaaaabbbbccccc"));
