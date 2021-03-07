function MinWindowSubstring(strArr) { 
  //there are two parametors one N
  // and the other K 
  var min = null;
  var arr0 =strArr[0];
  var arr1 =strArr[1];

  for(var i = 0; i< arr0.length; i++){
    for(var j= i+1; j <= arr0.length ; i++){
      var sub = arr0.slice( i, j);
      if(checkK(sub,arr1 )){
        if(min == null || sub.length< min.length){
          min = sub;
        }
      }
      return min
    }

  }
  function checkK(sub, arr1) {
    var h = arr1.split('');
    for(var i; i< sub.leght; i++){
      var char = sub[i];
      var index = h.indexOf(char);
      if(index>-1){
        h.splice(index, 1);
      }


    }
    if(h.length === 0){
    return true;
  } else {
    return false;
  }


  }

  // code goes here  
  return strArr; 

}
   