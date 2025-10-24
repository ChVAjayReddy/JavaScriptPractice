// // // function groupBy(arr, str) {
// // //   let result = {};
// // //   for (let user of arr) {
// // //     for (let key in user) {
// // //       if (key === str) {
// // //         let temp = user[key];
// // //         result[temp] = result[temp] || [];
// // //         result[temp].push(user);
// // //       }
// // //     }
// // //   }
// // //   return result;
// // // }
// // // const users = [
// // //   { name: "Ajay", age: 25 },
// // //   { name: "Ravi", age: 25 },
// // //   { name: "Anusha", age: 24 },
// // // ];

// // // console.log(groupBy(users, "age"));
// // // function chunkArray(arr, size) {
// // //   let result = [];
// // //   let tempres = [];
// // //   for (let i = 0; i < arr.length; i++) {
// // //     tempres.push(arr[i]);
// // //     if (tempres.length === 3) {
// // //       result.push(tempres);
// // //       tempres = [];
// // //     }
// // //   }
// // //   if (tempres.length >= 1) result.push(tempres);
// // //   return result;
// // // }
// // // console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
// // const users = [
// //   { name: "Ajay", age: 25 },
// //   { name: "Ravi", age: 17 },
// //   { name: "Anusha", age: 20 },
// //   { name: "Kiran", age: 16 },
// // ];
// // function transform(arr) {
// //   return arr.filter((a) => a.age > 18).map((a) => a.name.toUpperCase());
// // }
// // console.log(transform(users));
// // const students = [
// //   { name: "Ajay", marks: 85 },
// //   { name: "Ravi", marks: 72 },
// //   { name: "Anusha", marks: 91 },
// //   { name: "Kiran", marks: 68 },
// // ];
// // function total(arr) {
// //   let totalvalue = arr.reduce((sum, student) => sum + student.marks, 0);
// //   return totalvalue;
// // }
// // console.log(total(students));
// function isPalindrome(str) {
//   return str
//     .replace(/[^A-Za-z0-9]/g, "")
//     .toLowerCase()
//     .split("")
//     .join("") ===
//     str
//       .replace(/[^A-Za-z0-9]/g, "")
//       .toLowerCase()
//       .split("")
//       .reverse()
//       .join("") ? true

//     : false;
// }
// console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
// console.log(isPalindrome("race a car")); // false
function mergearray(arr1, arr2) {
  let newarr = arr1;

  for (let obj2 of arr2) {
    let find = true;
    for (let i = 0; i < newarr.length; i++) {
      if (obj2.id === newarr[i].id) {
        find = false;
        let newobj = { ...newarr[i], ...obj2 };
        newarr[i] = newobj;
      }
    }
    if (find) {
      newarr.push(obj2);
    }
  }
  return newarr;
}

//For the purpose of user debugging.
let arr1 = [
  { id: 1, name: "ajay" },
  { id: 2, name: "anusha", age: "30" },
  { id: 3, name: "arha" },
];
let arr2 = [
  { id: 1, age: "28" },
  { id: 2, age: "32" },
  { id: 4, name: "ashok" },
];
mergearray(arr1, arr2);
