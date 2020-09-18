<?php
// BST
//
// 				 15
//              /  \
// 			  10    18
//           /	\   / \
//          8  12 17  26
//         /\         /\
//        6  9      19  29
//
// Escribe el método para insertar los siguientes valores: 15 10 18 8 12 17 26 6 9 19 29
// Escribe el método para imprimir los valores del arbol en orden: 6 8 9 10 12 15 17 18 19 26 29

class Node
{
    public $value = null;
    public $left = null;
    public $right = null;

    public function __construct($value)
    {
        $this->value = $value;
    }
}


class BST
{
    public $root = null;

    public function insert($value)
    {
        $node = new Node($value);

        if (is_null($this->root)) {
            return $this->root = new Node($value);
        } else {
            $this->insertNode($this->root, $node);
        }
    }

    public function insertNode($node, $newNode)
    {
        if ($newNode->value <= $node->value) {
            if (is_null($node->left)) {
                $node->left = $newNode;
            } else {
                $this->insertNode($node->left, $newNode);
            }
        } else {
            if (is_null($node->right)) {
                $node->right = $newNode;
            } else {
                $this->insertNode($node->right, $newNode);
            }
        }
    }

    // Inorder (Left, Root, Right)
    public function printInorder()
    {
        $this->inorder($this->root);
    }

    public function inorder($node)
    {
        if(is_null($node)) {
            return;
        }

        $this->inorder($node->left);
        echo $node->value . '  ';
        $this->inorder($node->right);
    }

    // Postorder (Left, Right, Root)
    public function printPostorder()
    {
        $this->postorder($this->root);
    }

    public function postorder($node)
    {
        $this->postorder($node->left);
        $this->postorder($node->right);
        echo $node->value . '  ';
    }

    // Preorder (Root, Left, Right)
    public function printPreorder()
    {
        $this->preorder($this->root);
    }

    public function preorder($node)
    {
        echo $node->value . '  ';
        $this->preorder($node->left);
        $this->preorder($node->right);
    }
}

$bst = new BST();
$bst->insert(15);
$bst->insert(10);
$bst->insert(18);
$bst->insert(8);
$bst->insert(12);
$bst->insert(17);
$bst->insert(26);
$bst->insert(6);
$bst->insert(9);
$bst->insert(19);
$bst->insert(29);
$bst->printInorder();
