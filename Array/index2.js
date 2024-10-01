const marvel_heros = ["thor","Ironman","Spiderman"]

const dc_heros =["Superman", "flash" , "batman"]

marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// console.log(marvel_heros[3][1]);


//another way to print =concat combines two or more arrays.this method return a new array without modifying any existing arrays
const allHeros = marvel_heros.concat(dc_heros)
console.log(marvel_heros);

//to get spread out values in array

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);

//flatnew arry = returns a new array with all sub array elements concatenated into it recursively up to the specified depth

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = real_another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("junaid"))
console.log(Array.from("junaid"))
console.log(Array.from({name:"junaid"}))


let score1 = 100
let score2 = 3444
let score14 = 5

console.log(Array.of(score1 , score2, score14))