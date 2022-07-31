/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} a
 * @param {ListNode} b
 * @return {ListNode}
 */
var mergeTwoLists = function (a, b) {
  let dummyHeadOfNewMergedList = new ListNode();
  let currentTailOfNewmergedList = dummyHeadOfNewMergedList;

  while (a && b) {
    if (a.value < b.value) {
      currentTailOfNewmergedList.next = a; //small value will be inserted to new merged list
      a = a.next; //iteration
    } else {
      currentTailOfNewmergedList.next = b;
      b = b.next; //iteration
    }
  }

  // if a or b ran out
  if (a) {
    currentTailOfNewmergedList.next = a;
  }
  if (b) {
    currentTailOfNewmergedList.next = b;
  }

  return currentTailOfNewmergedList.next;
};
