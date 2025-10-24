// function moveZeros(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       arr.splice(i, 1);
//       arr[arr.length] = 0;
//     }
//   }
//   return arr;
// }
// console.log(moveZeros([1, 1, 1, 0, 1, 0, 3, 0, 9, 8, 0, 12, 0, 0, 0]));
function moveZeros(arr) {
  let index = 0; // position to place next non-zero element
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[index] = arr[i];
      index++;
    }
    console.log(arr);
  }
  // Fill the rest with zeros
  for (let i = index; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}
console.log(moveZeros([0, 1, 0, 3, 0, 9, 8, 0, 12, 0, 0, 0]));
