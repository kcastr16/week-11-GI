// Your task is to make a function that can take any non-negative 
// integer as an argument and return it with its digits in descending 
// order. Essentially, rearrange the digits to create the highest 
// possible number.

function descendingOrder(n){
  
    return parseInt(n.toString().split("").sort().reverse().join(''));
  }

  console.log(descendingOrder(16893456))

  /*For this challenge my first thought is I need to sort the
  number input, and then reverse it as is it sorts from lowest
  to highest. I use split to turn it in to an array, and the
  I utilize the sort method to sort from smallest to largest. 
  From there we use join to join it back together in to a string. 
  Lastly to join it back in to a integer we use parseInt to turn it 
  from a string back in to a integer and then we return it.  */
  
