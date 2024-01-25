//task 7
function findLeapYear(firstYear, lastYear) {
    const years = [];
    for (let year = firstYear; year <= lastYear; year++) {
        if  (year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)) {
            years.push (year);
        }
            }
            
    return years;
        }
    
    console.log(findLeapYear(1900, 2024));
