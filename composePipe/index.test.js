/*
 * Write Compose and Pipe functions.
 *
 * Step 1: Implement the function Compose:
 *
 * Compose should return a function that is the composition of a list of
 * functions.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view Compose as moving RIGHT to LEFT through its arguments.
 *
 * Compose Example:
   var greet = function(name){ return 'hello ' + name;}
   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
   var welcome = compose(exclaim, greet);
   welcome('phillip'); // 'hello PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 *
 * Each function is called on the return value of the preceding function.
 *
 * You can view Pipe as moving LEFT to RIGHT through its arguments.
 *
 * Pipe Example:
  var add2 = function(number){ return number + 2; }
  var multiplyBy3 = function(number){ return number * 3; }
  var addAndMultiply = pipe(add2, multiplyBy3);
  addAndMultiply(5);//should be 21
  var addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3);
  addAndMultiplyTwice(5); //should be 63
 */

/**
 * add 'hello' to provided name
 * @param {string} name name to greet
 * @return {string} greet statment 'hello ' + name
 */
const greet = function(name) {
  return 'hello ' + name;
};

/**
 * convert to uppercase and add exclaimtion mark
 * @param {string} statement to convert
 * @return {string} uppercase from provided statment plus exclaimtion
 * mark at the end
 */
const exclaim = function(statement) {
  return statement.toUpperCase() + '!';
};

/**
 * add 2 to provided number
 * @param {number} number nuumber to add
 * @return {number} provided number + 2
 */
const add2 = function(number) {
  return number + 2;
};

/**
 * multiply by 3
 * @param {number} number nuumber to multiply
 * @return {number} provided number multiplied by 3
 */
const multiplyBy3 = function(number) {
  return number * 3;
};

/**
 * Compose functions from right to left
 * @param {func} functions functions to compose
 * @return {number | string} result from functions execution
 */
const compose = (...functions) => (x) =>
  functions.reduceRight((acc, fn) => fn(acc), x);

/**
 * pipe functions from left to right
 * @param {func} functions functions to pipe
 * @return {number | string} result from functions execution
 */
const pipe = (...functions) => (x) => functions.reduce((acc, fn) => fn(acc), x);


describe('Tests', () => {
  it('test compose function', () => {
    const welcome = compose(exclaim, greet);

    expect(welcome('phillip')).toEqual('HELLO PHILLIP!');
  });

  it('test pipe function', () => {
    const addAndMultiply = pipe(add2, multiplyBy3);
    const addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3);

    expect(addAndMultiply(5)).toEqual(21);
    expect(addAndMultiplyTwice(5)).toEqual(63);
  });
});
