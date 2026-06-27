let year = prompt("Enter a year: " );
function isLeapYear(year){
    if (year % 4 == 0)
    {
        if ( year % 100 != 0 || year % 400 == 0)
        {
                console.log(year + " is leap year.");
        }
    }
    else 
        console.log (year + " is not leap year.")
}

isLeapYear(year);