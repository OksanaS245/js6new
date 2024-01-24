//task 6
function removeDuplicateNames (namesArr) {
    const string = namesArr.join (' ');
    const smallLetter = string.toLowerCase ().split (' ');
    let newNamesArr = [];
    for (let i = 0; i < smallLetter.length; i++) {
        let checkedName = smallLetter [i];
        if (!newNamesArr.includes (checkedName)) {
            newNamesArr.push (checkedName);
        }
    }
    for (let i = 0; i < newNamesArr.length; i++) {
        newNamesArr [i] = newNamesArr [i].charAt (0).toUpperCase () + newNamesArr [i].slice (1)
    }
    return newNamesArr;
}

const names = ["Alice", "Bob", "alice", "Eve", "BOB", "Charlie", "eve", "David", "charlie"];
console.log (removeDuplicateNames(names));

