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
var middleNode = function(head) {
    let nodeLength = 0;
    let pointer = head;
    while (pointer != null) {
        nodeLength++;
        pointer = pointer.next;
    }
    let count = 0;
    pointer = head;
    while (count < Math.floor(nodeLength / 2)) {
        count++;
        pointer = pointer.next;
    }
    return pointer;
};