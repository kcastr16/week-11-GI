// Very simple, given a number (integer / decimal / both 
// depending on the language), 
// find its opposite (additive inverse).

function opposite(number) {
    return number * -1;
  }

console.log(opposite(10));

/*For this challenge at first I was going to 
add a "-" to the input number, but this would not account 
for strings and would just append a dash to a string. 
To ensure this worked for numbers, I instead multiplied it by -1
to ensure this would work only for integers. */