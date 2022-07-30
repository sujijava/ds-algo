import { List } from 'leetcode'

const list = List.create([1,2,3])


/**

 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {

    let curr = head
    let prev = null

    while(curr){
        let next = curr.next //storing original next value
        curr.next = prev //set next value to previous value
        prev = curr //storing previous value for next iteration
        curr = next //traverse linked list
    }
    return prev
};

console.log(reverseList(list))
