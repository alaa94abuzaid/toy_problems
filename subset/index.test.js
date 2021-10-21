/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.
 * To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * const a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * const b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
 */

/*
 * Extra credit:
Make the method work for arrays that contain objects and/or arrays as elements.
*/

// eslint-disable-next-line no-extend-native
Array.prototype.isSubsetOf = function(arr) {
  let isSubsetOf;
  for (let i = 0; i < this.length; i++) {
    if (arr.indexOf(this[i]) === -1) {
      isSubsetOf = false;
      break;
    } else {
      isSubsetOf = true;
    }
  }
  return isSubsetOf;
};

describe('isSubsetOf', () => {
  it('test isSubsetOf', () => {
    const a = ['commit', 'push'];
    expect(a.isSubsetOf(['commit', 'rebase', 'push', 'blame'])).toBeTruthy();
    const b = ['merge', 'reset', 'reset'];
    expect(b.isSubsetOf(['reset', 'merge', 'add', 'commit'])).toBeTruthy();
    const c = [a, 'add'];
    expect(c.isSubsetOf([a,
      'merge', 'add', 'commit'])).toBeTruthy();
    const object = {alaa: 1, zaid: 2};
    const d = [object, 'commit'];
    expect(d.isSubsetOf([object, 'merge', 'add', 'commit'])).toBeTruthy();
  });
});
