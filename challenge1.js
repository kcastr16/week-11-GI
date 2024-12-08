// Reverse a string. The user must input a string, and the output 
// should be the string reversed
// IE: input "hello" output should be "olleh"
function solution(str){
  return str.split('').reverse().join('');
};


console.log(solution('hello'));


/* I felt this problem as first was very challenging. My thought
process was to utilize the reverse() array method, but I needed to first
turn the string in to an array in order to utilize the method, anf then
once the array was reverse join it back together in to a string using the
join method.  
*/ 