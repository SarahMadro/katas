function calculateChange(total, given) {
    let change = given - total;
    let changeObject = {};
    let changeArray = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
    let changeText = ["twenty: ", "ten: ", "five: ", "two: ", "one: ", "quarter: ", "dime: ", "nickel: ", "penny: "];
  for (let i = 0; i < changeArray.length; i++) {
    if(change - changeArray[i] > 0) {
      changeObject[changeText[i]] = Math.floor(change / changeArray[i]);
    }
    change = change - (Math.floor(change / changeArray[i]) * changeArray[i]);
  }
  return changeObject;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// { twoDollar: 1, dime: 1, penny: 3 }
// { ten: 1, twoDollar: 1, dollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
