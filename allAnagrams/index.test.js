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

 const allAnagrams =  (string) => {
  const splitStr = string.split('');
  const strLength = splitStr.length;
  const results = {};
  const perm = (roundCount, anagrams) => {
    if(roundCount === 0){
      return results[anagrams] = anagrams
    }
    for(let i = 0; i < strLength; i++){
      perm(roundCount - 1, anagrams + splitStr[i])
    }
  }
  perm(strLength, '')
  return Object.keys(results)
}

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
