/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * https://medium.com/@taylorshephard1/instantiation-patterns-in-javascript-7f9463b95839
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// const list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';

// const Node
const LinkedList = function() {
  this.next = null
  this.head = null
  this.tail = null
};

LinkedList.prototype.tail = function() {
  // let lastNode = this.head;
  // while (lastNode.next) {
  //     lastNode = lastNode.next
  // }
return this.tail
};

LinkedList.prototype.addToTail = function (value) {
  const newTail = { value, next: null };

  if (this.tail) {
    this.tail.next = newTail;
  } else {
    this.head = newTail;
  }
  this.tail = newTail;
};

LinkedList.prototype.removeHead = function () {
  const currentHead = this.head;
  const newHead = this.head.next;
  if (newHead === null) {
    this.tail = null;
  }
  this.head = newHead;
  return currentHead ? currentHead.value : null;
};

LinkedList.prototype.contains = function (t) {
  let node = this.head;
  while (node) {
    if (node.value === t) {
      return true;
    }
    node = node.next;
  }
  return false;
};

// LinkedList.prototype.addToTail = function(value) {
//   var newNode = makeNode(value);
//   if (!this.head.value) {
//     this.head = newNode;
//   }
//   this.tail.next = newNode;
//   this.tail = newNode;
// };

// LinkedList.prototype.tail = () => {
//   let lastNode = this.head;
//   while (lastNode.next) {
//       lastNode = lastNode.next
//   }
// return lastNode
// }
//write methods here!

describe("#LinkedList", () => {
  const list = new LinkedList()

  it("test linked list clear", () => {
		expect(list.tail).toBeNull()
	})
})