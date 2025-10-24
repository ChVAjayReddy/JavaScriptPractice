function countVowelsandConsonants(str) {
  let vowels = 0;
  let consonants = 0;
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= "A" && str[i] <= "Z") || (str[i] >= "a" && str[i] <= "z")) {
      {
        if (
          str[i] === "A" ||
          str[i] === "E" ||
          str[i] === "I" ||
          str[i] === "O" ||
          str[i] === "U" ||
          str[i] === "a" ||
          str[i] === "e" ||
          str[i] === "i" ||
          str[i] === "o" ||
          str[i] === "u"
        ) {
          vowels++;
        } else {
          consonants++;
        }
      }
    }
  }
  return `vowels=${vowels} , consonants=${consonants}`;
}
console.log(countVowelsandConsonants("React Developer"));
function palindromeCheck(str) {
  if (str.length % 2) {
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) return false;
    }
  } else {
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) return false;
    }
  }
  return true;
}
console.log(palindromeCheck("hello"));
function secondLargestNumber(arr) {
  let max = -Infinity;
  let secondmax = +Infinity;
  let secondmaxnum;
  for (let num of arr) {
    if (max < num) {
      max = num;
    }
  }
  for (let num of arr) {
    if (num !== max) {
      if (max - num < secondmax) {
        secondmax = max - num;
        secondmaxnum = num;
      }
    }
  }
  return secondmaxnum;
}
console.log(secondLargestNumber([10, 4, 7, 9, 2]));
function IntersectionofTwoArrays(arr1, arr2) {
  let IntersectionArray = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) IntersectionArray.push(arr1[i]);
    }
  }
  return IntersectionArray;
}
console.log(IntersectionofTwoArrays([1, 2, 3, 4], [3, 4, 5, 6]));
function CountOccurrenceofEachWord(str) {
  let res = {};
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " || i === str.length - 1) {
      if (i === str.length - 1) temp += str[i];
      res[temp] = (res[temp] || 0) + 1;
      temp = "";
    } else {
      temp += str[i];
    }
  }
  return res;
}
console.log(CountOccurrenceofEachWord("I LOVE REACT I"));
function RemovDuplicatesfromUnsortedArray(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i === arr[j]]) count++;
    }
    if (count === 1) {
      array.push(arr[i]);
    } else {
      let innercount = 0;
      for (let k = 0; k < arr.length; k++) {
        if (arr[i] === array[k]) innercount++;
      }
      if (innercount === 0) {
        array.push(arr[i]);
      }
    }
  }
  return array;
}
console.log(RemovDuplicatesfromUnsortedArray([2, 3, 2, 4, 5, 3, 5, 6]));

function FindMissingNumberinSequence(arr) {
  for (let i = 1; i < arr.length + 2; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) count++;
    }
    if (count === 0) return i;
  }
}
console.log(FindMissingNumberinSequence([1, 2, 4, 5]));

function FirstNonRepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) count++;
    }
    if (count === 1) return str[i];
  }
}
console.log(FirstNonRepeatingCharacter("aabbccdeff"));
