/**
 * adding custom functions into native array
 * 1- sort function
 * 2- get first element
 * 3- get last element
 * 4- search for value
 */

//  TODO

// eslint-disable-next-line no-extend-native
Array.prototype.sortArray = function() {
  return this.sort();
};

// eslint-disable-next-line no-extend-native
Array.prototype.getFirstElement = function() {
  return this[0];
};

// eslint-disable-next-line no-extend-native
Array.prototype.getLastElement = function() {
  return this[this.length - 1];
};


// eslint-disable-next-line no-extend-native
Array.prototype.findElenment = function(element) {
  return this.indexOf(element);
};

describe('Test Custom functions', () => {
  it('Test getFirstElement', () => {
    expect([1, 2, 3].getFirstElement()).toEqual(1);
  });

  it('Test getLastElement', () => {
    expect([1, 2, 3].getLastElement()).toEqual(3);
    expect([5, 2, 3].sortArray()).toEqual([2, 3, 5]);
    expect([5, 2, 3].findElenment(2)).toEqual(1);
  });

  it('Test sortArray', () => {
    expect([5, 2, 3].sortArray()).toEqual([2, 3, 5]);
    expect([5, 2, 3].findElenment(2)).toEqual(1);
  });

  it('Test findElenment', () => {
    expect([5, 2, 3].findElenment(2)).toEqual(1);
  });
});
