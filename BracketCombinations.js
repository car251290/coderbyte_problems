

const output = 0;

const strings = [];

function combos (str, open, close) {

  if(open ===0 && close ===0 ){
    output += 1;

    strings.push(str);
    
  } 
   if (open > 0) {
    combos(`${str}(`, open - 1, close + 1);
  }
  if (close > 0){
    combos(`${str}(`, open, close - 1);

  }

}

 function BracketCombinations(num) {
  combos('', num);
  return output;
}

