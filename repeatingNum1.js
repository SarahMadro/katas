let repeatNumbers = function (data) {
  let str = "";
  for (let i = 0; i < data.length; i++) {
    let valRepeated = data[i][0];
    let timesRepeated = data[i][1];
    for (let i = timesRepeated; i > 0; i--) {
      str += valRepeated;
      if (i == 1 && i < data.length - 1) {
        str += ", ";
      }
    }
  }
      return str;

};

console.log(repeatNumbers([
  [1, 10]
]));
console.log(repeatNumbers([
  [1, 2],
  [2, 3]
]));
console.log(repeatNumbers([
  [10, 4],
  [34, 6],
  [92, 2]
]));