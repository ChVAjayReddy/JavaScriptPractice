//🧩 Q1: Sum of Digits
function SumofDigits(num) {
  if (num === 0) return 0;
  else return (num % 10) + SumofDigits(Math.floor(num / 10));
}
console.log(SumofDigits(989));
//Q2: Second Largest Element in an Array
function SecondLargest(arr) {
  let SecondLargest;
  let difference = -Infinity;
  let max = Math.max(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (max - arr[i] > difference) SecondLargest = arr[i];
  }
  return SecondLargest;
}
console.log(SecondLargest([10, 5, 20, 8, 12, 19]));
//🧩 Q3: Reverse a String (Without Built-in Reverse)
function Reverse(str) {
  let newstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newstr += str[i];
  }
  console.log("AJAYREDDYCHV");
  return newstr;
}
console.log(Reverse("ajay"));
//⚡ Q4: Count Occurrences of Each Element (Arrays/Objects)
function CountOccurences(arr) {
  let map = new Map();
  for (let num of arr) {
    map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
  }
  console.log(typeof map);
  return map;
}
console.log(CountOccurences([1, 2, 2, 3, 1, 4, 2]));
//🧩 Q1: Move Zeroes to End (In-place)
function moveZeros(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[i] = arr[j];
    } else j++;
  }
  return arr;
}
console.log(moveZeros([0, 1, 0, 3, 12]));
//⚡ Q2: Palindrome Check (String)
function palindrome(str) {
  let newstr = "";
  for (let char of str) {
    if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
      newstr += char.toLowerCase();
    }
  }
  console.log(newstr.length);
  for (let i = 0; i < newstr.length / 2; i++) {
    if (newstr[i] !== newstr[newstr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome("madam"));
