function palindrome(string)
 {
    let len = string.length;

    for(let i =  0 ;i < len / 2; i++);
    {
        if(string[i] !== string[len -1-i])
        {
            return 'It is not a palindrome'
        }
    }
  return 'It is a palindrome'
    
}

let string = prompt('Enter the string');
let value = palindrome(string);
console.log(value);