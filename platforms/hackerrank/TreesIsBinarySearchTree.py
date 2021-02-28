
# https://www.hackerrank.com/challenges/ctci-is-binary-search-tree/problem
""" Node is defined as
class node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
"""

def checkBST(root):
    return checkBSTHelper(root, 0, 10**4)
    
def checkBSTHelper(root, min, max):
    if root is None:
        return True
    if root.data < min or root.data > max:
        return False
    return (checkBSTHelper(root.left, min, root.data - 1) and 
            checkBSTHelper(root.right, root.data + 1, max))
