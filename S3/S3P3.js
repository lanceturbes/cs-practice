/*

Task 1

Given three values, return a new linked list containing those values.

You have to wrap the values into ListNode() objects.

*/

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function task_1(a, b, c) {
  const a_node = new ListNode(a)
  const b_node = new ListNode(b)
  const c_node = new ListNode(c)

  a_node.next = b_node
  b_node.next = c_node

  return a_node
}
