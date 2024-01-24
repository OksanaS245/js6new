//task 1
function makeCapitalLetter(startString) {
    const arr = startString.split (' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase () + arr[i].slice (1)
    }
    const newString = arr.join (' ');
    return newString;
}

let exampleString = 'это предложение из заглавных букв каждого слова';

console.log (makeCapitalLetter(exampleString));

