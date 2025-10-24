// let salary = employees
//   .filter((employee) => employee.dept === "React")
//   .reduce((acc, employee) => acc + (employee.salary * 110) / 100, 0);
// console.log(salary);
// const sentence = "React is fun and JavaScript is powerful and fun";
// let res = sentence
//   .toLowerCase()
//   .split(" ")
//   .reduce(function (acc, word) {
//     if (acc[word] === undefined) {
//       acc[word] = 1;
//     } else {
//       acc[word] = acc[word] + 1;
//     }
//     return acc;
//   }, {});
// console.log(res);
// const employees = [
//   { name: "Ajay", dept: "React", salary: 45000 },
//   { name: "Ravi", dept: "Java", salary: 55000 },
//   { name: "Anusha", dept: "React", salary: 47000 },
//   { name: "Suma", dept: "Python", salary: 40000 },
//   { name: "Rohan", dept: "Java", salary: 60000 },
// ];
// let res = employees
//   .filter((employee) => employee.salary > 45000)
//   .reduce((acc, employee) => {
//     acc[employee.dept] =
//       acc[employee.dept] === undefined
//         ? employee.salary
//         : acc[employee.dept] + employee.salary;
//     return acc;
//   }, {});
// console.log(res);
const sentences = [
  "React makes UI building easy!",
  "JavaScript makes development powerful.",
  "UI design is fun and easy!",
];
const N = 3;
let result = sentences
  .reduce((acc, sentence) => {
    acc.push(
      sentence
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .toLowerCase()
        .split(" ")
    );
    return acc;
  }, [])
  .flat()
  .reduce((acc, word) => {
    acc[word] = (acc[word] ?? 0) + 1;
    return acc;
  }, {});

console.log(
  Object.entries(result)
    .sort((a, b) => b[1] - a[1])
    .slice(0, N)
);
