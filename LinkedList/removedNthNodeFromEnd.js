/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {

    let dummyNode = new ListNode(0, head)
    let left = dummyNode
    let right = head


    while(n > 0){
        right = right.next
        n = n -1
    }

    while(right){
        left = left.next
        right = right.next
    }

    left.next = left.next.next

    return dummyNode.next
};
