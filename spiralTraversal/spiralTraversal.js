/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */
///// time complexity  quadratic
var spiralTraversal = function(matrix){
  var result=[];
  var i=0;
  var k=0;
  for (var j=0;j<Math.pow(matrix.length,2 );j++){
      result.push(matrix[i][k])
      if(i===k&&k!==0){
        for(var o=0;o<Math.pow(matrix.length,2 );o++){
          //k=k-1;
          result.push(matrix[i][--k]);

          if(k===0){
            i=matrix.length- (matrix.length-1)
            

            for(var w=0;w<Math.pow(matrix.length,2 );w++){
              result.push(matrix[i][k])
              if(k===matrix.length-2){
                return result
              }
              k++;
            }
          }
        }
      }
      if(k===matrix.length-1){
        i++;
        k=matrix.length-2
      } 
      if(i===matrix.length-1){
        i=matrix.length-1;
        k=matrix.length-2
      }


      k++;
  }

};
