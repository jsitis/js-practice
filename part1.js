/* Q4. Day of the week
Store a number 1-7 in day. Use a switch statement to print the day name (1 = Monday ... 7 = Sunday). Print "Invalid day" for anything else.

3 → Wednesday
9 → Invalid day


switch(9){
    case 1: console.log("Monday")
    break;
    case 2: console.log("Tuesday")
    break;
    case 3: console.log("Wednesday")
    break;
    case 4: console.log("Thursday")
    break;
    case 5: console.log("Friday")
    break;
    case 6: console.log("Saturday")
    break;
    case 7: console.log("Sunday")
    break;
    default: console.log("Invalid Day")
}

*********************************************************************************************************************
*/

/* Q5. Leap year
Store a year in year. Print whether it’s a leap year. A year is a leap year if it’s divisible by 4, except years divisible by 100, unless they’re also divisible by 400.

2024 → leap year
1900 → not a leap year
2000 → leap year


let year = 2000;

if (year % 4 === 0 && year % 100 !== 0)
    {
        console.log("leap year")
    }
else if (year % 400 === 0)
    {
        console.log("leap year")
    }
else console.log("not a leap year")

*********************************************************************************************************************
*/

/*Q1. Sum of digits
Store a number in num. Use a loop to find the sum of its digits.

472 → 13
9 → 9
1005 → 6

let num = 1005;
let sum = 0;

while(num > 0){
    const digit = num % 10;
    sum += digit;
    num = (num - digit) / 10;
    //console.log(digit, sum);
}
console.log(sum);
*********************************************************************************************************************
*/

/*Q2. Palindrome number
Reverse a number using a loop, then compare it with the original. Print whether it’s a palindrome.

121 → palindrome
1331 → palindrome
123 → not a palindrome

let num = 121;
const original = num;
let palindrome = 0;

while (num > 0){
    const digit = num % 10;
    palindrome = palindrome * 10 + digit;
    num = (num - digit) / 10;
}
 console.log(palindrome === original ? "palindrome" : "not a palindrome");

 *********************************************************************************************************************
*/

/*Q3. Prime check
Store a number in num. Print whether it’s prime. Think about when you can stop checking early.

2 → prime
17 → prime
1 → not prime
91 → not prime (it’s 7 x 13, so watch out!)


let prime = 169;

if (prime > 1)
    {
        if(prime % 2 === 0 && prime !== 2 ) console.log("not a prime");
            //else console.log("prime")
            else if(prime % 3 === 0 && prime !== 3 ) console.log("not a prime");
            else if(prime % 5 === 0 && prime !== 5 ) console.log("not a prime");
            else if(prime % 7 === 0 && prime !== 7 ) console.log("not a prime");
            else if(prime % 11 === 0 && prime !== 11 ) console.log("not a prime");
            else console.log("prime")
        
    }
else console.log("not a prime");
*********************************************************************************************************************
*/

/*
function abcd(){
    console.log("hahahahahhah");
    return function(){
        console.log("hihihihih");
    };
}

abcd();

*********************************************************************************************************************
*/

/* Pass a function inside a function and execute it inside

function a(val){
    val();

}
a(function(){
    console.log("heheheheh");
} );

*********************************************************************************************************************
*/

/* Make a BMI calculator

function bmi(w,h){
    return w / (h*h);
}

console.log(bmi (69, 1.7).toFixed(2));
*********************************************************************************************************************
*/


/* Make a reusable discount calculator using HOF

function discountCalc (discount){
    return function (price){
        return price - price * (discount/100);
    }
}
//let ten = discountCalc(10);
//let twenty = discountCalc(20);

console.log(discountCalc(10)(2000));
console.log(discountCalc(20)(2000));
*********************************************************************************************************************
*/

/*function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}

//let c = counter();
console.log(counter()());
*********************************************************************************************************************
*/

/*create a pure function to transform a value

function tvalue(val){
    return val * 2;
}
console.log(tvalue(7));
*********************************************************************************************************************
*/

/* Create an array with three fruits and print the second fruit

let arr = ["apple", "banana", "grapes"];
//arr[1]
// Add mango at end and pineapple in the start
arr.push("mango");
arr.unshift("pineapple");

// Replace kiwi with banana
arr.replace("kiwi", "banana")


let arr = [1, 2, 3, 4];

let newarr = arr.map (function (val) {
    return val*val;
});

*********************************************************************************************************************
*/