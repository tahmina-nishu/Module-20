/*
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/

function count_zero(str)
{
    let cnt = 0;
    for(digit of str)
    {
        if(digit === '0')
            cnt++;
    }
    return cnt;
}

console.log(count_zero('1001011100'));