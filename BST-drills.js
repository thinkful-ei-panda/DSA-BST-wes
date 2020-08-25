const BinarySearchTree = require('./binary-tree');

//1.

//5.
function height(tree) {
  if (tree.key === null) {
    return 0;
  }

  if (!tree.left && !tree.right) {
    return 1;
  }

  if (!tree.left) {
    return height(tree.right) + 1;
  }

  if (!tree.right) {
    return height(tree.left) + 1;
  }

  let heightRight = height(tree.right);
  let heightLeft = height(tree.left);

  return (heightRight > heightLeft)
    ?heightRight + 1
    :heightLeft + 1;
}

//6.

function isBST(tree) {
  //empty tree
  if(tree.key === null){
    return true;
  }

  //leaf node
  if(!tree.left && !tree.right){
    return true;
  }

  //only left branch exists
  else if (!tree.right) {
    if(tree.left.key > tree.key)
      return false;
    return isBST(tree.left);
  } 

  //only right branch exists
  else if (!tree.left) {
    if(tree.right.key < tree.key)
      return false;
    return isBST(tree.right);
  }
  
  //if both left and right exist
  else {
    if(tree.left.key > tree.key || tree.right.key < tree.key){
      return false;
    } 
    else {
      return isBST(tree.left) && isBST(tree.right);
    }
  }
}

//7.

function thirdLargestNode(tree) {
  if(tree.key === null) {
    throw new Error('Not enough nodes');
  }

  if(tree.right){
    return thirdLargestNode(tree.right);
  }

  if(tree.parent.left){
    return tree.parent.left.key;
  } else if (tree.parent.parent){
    return tree.parent.parent.key;
  } else {
    throw new Error('Not enough nodes');
  }
}



function main () {
  let numberTree = new BinarySearchTree;
  
  numberTree.insert(4);
  numberTree.insert(2);
  
  numberTree.insert(3);
  numberTree.insert(1);
  numberTree.insert(5);
  numberTree.insert(6);
  numberTree.insert(7);

  // numberTree.key = 11;

  // console.log(isBST(numberTree));
  console.log(thirdLargestNode(numberTree));
}

main();

