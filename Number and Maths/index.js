const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

//to convert in number to string
console.log(balance.toString());

//to get the length
console.log(balance.toString().length);

//to get the value 0 after decimal in output
console.log(balance.toFixed(1)) ;


//to get precise value
const otherNumber = 123.8937
console.log(otherNumber.toPrecision(3));

//to get the hundreds
const hundreds = 10000000000000
console.log(hundreds.toLocaleString('en-IN'));


            ///***********MATHS ********** */

console.log(Math);

//to convertfrom -ve to +ve
console.log(Math.abs(-5));

//to get te round off value
console.log(Math.round(3.7));

//to get top value of round off
console.log(Math.ceil(4.2));

//to get the lowest value of roundoff
console.log(Math.floor(4.9));

//to find the minimun value 
console.log(Math.min(4,5,6,7,8,9,10));

//to get the random math value wil get between in 0 to 1
console.log(Math.random());

//if we multiply the random value with 10 point will shiftr
console.log(Maths.random()*10);

console.log((Math.random()*10)+1);

//to get value in between the range

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);











