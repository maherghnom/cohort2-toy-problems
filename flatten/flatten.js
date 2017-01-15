/*
For this exercise you will create a flatten function. 
The function takes in any number of arguments and flattens them into a single array. 
If any of the arguments passed in are an array then the individual objects within the array
will be flattened so that they exist at the same level as the other arguments. 
Any nested arrays, no matter how deep, should be flattened into the single array result.

The following are examples of how this function would be used and what the expected results would be:

flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']

*/

function arrayof(arr){
  var result=[]
  for (var i=0; i<arr.length;i++){
    if (Array.isArray(arr[i])){
      if (arr[i].length===1){
        if(!Array.isArray(arr[i][0])){
          result.push(arr[i][0])

        }else{
          for(var k=0;k<arr[i][0].length;k++){
            result.push(arr[i][0][k])
          }
        }
      }
    }else{
      result.push(arr[i])

    }
  }
  return result
}


function flatten(){
  var args = Array.from(arguments);
  var result=[];
  var r="";
  for(var i=0 ; i < args.length ; i++ ){
    if(Array.isArray(args[i])){
      for(var j=0;j<args[i].length;j++){
        result.push(flatten(args[i][j]))
      }

    }else{
     result.push(args[i])
   }
 }
 result=arrayof(result)

 return result
}
