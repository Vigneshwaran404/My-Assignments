//Task1
console.log("Task1");

function userProfile(name)
{
    console.log("Hello " +name+ "\n");
    
}
userProfile("Vigneshwaran")

//Task2

console.log("Task2");
let double = (number)=>
{
    return number*2
}
console.log("The double of the given number is ", double(3), "\n");
//Task3
console.log("Task3");
 let log = setTimeout(() => {
    console.log("Task3: This message is delayed by 2 seconds\n");
    
}, 2000 ); 


//Task4
function getUserData (name, age, callback)
{
    setTimeout(() => {
        console.log("Task4");
        console.log("Task3: This message is delayed by 3 seconds\n");
        console.log("Task4: The user name and age is " +name+ "\t " +age );
    }, 3000);
    
    callback()
}
function done()
{
    //console.log("Task completed");
    
    
}
getUserData("Vigneshwaran", "27" ,done)