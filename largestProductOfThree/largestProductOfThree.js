/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

///////////////////////////////////////
//.. M V P..///////////  O(n^2)////////
///////////////////////////////////////

var largestProductOfThree = function(array) {
  var arr=[];
  for (var i=0;i<array.length;i++){
    for (var j=0;j<array.length;j++){
      for(var q=0;q<array.length;q++){
        if (array[i]!==array[j]&&array[i]!==array[q]&&
          array[q]!==array[j]){
          if(arr.indexOf(array[j]*array[i]*array[q]) === -1 ){
           arr.push(array[j]*array[i]*array[q])
         }
       }
     }
   }
 }
 return Math.max.apply(null, arr);
};




