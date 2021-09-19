/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *	"())"
 */

function balancedParens(input) {
  //  TO DO
    let brackets = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i] === "(") {
        brackets.push(input[i]);
      } else if (input[i] === ")") {
        if (brackets[brackets.length - 1] === "(") brackets.pop();
        else brackets.push("#");
      }
    }
    return !brackets.length;
}

describe("Tests", () => {
	it("test pingPongTracker", () => {
    expect(balancedParens('(')).toEqual(false)
    expect(balancedParens('()')).toEqual(true)
    expect(balancedParens(')(')).toEqual(false)
    expect(balancedParens('(())')).toEqual(true)

    expect(balancedParens('[](){}')).toEqual(true)
    expect(balancedParens('[({})]')).toEqual(true)
    expect(balancedParens('[(]{)}')).toEqual(false)

	})
})