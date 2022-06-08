//!Program to check leap year or not
function checkLeapyear(year)
{
    if((0 == year % 4 ) && (0 !=year % 100) || (0 == year % 400)){
        console.log(year +' is a leap  year');
    }
    else
    {
        console.log(year  +'is not a leap year');
    }
}

let year = prompt('entera year')
checkLeapyear(year)