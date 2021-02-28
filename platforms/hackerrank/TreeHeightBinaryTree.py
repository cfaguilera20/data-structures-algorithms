/**
 * https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree/problem
 */
def height(root):
    return heightHelper(root, 0)
def heightHelper(tree, depth): 
    if tree is None:
        return depth - 1

    
    leftDepth = heightHelper(tree.left, depth + 1)
    rightDepth = heightHelper(tree.right, depth + 1)
    
    return leftDepth if leftDepth > rightDepth else rightDepth 
