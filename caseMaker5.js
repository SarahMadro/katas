    let camelCase = function (input) {
      let camelArr = [];
      const strToArr = input.split(' '); // turns string in to array // gets rid of the spaces in string
      for (let i = 0; i < strToArr.length; i++) {
        if (i === 0) {
          camelArr.push(strToArr[i]);
        } else {
          let firstLetter = strToArr[i][0].toUpperCase(); // first letter of string to uppercase
          let choppedString = strToArr[i].slice(1) //removes first letter of word
          let upperStr = firstLetter.concat(choppedString); // concats words together

          camelArr.push(upperStr); // new capitalized array of words

        }
      }
      return camelArr.join('');
      // console.log('camel', camelArr.join(' '));

    };

    console.log(camelCase("this is annoying"));
    console.log(camelCase("loopy lighthouse"));
    console.log(camelCase("supercalifragalisticexpialidocious"));