
/////////////FUNCTION WITH ARRAY\\\\\\\\\\\
function calculateCartPrice(...num1){
    return num1
//if we put val1 ,val2 in before points it will take 2 value and will print only 500 and 3000000000
}
console.log(calculateCartPrice(200 , 400 ,500, 300000000000))

////////////FUNCTION WITH OBJECT\\\\\\\\\\\

const user ={
    username :"junaid",
    price: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

//another way
handleObject({
    username:"sam",
    price:400
})

const myNewArray = [200 ,400 ,5000]
function rerurnSecondValue(getArray){
    return getArray[1]
}
console.log(retunrSecondValue(myNewArray));
//console.log(retunrSecondValue([200 ,400 ,5000]));