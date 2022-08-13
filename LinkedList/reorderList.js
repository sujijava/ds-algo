/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    
    let slow = head
    let fast = head.next //why?
    
    //find mid point
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    //reverse half (mid~end)
    let prev = null; //two make head head 
    let curr = slow;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    //merge two 
    let firstHalf = head;
    let secondHalf = prev;

    while(secondHalf && firstHalf){
        //storing values
        let temp1 = firstHalf.next
        let temp2 = secondHalf.next
        
        //merge
        firstHalf.next = secondHalf
        secondHalf.next = temp1

        //shifting pointer
        firstHalf = temp1
        secondHalf = temp2
    }

};