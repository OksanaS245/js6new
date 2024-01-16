//task 1
function makeCapitalLetter (startString) {
    const arr = startString.split (' ');
    for (let i = 0; i < arr.length; i++) {
        arr [i] = arr [i].charAt(0).toUpperCase () + arr [i].slice (1)
    }
    const newString = arr.join (' ');
    console.log (newString);
}

let exampleString = 'это предложение из заглавных букв каждого слова';

makeCapitalLetter (exampleString);

//task 2
function cutText (text) {
    if (text.length > 50) {
        const croppedText =  text.slice (0,47) + '...';
        console.log (croppedText)
    } else {console.log (text);}
}

let exampleTxt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit erat eu dolor mattis vehicula. Quisque tempor vulputate nunc, vel euismod mi rutrum ac. Morbi eget viverra turpis, ut ullamcorper velit. Curabitur rhoncus eu eros quis vulputate. In lobortis, nibh quis aliquet rhoncus, lectus mi auctor libero, nec interdum augue nibh vitae urna. Vestibulum vel sollicitudin nibh. Maecenas venenatis malesuada scelerisque. Cras dapibus leo ut quam aliquam congue';

cutText (exampleTxt);

//task 3
function arrToString (array) {
    const string = array.join (' ');
    console.log (string);
}

const arr = ['JavaScript', '-', 'мультипарадигменный', 'язык', 'программирования', 'с', 'динамической', 'типизацией'];

arrToString (arr);

//task 4
function stringToArr (someString) {
const arr = someString.split (',');
console.log (arr);
}

const colors = 'Yellow, Green, Orange, Black, White';

stringToArr (colors);

//task 5
function letterCounting (string) {
    const checkedWords = string.split (' ');
    for (let i = 0; i < checkedWords.length; i++) {
        let l;
        if (checkedWords[i].length === 1) {l = 'букву'} else if (checkedWords[i].length > 1 && checkedWords[i].length < 5) {l = 'буквы'} else {l = 'букв'};
        console.log ('"'+ checkedWords[i] + '"' + ' содержит' + ' ' + checkedWords[i].length + ' ' + l);
    }
}

let string2 = 'Я так сильно люблю программировать';
letterCounting (string2);


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
    console.log (newNamesArr);
}

const names = ["Alice", "Bob", "alice", "Eve", "BOB", "Charlie", "eve", "David", "charlie"];
removeDuplicateNames (names);

//task 7
function findLeapYear (firstYear, lastYear) {
    const years = [];
    for (let year = firstYear; year <= lastYear; year++) {
        if  (year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)) {
            years.push (year);
        }
            }
            
    return years;
        }
    
    console.log (findLeapYear (1900, 2024));
