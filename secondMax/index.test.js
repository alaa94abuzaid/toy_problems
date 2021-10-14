/*
You have to create a function
that takes an array of integer number and returns the
second max in the array:

Note : using sort native is not allowed

Exanmples:
secondMax([1,5, 2])== 2
secondMax([-1, -5, 2])== -1
*/

/**
 * find second maximum number in an array of integer numbers
 * @param {Array} array array of integer numbers
 * @return {Number} second maximum number in the array
 */
const secondMax = function(array) {
  array.splice(array.indexOf(Math.max(...array)), 1);
  return Math.max(...array);
};


describe('secondMax', () => {
  it('test secondMax', () => {
    expect(secondMax([1, 5, 2])).toEqual(2);
    expect(secondMax([-1, -5, 2])).toEqual(-1);
  });
});
