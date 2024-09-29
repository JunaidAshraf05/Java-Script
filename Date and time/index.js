//Dates

let myDate = new Date()
console.log(myDate) // Output: 2023-02-20T14:30:
console.log(myDate.toString());

console.log(myDate.toISOString());
// Output: function toISOString() { [native code: this] }

console.log(myDate.toLocaleString());
// Output: 2/20/2023, 2:30:00 PM

console.log(myDate.toDateString());

//to get thw type of date
console.log(typeof myDate);


let myCreateDate = new Date("29-09-2024")
console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleString());



let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Date.now());

//to get the precise date 
console.log(Math.floor(Date.now()/10000));

// to get month , second,time,timezone,hours,fullyears
console.log(myDate);
console.log(myDate.getMonth());
console.log(myDate.getSeconds());
console.log(myDate.getTimezoneOffset());
console.log(myDate.getHours());
console.log(myDate.getFullYear());
// to get the day of the week
console.log(myDate.getDay());
// to get the day of the month
console.log(myDate.getDate());


ne



