/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    if (!root) return [];
    const preorder = [];
    const stack = [];
    let current;
    stack.push(root);
    while (stack.length > 0) {
        current = stack.pop();
        preorder.push(current.val);
        const currentChildren = [];
        for (const child of current.children.reverse()) {
            stack.push(child);
        }
    }
    return preorder;
};