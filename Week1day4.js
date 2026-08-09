
function printOddNumbers()
{  
   console.log('Odd numbers from 1 to 25 are:')
   let num = 25
   for(let i=1; i<=num ; i++){
     if(i%2 != 0)
        console.log(i);
   }
}
printOddNumbers()