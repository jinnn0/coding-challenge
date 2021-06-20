/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*
  Merge two sorted linked lists and return it as a sorted list.
  The list should be made by splicing together the nodes of the first two lists.

  Input: l1 = [1,2,4], l2 = [1,3,4]  =>  output: [1,1,2,3,4,4]
  Input: l1 = [],      l2 = []       =>  output: []
  Input: l1 = [],      l2 = [0]      =>  output [0]
 */

// Runtime: 92 ms, faster than 61.36% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 40.5 MB, less than 30.87% of JavaScript online submissions for Merge Two Sorted Lists.

const mergeTwoLists = (l1, l2) => {
  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;

  // create a new listNode for dummyHead
  let dummyHead = new ListNode(-1);
  console.log(JSON.stringify(dummyHead));

  // create a pointer to track dummyHead
  let current = dummyHead;

  // compare two each values
  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = new ListNode(l1.val);
      current = current.next;
      l1 = l1.next;
    } else if (l2.val < l1.val) {
      current.next = new ListNode(l2.val);
      current = current.next;
      l2 = l2.next;
    } else {
      current.next = new ListNode(l1.val);
      current = current.next;
      l1 = l1.next;

      current.next = new ListNode(l2.val);
      current = current.next;
      l2 = l2.next;
    }
  }

  // if either list is longer than the other
  // attach the pointer to the rest of the list that is longer
  if (l1) current.next = l1;
  if (l2) current.next = l2;

  return dummyHead.next;
};
