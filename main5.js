//task 5
function letterCounting(string) {
    const checkedWords = string.split (' ');
    for (let i = 0; i < checkedWords.length; i++) {
        let l;
        if (checkedWords[i].length === 1) {l = 'букву'} else if (checkedWords[i].length > 1 && checkedWords[i].length < 5) {l = 'буквы'} else {l = 'букв'};
        console.log ('"'+ checkedWords[i] + '"' + ' содержит' + ' ' + checkedWords[i].length + ' ' + l);
    }
}

let string2 = 'Я так сильно люблю программировать';
letterCounting(string2);


