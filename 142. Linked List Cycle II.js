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
    
    while (pointer != null) {
        //if cache[pointer.val] exists and cache[pointer.val] value includes pointer.next.val
        if (pointer.next) { 
            //store pointer.val in cache as a key with an array value containing pointer.next.val as its value
            if (!cache[pointer.val]) cache[pointer.val] = [].concat(pointer.next.val);
            else if (!cache[pointer.val].includes(pointer.next.val)) cache[pointer.val].push(pointer.next.val);
            else return pointer;
        }
        pointer = pointer.next;
    }
    
    return null;
};