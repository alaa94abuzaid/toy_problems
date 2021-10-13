/*
You have to create a function
that takes a positive integer number and returns the
next bigger number formed by the same digits:

Exanmples:
nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071
If no bigger number can be composed using those digits, return -1:
nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1
*/

const nextBigger = function(num) {
  const d = num.toString().split('');

  let p = -1;
  for (i = d.length-1; i > 0; i--) {
    if (d[i] > d[i-1]) {
      p = i-1;
      break;
    }
  }

  if (p == -1) return p;

  let right = d.splice(p);

  const pv = right.splice(0, 1)[0];

  let mm = null; let mmi = null;
  for (i = 0; i < right.length; i++) {
    if (right[i] > pv) {
      if (mm == null || right[i] < mm) {
        mm = right[i];
        mmi = i;
      }
    }
  }

  if (mmi == null) return -1;

  right.splice(mmi, 1);
  right.push(pv);
  right = right.sort();

  const ret = +d.concat([mm]).concat(right).join('');
  if (ret < num) return -1;

  return ret;
};

describe('Tests', () => {
  it('test nextBigger', () => {
    expect(nextBigger(12)).toEqual(21);
    expect(nextBigger(513)).toEqual(531);
    expect(nextBigger(2017)).toEqual(2071);
    expect(nextBigger(9)).toEqual(-1);
    expect(nextBigger(111)).toEqual(-1);
    expect(nextBigger(531)).toEqual(-1);
  });
});
