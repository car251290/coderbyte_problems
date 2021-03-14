function PalindromeCreator(str) {
    function remover(str,char,index){
    	//string being checked, string of unique char, index of unique char, index of already removed char
        var newStr = [];
        for (var i = 0; i < str.length; i++){
            if (str[i] != char[index])
                newStr.push(str[i]);
        }
        return newStr.join('');
    }
    if (str == str.split('').reverse().join(''))
            return "palindrome";

    var uChar = str.split('').filter(function(Value,i, arr){return i == arr.indexOf(Value);}).join('');
	var allP = {};
	for (var i = 0; i < uChar.length; i++){
        var removed1 = remover(str,uChar,i);
        if (removed1 == removed1.split('').reverse().join(''))
        	allP[removed1] = uChar[i];
        uCharMinus1 = uChar.substring(0,i) + uChar.substring(i+1);
        for (var j = 0; j < uCharMinus1.length; j++){
            var removed2 = remover(removed1,uCharMinus1,j);
            if (removed2 == removed2.split('').reverse().join(''))
        		allP[removed2] = uCharMinus1[j] + uChar[i];
        }
    }
    if (Object.keys(allP).length < 1)
    	return "not possible";
    else {
    	longestP = Object.keys(allP).sort(function(a,b){return b.length - a.length})[0];
    	return longestP.length < 3 ? "not possible" : allP[longestP];
    } 
}  