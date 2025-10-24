function longest(s) {
  let temp = s.split("");
  let n = temp.length;
  let res = [];
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < n; j++) {
      let temp1 = "";
      for (let k = j; k <= i; k++) {
        temp1 += temp[k];
      }
      res.push(temp1);
    }
    n--;
  }
  console.log(res);
}

longest("ajay");
