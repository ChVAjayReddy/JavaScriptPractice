function flattenArray(arr) {
  let newarr = [];
  for (let a of arr) {
    if (a.length > 1) {
      flatarr(a, newarr);
    } else newarr.push(a);
  }
  return newarr;
}
function flatarr(a, newarr) {
  for (let char of a) {
    if (char.length > 1) {
      flatarr(char, newarr);
    } else newarr.push(char);
  }
}

console.log(flattenArray([1, [2, [3, 4, [1, 2, 3]], 5], 6]));
