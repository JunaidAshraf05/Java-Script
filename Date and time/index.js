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


let myCreateDate = new Date(2024,8,29,5,3)
console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleString());
