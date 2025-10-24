function firstNonRepeatingCharacter(str) {
  for (let a of str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (a === str[i]) {
        count++;
      }
    }
    if (count === 1) return a;
  }
}
console.log(firstNonRepeatingCharacter("swiss"));
