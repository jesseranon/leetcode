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
    if (!head || !head.next) return head;
    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead; 
};

// const a = {"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}}};
// const b = {"val":1,"next":{"val":2,"next":null}};
// const c = null;

// console.log(reverseList(a)); //[5,4,3,2,1]

// console.log(reverseList(b));//[2,1]

// console.log(reverseList(c));//[]