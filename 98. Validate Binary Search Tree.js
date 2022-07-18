/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (!root) return true;
    const stack = [];
    let previous = null;
    while (root || stack.length > 0) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        
        root = stack.pop();
        
        if (previous) {
            if (root.val <= previous.val) return false;
        }
        
        previous = root;
        root = root.right;
    }
    return true;
};