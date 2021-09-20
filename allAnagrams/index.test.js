/**
 * Given a single input string, write a function that outputs an array of strings with every possible
 * combination of letters.
 *
 * At first, don't worry about repeated (duplicate) strings.
 *
 * What time complexity is your solution?
 *
 * Extra credit: De-duplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

const allAnagrams = (string) => {
  if (string.length < 2) {
    return [string];
  } else {
    let all = [];
    for (let i = 0; i < string.length; i++) {
      let chars = string.split("");
      let letter = chars[i];
      delete chars[i];
      let arr = allAnagrams(chars.join(""));
      for (let j = 0; j < arr.length; j++) {
        all.push(letter + arr[j]);
      }
    }
    return all;
  }
};

describe("Tests", () => {
  it("test", () => {
    expect(allAnagrams("abc")).toEqual([
      "abc",
      "acb",
      "bac",
      "bca",
      "cab",
      "cba",
    ]);
  });
});
