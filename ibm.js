// function charFrequeency(str) {
//   let result = {};
//   for (let i = 0; i < str.length; i++) {
//     if (result[str[i]] === undefined) {
//       result[str[i]] = 1;
//     } else {
//       result[str[i]] = result[str[i]] + 1;
//     }
//   }
//   console.log(result);
// }
// charFrequeency("aabbcccc");

// function removeDuplicates(arr) {
//   let result = [];
//   for (let a of arr) {
//     if (!result.includes(a)) {
//       result.push(a);
//     }
//   }
//   console.log(result);
// }
// removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 5]);
// function reverse(str) {
//   let newstr = "";
//   for (let i = str.length; i >= 0; i--) {
//     newstr += str[i];
//   }
//   console.log(newstr);
// }
// reverse("ReactJS");
// function max(arr) {
//   let max = 0;
//   for (let num of arr) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   console.log(max);
// }
// max([4, 7, 1, 9, 3]);
// function charFrequeency(str) {
//   let result = {};
//   for (let char of str) {
//     result[char] = (result[char] || 0) + 1;
//   }
//   console.log(result);
// }

// charFrequeency("reactjs");
function findDuplicate(arr) {
  let obj = {};
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] = obj[arr[i]] + 1;
    }
  }
  for (let a in obj) {
    if (obj[a] > 1) {
      res.push(a);
    }
  }
  return res;
}
console.log(findDuplicate([1, 2, 3, 2, 4, 3, 5]));
function anagram(str1, str2) {
  let obj = {};
  for (let key of str1) {
    if (obj[key] === undefined) {
      obj[key] = 1;
    } else {
      obj[key] = obj[key] + 1;
    }
  }
  for (let key of str2) {
    if (obj[key]) {
      obj[key]--;
    } else {
      obj[key] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] >= 1) {
      return false;
    }
  }
  return true;
}
console.log(anagram("listen", "silent"));

function rotateArray(arr, n) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i + n >= arr.length) {
      newarr[i + n - arr.length] = arr[i];
    } else {
      newarr[i + n] = arr[i];
    }
  }
  return newarr;
}
console.log(rotateArray([1, 2, 3, 4, 5], 2));
