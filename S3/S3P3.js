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
/*

Task 3

Given a linked list, return the sum of all the values in the list.

If the input list is empty, return 0.

*/

function task_3(head) {
  let sum = 0
  let cur_node = head

  while (cur_node) {
    sum += cur_node.value
    cur_node = cur_node.next
  }

  return sum
}

/*

Task 4

Given a linked list, return the value of the tail node in the list.

If the input list is empty, return -9999.

*/

function task_4(a) {
  let tail_node = a

  if (!tail_node) {
    return -9999
  }

  while (tail_node.next !== null) {
    tail_node = tail_node.next
  }

  return tail_node.value
}
