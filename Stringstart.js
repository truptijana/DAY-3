//!Program to check if the string starts with 'S' and ends with 'G'
function checkSring(str){
    if(str.startsWith('S')  && str.endsWith('G'))
    {
    console.log('The string starts with S and ends with G');
}

else if(str.startsWith('S'))
{
   console.log('The String starts with S but does not end with G');
}
else if(str.endsWith('G'))
{
    console.log('The String ends with G but does not start with S');
}
else
{
    console.log('The string does not start with S and end with G ');
}
}

let string = prompt('enter  string')
checkSring(string)