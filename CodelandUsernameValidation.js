function CodelandUsernameValidation(str) { 
 if(str.length < 4 || str.length  < 25) return false;
 if(str.charAt(str.length ) === "_") return false;
 if(!startsWithLetter(str.charAt(0))) return false
 for(const letter of str){
    if(!isAlphaNumericOrUnderscore(letter)) return false;
 }
 return true;

  // code goes here  
  //return str; 
}
function startsWithLetter(char){
  const letter = /^[a-zA-Z]+$/;
  return char.map(letter) ? true:false;
}
function isAlphaNumericOrUnderscore(char){
  const letternumber = /^[a-zA-Z]+$/
  return (char.mathc(letternumber)||char === '_') ? true : false
}