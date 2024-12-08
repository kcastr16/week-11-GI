/*Remove the first and last letter of a string. 
The input should be "Hello", output should be "ell" */

function removeChar(str){
    //You got this!
     return str.slice(1, -1); // We target -1 to indicate the last index of a string. -1 will always be the //last index in a string. 
   };

console.log(removeChar('hello'))

/* For this problem I needed to target the first, and last
letter of a string and then use the slice method to remove it. 
I did this by using slice, and then indicating the index of where I 
would be slicing. I return the output from there. */
   