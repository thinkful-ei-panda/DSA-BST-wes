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

//#5
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

function main() {
    let bst = new BST()

    bst.insert(3)
    bst.insert(1)
    bst.insert(4)
    bst.insert(6)
    bst.insert(9)


    console.log(height(bst))
}

main()