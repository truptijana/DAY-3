let root1,root2

let a = prompt("Enter the first number");
let b = prompt("Enter the second number");
let c = prompt("Enter the third number");


let discriminant = b*b-4*a*c;

if(discriminant > 0)
{
    root1  = (-b + Math.sqrt(discriminant))  /(2*a);
    root2 = (-b + Math.sqrt(discriminant)) / (2*a);


    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

else if (discriminant == 0){
    root1 = root2 = -b / (2*a);

    console.log(`The roots of quadratic equation are ${root} and ${root2}`);
}