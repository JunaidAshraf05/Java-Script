// singleton 
// objects literals

const mySym = Symbol("key1")

const Jsuser = {
    name :"Junaid",

    "Full name":"junaid ashraf",

    [mySym]: "mykey1",
//to acess in symbol put my sym in []
    age:19,
    location:'Bilaspur',
    email:  "junaid@google.com",
    isloggedIn: false,
    lastLoginDays:["Monday" , "saturday"]

}
//to acess the data 
console.log(Jsuser.age)

console.log(Jsuser["age"])

//to acess the full name statement we can only use that sqaure bracket 
console.log(Jsuser["Full name"])

console.log(Jsuser[mySym])


console.log(typeof Jsuser.mySym)


//to update the values just text the new value

Jsuser.email = "junaid@chatgpt.com"

//to freeze the values to not to change
Object.freeze(Jsuser)

//to check the values are frozen or not
console.log(Object.isFrozen(Jsuser))
 
console.log(Jsuser);

//to add function 
Jsuser.greeting = function(){
    console.log("hello world");
}
console.log(Jsuser.greeting);