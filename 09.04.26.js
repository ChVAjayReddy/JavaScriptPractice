function reverse(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(reverse("I love React"));
function PalindromeCheck(str) {
  console.log(str.length);
  for (i = 0; i < str.length / 2; i++) {
    if (str[i] != str[length - i - 1]) {
      return "Not Palindrome";
    }
  }
  return "Palindrome";
}
console.log(PalindromeCheck("madam"));
function largest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
console.log(largest([1, 2, 3, 4, 5]));
function factorial(num) {
  let res = 1;
  for (let i = num; i >= 2; i--) {
    res *= i;
  }
  return res;
}
console.log(factorial(5));
function removeDuplicate(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }

  return Object.values(obj);
}
console.log(removeDuplicate([1, 1, 3, 4, 5, 6, 6, 3, 4]));
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Hello, my dog is cute"));
function findmissing(arr) {
  let n = arr.length + 1;
  let sum = (n * (n + 1)) / 2;
  let arrsum = 0;
  for (let i = 0; i < arr.length; i++) {
    arrsum += arr[i];
  }
  return sum - arrsum;
}
console.log(findmissing([1, 2, 3, 5]));
function flatarr(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatarr(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(flatarr([1, 2, [3, 4], 5, [6, 7]]));
