
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

 const translateRomanNumeral = (romanNumeral)=> {
   // TO DO ...
   let number = DIGIT_VALUES[romanNumeral[0]]
   for (i=1; i < romanNumeral.length; i++) {
     currentLetter = romanNumeral[i];
     currentNumber = DIGIT_VALUES[currentLetter]
     previousNumber = DIGIT_VALUES[romanNumeral[i-1]]

     if (previousNumber >= currentNumber) {
       number += DIGIT_VALUES[currentLetter]
    }
    else {
      number = DIGIT_VALUES[currentLetter] - number
    }
   }
    if (number) {
      return number
    } else {
      return null
    }
  }

  describe("translateRomanNumeral", () => {
    it("translateRomanNumeral", () => {
      expect(translateRomanNumeral("XXI")).toEqual(21);
      expect(translateRomanNumeral("IV")).toEqual(4);
      expect(translateRomanNumeral("A")).toBeNull();
    });
  });
