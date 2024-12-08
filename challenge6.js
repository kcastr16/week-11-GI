// Implement a function which convert the given boolean 
// value into its string representation.
// Note: Only valid inputs will be given.

function booleanToString(b){
    if (b){
      return "true"
    }
    else {
      return "false"
    }
    
}

console.log(booleanToString(true))
console.log(booleanToString(false))

/* For this question, I used a if statement. If the input, or "b" is 
true, we console log "true". If it is false we log "false".*/