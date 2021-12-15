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

/*

Task 2

Given a linked list of integers, return length of the list--i,e, the number of nodes in the list.

*/

function task_2(head) {
  let length = 0
  let cur_node = head

  while (cur_node) {
    length++
    cur_node = cur_node.next
  }

  return length
}
