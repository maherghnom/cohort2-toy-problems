/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */

var binarySearch = function (array, target) {
  var left=0;
  var right=array[array.length-1];
  
  for (var i=0 ; i<array.length/2;i++){
    var mid=Math.floor((right+left)/2);
    if(array[mid]===target){
      return mid
    }
    if (array[mid]>target){
      right=mid-1;
    }
    if (array[mid]<target){
      left = mid+1
    }
    
  }

};

