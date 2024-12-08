// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) 
// that receive a list of integers as input, and return the largest and lowest number in that list, respectively. 
// Each function returns one number.

var min = function(list){
    
    list.sort((a, b) => a - b);
    return list[0]
}

var max = function(list){
    list.sort((a, b) => a - b);
    return list.at(-1);
}

console.log(min([1, 3, 5, 6, -11, 566]));
console.log(max([1, 3, 5, 6, -11, 566]));

/*At first, I was confused with this challenge because initially I was just utilizing the sort
method first, and then returning the specificed object with an index. Just utilizing sort though does not sort
negative numbers well, so my minimum number was not a negative number if it was placed in the middle of the array. I use a, b and an arrow function to compare the 
numbers, and then place one before the other. If the number was negative it placed it before a positive number.  */