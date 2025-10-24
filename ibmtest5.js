function LongestIncreasingSubarray(arr) {
  let subarrays = [];
  let subarray = [];
  let maxlength = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      subarray.push(arr[i]);
    } else {
      subarray.push(arr[i]);
      subarrays.push(subarray);
      if (maxlength < subarray.length) {
        maxlength = subarray.length;
      }
      subarray = [];
    }
  }
  return maxlength;
}
console.log(LongestIncreasingSubarray([1, 2, 2, 8, 4, 5, 6, 8, 4]));
//
//
//Q2️⃣: String Alternate Merge

function alternatemerge(str1, str2) {
  let mergestring = "";
  let minlen;
  if (str1.length < str2.length) {
    minlen = str1.length;
  } else {
    minlen = str2.length;
  }

  for (let i = 0; i < minlen; i++) {
    mergestring += str1[i];
    mergestring += str2[i];
  }
  if (str1.length < str2.length) {
    for (let i = str1.length; i <= str2.length - 1; i++) {
      mergestring += str2[i];
    }
  } else {
    for (let i = str2.length; i <= str1.length - 1; i++) {
      mergestring += str1[i];
    }
  }

  return mergestring;
}
console.log(alternatemerge("aj", "ajay"));
