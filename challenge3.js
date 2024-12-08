// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not…

function friend(friends){
    
    const frnArray = [];
  
    friends.forEach((friend) => {
      if(friend.length === 4) {
        frnArray.push(friend);
      } 
    });
    
    return frnArray; 
  }

  console.log(friend(['Kevin', 'John', 'Nugget', 'Mark']))

  /*For this challenge my first thought is to check each item in an array 
  by using length, and for each item in an array that absoluetly equaled 4 
  characters in length I pushed those in to a new array and then returned it.  */