
exports.min = function min (array) {
  if (Boolean(array)==true && array.length!=0){return Math.min.apply(null, array)}
  else return 0;
}

exports.max = function max (array) { 
  if (Boolean(array)==true && array.length!=0){return Math.max.apply(null, array)}
  else return 0;
}

exports.avg = function avg (array) {
  let sum = 0;
  if (Boolean(array) && array.length!=0) {
  for (i=0; i<array.length; i++) {
    sum +=array[i]; 
    }
    if (sum!=0) {return sum/array.length}
    else return 0;
  }
  else return 0;
  
}
