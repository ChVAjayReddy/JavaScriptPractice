//⚡ Q2: Remove Duplicates from Unsorted Array
function removeDuplicates(arr) {
  let count = new Map();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    count.set(arr[i], count.has[arr[i]] ? count.get[arr[i]] + 1 : 1);
  }

  for (const [key, value] of count) {
    result.push(`${key}`);
  }
  return result;
}
console.log(removeDuplicates([4, 2, 5, 2, 3, 4, 1]));
