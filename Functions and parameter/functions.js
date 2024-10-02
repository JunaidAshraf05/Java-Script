function sayMyName(){
    console.log("J");
    console.log("u");
    console.log("n");
   console.log("a");
   console.log("i");
   console.log("d");
   
    
    

}
sayMyName()

//add two number in function 
function addTwoNumbers(number1 , number2){

    console.log(number1+number2);
}

function addTwoNumbers(number1 , number2){
    // let result = number1 + number2

    // return result
     return number1 + number2

    //agr result ke baad kuch bhi console leke jayenge to woh kuch bhi print nahi hota hai....agr result ke pehle kuch bhi likhe toh woh print ho sakkta hai
}
  



addTwoNumbers(3 , 4)
// addTwoNumbers( 3 ,"4")//it will see 4 as string
// addTwoNumbers(3 , "a")//same as a string
// addTwoNumbers(3 , null)//only three will print

const result= addTwoNumbers(3,5)
console.log("result:" , result);


function loginusermessage(username){
  if(username === undefined){
    console.log("Please enter a username");
    return
  }

  if(!username){
    console.log("please enter a username");
    return
  }




    return `${username} just logged `
}

// console.log(loginusermessage("junaid"))

console.log(loginusermessage())//empty string



