/**
 * A prime number is an integer number that cannot be divided by any number
 * except itself and 1.
 * Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

/**
 * Determine if numeber is prime or not
 * @param {Number} n interger number
 * @return {boolean} true if number is prime false otherwise
 */
const primeTester = function(n) {
  let isPrimeNumer;
  if (n === 1) {
    isPrimeNumer = true;
  }
  for (i = 2; i < n; i++) {
    if (n % i) {
      isPrimeNumer = true;
      continue;
    } else {
      isPrimeNumer = false;
      break;
    }
  }
  return isPrimeNumer;
};

describe('primeTester', () => {
  it('primeTester', () => {
    expect(primeTester(3)).toBeTruthy();
    expect(primeTester(7)).toBeTruthy();
    expect(primeTester(11)).toBeTruthy();
    expect(primeTester(9)).toBeFalsy();
  });
});

/* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive).
 If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
*/

/**
 * Generates a list of all prime numbers in a user-specified range (inclusive)
 * @param {Number} a interger number
 * @param {Number} b interger number larger than a
 * @return {Array} list of all prime numbers in range a & b
 */
const getPrimeNumbers = (a, b) => {
  const primeNumbers = [];
  const length = b - a + 1;
  for (let i = 0; i < length; i++) {
    if (primeTester(a + i)) {
      primeNumbers.push(a + i);
    }
  }
  return primeNumbers;
};

describe('getPrimeNumbers', () => {
  it('getPrimeNumbers', () => {
    expect(getPrimeNumbers(1, 9)).toEqual([1, 3, 5, 7]);
    expect(getPrimeNumbers(3, 15)).toEqual([3, 5, 7, 11, 13]);
  });
});
