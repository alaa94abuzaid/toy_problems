/**
 * Write a function `commonCharacters(str1, str2)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `str1`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

const commonCharacters = (str1, str2) => {
  // TODO
  let result = '';
  const length = str1.length;
  for (i = 0; i < length; i++) {
    str2.includes(str1[i]) ? result = result.concat(str1[i]): '';
  }
  return result;
};

describe('Tests', () => {
  it('test', () => {
    expect(commonCharacters('acexivou', 'aegihobu')).toEqual('aeiou');
  });
});
