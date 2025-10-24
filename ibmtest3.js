//Remove all spaces from a string
function removeSpaces(str) {
  let newstr = "";
  for (let char of str) {
    if (char !== " ") {
      newstr += char;
    }
  }
  return newstr;
}
console.log(removeSpaces("React JS Developer"));

//2️⃣ Count digits, alphabets, and special characters
function count(str) {
  let Alphabets = 0;
  let Digits = 0;
  let Specials = 0;
  for (let char of str) {
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z"))
      Alphabets++;
    else if (char >= 0 && char <= 9) Digits++;
    else Specials++;
  }
  return `Alphabets = ${Alphabets} ,Digits = ${Digits},Specials = ${Specials}`;
}
console.log(count("React2025!"));

//3️⃣ Find factorial of a number (without recursion)
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(5));
//4️⃣ Check if two strings are rotations of each other

function areRotations(str1, str2) {
  for (let i = 1; i <= str1.length; i++) {
    let newstr = "";
    for (let j = 0; j < str1.length; j++) {
      if (j + i >= str1.length) {
        newstr += str1[j + i - str1.length];
      } else {
        newstr += str1[j + i];
      }
    }
    if (newstr === str2) return true;
  }
  return false;
}
console.log(areRotations("abcd", "dabc"));
//5️⃣ Find the sum of all elements except the highest and lowest
function sum(arr) {
  let max = -Infinity;
  let min = +Infinity;
  let sum = 0;
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  for (let num of arr) {
    if (num < min) {
      min = num;
    }
  }
  for (let num of arr) {
    if (num != min && num != max) sum += num;
  }
  return sum;
}
console.log(sum([10, 2, 5, 8, 1]));

//6️⃣ Replace every vowel in a string with ‘*’
function replace(str) {
  let newstr = "";
  for (let i = 0; i < str.length; i++) {
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
      newstr += "*";
    } else {
      newstr += str[i];
    }
  }
  return newstr;
}

console.log(replace("Frontend"));

//7️⃣ Count pairs with a given sum
function paris(arr, num) {
  let pair = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === num && i < j) {
        pair.push([arr[i], arr[j]]);
      }
    }
  }
  return pair.length;
}
console.log(paris([1, 5, 7, -1, 5], 6));
//8️⃣ Print Fibonacci series up to N terms
function Fibonacci(n) {
  let res = [];
  if (n === 0) return "Invalid";
  else if (n === 1) return 1;
  else {
    for (let i = 1; i <= n; i++) {
      if (i === 1) res.push(0);
      else if (i === 2) res.push(1);
      else {
        res.push(res[i - 2] + res[i - 3]);
      }
    }
  }
  return res;
}
console.log(Fibonacci(9));
