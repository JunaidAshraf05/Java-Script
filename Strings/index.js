const name = "junaid"
const repocount = 50 

console.log(name + repocount + "Value"); /* Old method to print */

//put value in curlybracket to define
console.log(`Hello my name is ${name} and my repo count is ${repocount}`) /*new way to print*/ 

// another way to declare strings
 const gameName = new String('juniadhc')
console.log(gameName[0]);

//to get the value of length
console.log(gameName.length);

//to get the value in uppercase
console.log(gameName.toUpperCase());

//to get charcater in indexes
console.log(gameName.charAt(2));

//to get the value of index of charcter
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8 , 4)
console.log(newString);

//trim wll delete the space in string
const newStringOne = '     junaid        '
console.log(newStringOne);
console.log(newStringOne.trim());

//replace
const url = "https://junaid.com/junaidashraf"
console.log(url.replace('%20','__'))

//it will change  strings to array form
console.log(gameName.split('_'));
