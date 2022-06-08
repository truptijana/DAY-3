//!Program to remove duplicate from an array
function getUnique(arr)
{
    let uniqueArr = [];

    for(let i of arr)
    {
        if(uniqueArr.indexOf(i) === -1){
        uniqueArr.push(i)
    }
}

console.log(uniqueArr);
}

let array = [2,3,4,2,4,3,1,1]
getUnique(array)