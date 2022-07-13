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
    let res = [];
    if (!root) return res;
    res.push(root.val);
    if (root.children.length > 0) {
        for (const child of root.children) {
            res = res.concat(preorder(child));
        }
    }
    return res;
};