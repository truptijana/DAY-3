//! Program to find factors of integer
const num = prompt("Enter a number");

console.log('the factors of ${num} is');
  
for(let i =0;i<=num;i++)
{
    if(num%i==0){
        console.log(i);
    }
}





