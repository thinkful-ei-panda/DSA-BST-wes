const BST = require("./binary-tree")

//1.

//                  3
//                /  \
//               1    4
//                \     \
//                 2     6
//                      / \
//                     5   9          
//                        /
//                       7

//5,1,14,25,16,20,5,14

//4. returns the total value of the tree

//5.
function height(tree) {
    if(tree.key === null) {
        return 0
    }

    if(tree.left && tree.right) {
        if(height(tree.left) > height(tree.right)) {
            return height(tree.left) + 1
        }

        else {
            return height(tree.right) + 1
        }
    }
    else if(tree.left) {
        return height(tree.left) + 1
    }
    else if (tree.right){
        return height(tree.right) + 1
    }
    else {
        return 0
    }
}

// function height(tree) {
//     if(!tree) {
//       return -1;
//     }
//     let left = height(tree.left)
//     let right = height(tree.right)
//     if(left > right) {
//       return left + 1
//     }
//     else {
//       return right + 1
//     }
//   }

function minHeight(tree) {
    if(!tree) {
      return -1;
    }
    let left = height(tree.left)
    let right = height(tree.right)
    if(left < right) {
      return left + 1
    }
    else {
      return right + 1
    }
  }


//6.
function isBst(tree){
    if(tree === null){
      return true;
    }
    if(!tree.left && !tree.right){
      return true;
    }
    if(tree.left && tree.left.key > tree.key){
      return false;
    }
    if(tree.right && tree.right.key < tree.key){
      return false;
    }
    return isBst(tree.left) && isBst(tree.right);
  }

//7.
function thirdLargest(tree) {
    let largest = tree._findMax()
    tree.remove(largest.key)
    let second = tree._findMax()
    tree.remove(second.key)
    let third = tree._findMax()
    return third.key
}

//8.
function balancedBst(tree){
    let diff = height(tree) - minHeight(tree)
    return(!(diff > 1));
}

function sameBst(arr1, arr2) {
    if((arr1[0] !== arr2[0]) || (arr1.length !== arr2.length)) {
      return false
    }
    if(arr1.length < 2 || arr1.length === 2 && arr1[1] === arr2[1]) {
      return true
    }
    let right1 = arr1.filter(item => item > arr1[0])
    let left1 = arr1.filter(item => item < arr1[0])
  
    let right2 = arr2.filter(item => item > arr2[0])
    let left2 = arr2.filter(item => item < arr2[0])
  
    return sameBst(right1, right2) && sameBst(left1, left2)
  }

  

function main() {
    let bst = new BST()

    bst.insert(3)
    bst.insert(1)
    bst.insert(4)
    bst.insert(6)
    bst.insert(9)    
    bst.insert(2)
    bst.insert(5)
    bst.insert(7)


    console.log(isBst(bst))
    console.log(height(bst))
    console.log(minHeight(bst))
    console.log(balancedBst(bst))


    console.log(thirdLargest(bst))
    console.log(height(bst))
    console.log(balancedBst(bst))

    arr1 = [3, 5, 4, 6, 1, 0, 2]
    arr2 = [3, 1, 5, 2, 4, 6, 0]

    console.log(sameBst(arr1,arr2))


}

main()