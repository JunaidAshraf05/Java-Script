const myArr = [0 ,1 ,2,3,4,5]

console.log(myArr[0]);

const Superheros = ["Iron man" , 'Batman']

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// ArrayaMethod

//to print numbers
myArr.push(7)
console.log(myArr)

//if you want to remove last value of array
myArr.pop()
console.log(myArr)

// to put the value in first array
myArr.unshift(6)
console.log(myArr)
// to remove the first value of array
myArr.shift()
console.log(myArr)


//to get the value of index
console.log(myArr.indexOf(2))

//adds alll the array into the string
const newArr = myArr.join
console.log(myArr);
console.log(typeof newArr);

//slice ,splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B" , myArr);


const myn2 = myArr.splice(1,3)
console.log("c" , myArr);
console.log(myn2);