/*
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
*/

function calculate(nmbr)
{
    if(nmbr % 2 === 0)
        return nmbr / 2;
    else
        return nmbr * 2;
}

console.log(calculate(5));
console.log(calculate(6));