var userValue= prompt("enter your value");
var arr = [];
var i=0;
var evenCount=0, oddCount=0;
while(userValue!=0)
{
    userValue= prompt("enter your value");
   if(userValue!=0)
   {
      arr[i] = userValue;
      if(arr[i]%2 == 0)
      {
         evenCount += 1;
      }
      else
      {
         oddCount +=1;
      }
   }
  
  
   i++;
   
}
console.log(arr);
console.log(`total no of even numbers are ${evenCount} and total no of odd are ${oddCount}`);