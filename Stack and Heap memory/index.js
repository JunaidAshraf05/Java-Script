// Stack memory(primitive) and Heap memory(non-primitive)

let myYoutubename = "Weirdboy"

let anothername = myYoutubename
anothername = "junaidashraf"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    Upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "junaid@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);