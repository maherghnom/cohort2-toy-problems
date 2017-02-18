/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/


/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/
<<<<<<< HEAD
/////////// with extra for array///////
Array.prototype.isSubsetOf = function (arr) {
    var length =this.length;
    var ctr=0;
    var y;
  for (var i=0;i<this.length;i++){
    if (Array.isArray(this[i])){
      for(var j=0;j<arr.length;j++){
        if (Array.isArray(arr[j])){
          if(this[i].length===arr[j].length){
            y = this[i].isSubsetOf(arr[j])
          }else{
            y= false;
          }
           
           
        }
      }
    }
    if (arr.includes(this[i])){
        ctr++
    }
  }
  if(ctr===length){
    return true 
  }else if(ctr!==length){
    return false || y; 
  }
}




///////////////////////////////////////////////////
///// min credit/////////////

Array.prototype.isSubsetOf = function (arr) {
    var length =this.length;
    var ctr=0;
  for (var i=0;i<this.length;i++){
    if (arr.indexOf(this[i])> -1){
        ctr++
    }
  }
  if(ctr===length){
    return true
  }
  return false;

}
=======

Array.prototype.isSubsetOf = function (arr) {

}
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
