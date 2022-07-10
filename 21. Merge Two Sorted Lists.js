/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    //return edge cases
    if (!list1 && !list2) return null;
    if (!list1) return list2;
    if (!list2) return list1;
    //get heads
    const head1 = list1;
    const head2 = list2;
    
    //set head and next variables
    let head;
    let next;
    //compare heads,
    //to find where one head should fit
    //// if heads are equal, pop both off and attach one to the other, recur with both nexts
    if (head1.val === head2.val) {
        //save nexts
        const next1 = list1.next;
        const next2 = list2.next;
        //detach heads
        head1.next = null;
        head2.next = null;
        head = head1;
        next = head2;
        head.next = next;
        next.next = mergeTwoLists(next1, next2);
    } else {
    //// if one is greater than the other,
        if (head1.val > head2.val) {
            head = head2;
            next = head1;
        } else {
            head = head1;
            next = head2;
        }
        //pop lesser head off, set its next to the result of recursion of greater head and next of lesser head
        const savedNext = head.next;
        head.next = null;
        head.next = mergeTwoLists(next, savedNext);
    }
    return head;
};

// const a = {"val":1,"next":{"val":2,"next":{"val":4,"next":null}}};
// const b = {"val":1,"next":{"val":3,"next":{"val":4,"next":null}}};
// const c = null;
// const d = null;
// const e = null;
// const f = {"val":0,"next":null};
// const g = {"val":5,"next":null};
// const h = {"val":1,"next":{"val":2,"next":{"val":4,"next":null}}};

// console.log(mergeTwoLists(a, b)); //[1,1,2,3,4,4]

// console.log(mergeTwoLists(c, d)); //[]

// console.log(mergeTwoLists(e, f)); //[0]

// console.log(mergeTwoLists(g, h)); //[1,2,4,5]