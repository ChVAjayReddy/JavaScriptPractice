// let arr = [];
// function insertatending(arr, n) {
//   arr.push(n);
//   return arr;
// }
// console.log(insertatending(arr, 4));
// function insertatbeginnin(arr, n) {
//   arr.unshift(n);
//   return arr;
// }
// console.log(insertatbeginnin(arr, 8));
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.forEach((element) => {
//   element * 2;
// });
// console.log(arr);
// const fruits = ["apple", "banana", "cherry"];

// fruits.forEach((fruit, index) => {
//   console.log(`Fruit at index ${index}: ${fruit}`);
// });
// const fruits = ["apple", "banana", "cherry"];

// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });

// fruits.forEach((fruit, index) => {
//   console.log(`Fruit at index ${index}: ${fruit}`);
// });
// let arr = [];
// function insertend(arr, n) {
//   arr.push(n);
//   return arr;
// }
// console.log(insertend(arr, 5));
// function insertbegin(arr, n) {
//   for (let i = arr.length; i >= 1; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = n;

//   return arr;
// }
// console.log(insertbegin(arr, 8));
/**
 * @param {number[]} nums
 * @returns {number[]}
 */
// function FrequencySort(nums) {
//   let count = {};
//   for (let i = 0; i < nums.length; i++) {
//     count[nums[i]] = (count[nums[i]] || 0) + 1;
//   } let newar=[];
//   for (let num in count) {

//   }
// }
// console.log(FrequencySort([4, -2, 10, 12, -8, 4]));
// function longestsubstring(s, k) {
//   let countnm = 0;
//   for (let i = 0; i < s.length; i++) {
//     let count = {};
//     let str = "";
//     for (let j = i; j < s.length; i++) {
//       str += s[i];
//       count[s[i]] = (count[s[i]] || 0) + 1;
//       if (Object.keys(count).length >= 3) {
//         break;
//       } else {
//         let temp = 0;
//         for (let c in count) {
//           temp += count[c];
//         }
//         if (countnm < temp) {
//           countnm = temp;
//         }
//       }
//     }
//   }
//   console.log(countnm);
// }
// longestsubstring("eceba", 2);
// let arr = [1, 2, 3, 4, 5, 9, 6, 7, 8];
// console.log(arr.unshift(1, 32, 4));
// console.log(arr);
// function remove(arr) {
//   let newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i == 0) newarr.push(arr[i]);
//     else {
//       if (!newarr.includes(arr[i])) {
//         newarr.push(arr[i]);
//       }
//     }
//   }
//   return newarr;
// }
// console.log(remove([1, 1, 1, 2, 3, 3, 4, 5, 5]));
// function count(str) {
//   let countobj = {};
//   for (let c of str) {
//     countobj[c] = (countobj[c] || 0) + 1;
//   }
//   return countobj;
// }
// console.log(count("ajay"));
// function flatarray(arr, newar = []) {
//   for (let a of arr) {
//     if (Array.isArray(a)) {
//       flatarray(a, newar);
//     } else newar.push(a);
//   }
//   return newar;
// }
// console.log(flatarray([1, 2, 3, [1, 2, 3, [2, 6, [8, 9]]]]));
// function a() {
//   console.log(b);
//   let b = 20;
// }
// a();
function reverse(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}
console.log(reverse("ajay"));
function anagram(str1, str2) {
  let count = {};
  for (let c of str1) {
    count[c] = (count[c] || 0) + 1;
  }
  for (let c of str2) {
    if (count[c]) {
      count[c] = count[c] - 1;
      if (count[c] === 0) {
        delete count[c];
      }
    } else {
      return false;
    }
  }

  if (Object.keys(count) >= 1) return false;
  else return true;
}
console.log(anagram("listen", "silent"));
function countvowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let c of str) {
    if (vowels.includes(c.toLowerCase())) count++;
  }
  return count;
}
console.log(countvowels("JavaScript"));
function secondlargest(arr) {
  let max = Math.max(...arr);
  let diff = 0;
  let secondlargest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) diff = max - arr[i];
    else {
      if (diff < max - arr[i]) {
        secondlargest = arr[i];
        diff = max - arr[i];
      }
    }
  }
  return secondlargest;
}
console.log(secondlargest([10, 5, 6, 20, 7, 8, 9]));
function missingnum(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
}
console.log(missingnum([0, 1, 2, 4]));
function flatarray(arr, res = []) {}
function group(arr) {
  let grp = {};
  for (let i = 0; i < arr.length; i++) {
    grp[arr[i].dept] = grp[arr[i].dept] || [];
    grp[arr[i].dept].push(arr[i].name);
  }
  return grp;
}
console.log(
  group([
    { name: "ajay", dept: "React" },
    { name: "ravi", dept: "React" },
    { name: "anu", dept: "Java" },
  ])
);
