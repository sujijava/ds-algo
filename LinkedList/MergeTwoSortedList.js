/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {

    let dummyHeadOfMergedList = new ListNode()
    let mergedListTail = dummyHeadOfMergedList

    while(list1 && list2){
        if(list1.value < list2.value){
            mergedListTail.next = list1
            list1 = list1.next //list1 initialized?
        }else {
            mergedListTail.next = list2
            list2 = list2.next //list2 initialized?
        }
    }

    if(list1){
        mergedListTail.next = list1
    }
    if(list2){
        mergedListTail.next = list2
    }

     return mergedListTail.next;
};
