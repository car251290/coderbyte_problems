function QuestionsMarks(str) { 
res = false;
for(var i=0; i<str.length; i++){
  for(var j=0; j<str.length; j++){
    if(Number (str[i])+ Number(str[j])===10) {
      return true;

    } if (str.slice(i,j).split("?").length -1 <3) {
      return false
    }
  }
  
}
return res

}