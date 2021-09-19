/*
The following iterative sequence is defined for the set of positive integers:
n → n/2 (n is even)
n → 3n + 1 (n is odd)
Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
Which starting number, under one million, produces the longest chain?
NOTE: Once the chain starts the terms are allowed to go above one million.
*/

/**
 * Wiki link
 * https://en.wikipedia.org/wiki/Collatz_conjecture
 */

/**
 * What is the time complexity for your solution ?
 */

/**
 * Write the unit tests that cover your solution
 */

function collatzSeq(number = 1000000) {
  // TO DO
  let x = 1;
  let y = [x];
  let lengths = [];
  let nextItem = 0;
  while (x <= number) {
    x % 2 ? (nextItem = 3 * x + 1) : (nextItem = x / 2);
    y.push(nextItem);
    while (nextItem > 1) {
      nextItem % 2 ? (nextItem = 3 * x + 1) : (nextItem = x / 2);
      y.push(nextItem);
    }
    lengths.push(y.length);
    x = +x;
  }
  return lengths.indexOf(Math.max(...lengths));
}

// describe("Tests", () => {
//   it("test", () => {
//     expect(collatzSeq(1)).toEqual(1);
//   });
// });
