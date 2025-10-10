function reverseWords(sentence) {
  return sentence.replace(/\s+/g, " ").trim().split(" ").reverse().join(" ");
}

console.log(reverseWords("I Love Javascript    "));
