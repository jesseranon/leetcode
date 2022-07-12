/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    const cache = {};
    let pointer = head;
    let cycleVal,
        cycleNext;
    
    while (pointer != null) {
        //if cache[pointer.val] exists and cache[pointer.val] value is equal to pointer.next.val
        if (pointer.next) {
           if (cache[pointer.val] && cache[pointer.val].indexOf(pointer.next.val) > -1 && pointer.next) { 
                //set cycleVal and cycleNext, break to find cycle node
                cycleVal = pointer.val;
                cycleNext = pointer.next.val;
                break;
            } else if (cache[pointer.val] && pointer.next) {
                //store pointer.val in cache as a key with pointer.next.val as its value
                cache[pointer.val].push(pointer.next.val); 
            } else if (!cache[pointer.val] && pointer.next) {
                cache[pointer.val] = [];
                cache[pointer.val].push(pointer.next.val);
            }
        }
        pointer = pointer.next;
    }
    
    if (!cycleVal) return null;
    
    pointer = head;
    
    while (pointer.val !== cycleVal || pointer.next.val !== cycleNext) {
        pointer = pointer.next;
    }
    
    return pointer;
};