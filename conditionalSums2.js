let conditionalSum = function (values, condition) {
  let val = 0;
  for(let i = 0; i < values.length; i++) {
    if(values[i] %2 === 0 && condition === "even") {
      val += values[i];
    }
    if (values[i] %2 != 0 && condition === "odd") {
      val += values[i];
    }
  }
  return val;
};



console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));