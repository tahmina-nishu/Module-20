/*
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/

function make_avg(arr, size)
{
    let sum = 0;
    for(nmbr of arr)
        sum += nmbr;

    const avg = sum / size;
    return avg;
}

console.log(make_avg([5,2,3,6],4));