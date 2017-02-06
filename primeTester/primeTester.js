/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */
var primeTester = function(n) {
  var arr=[2,3,5,7,11,13,17,19,23,29,31]
	if (n%arr[0]===0 || n%arr[1]===0 ||n%arr[2]===0 || n%arr[3]===0 ||
	    n%arr[4]===0 || n%arr[5]===0 ||n%arr[6]===0 || n%arr[7]===0 ||
	    n%arr[8]===0 || n%arr[9]===0 ||n%arr[10]===0 ){
	  
	  	return false;
	}else{
	  	return true;
	}
}

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */
var giveMePrimeN = function(n1,n2){
    var result=[];
    for(var i=n1;i<n2;i++){
      if(primeTester(i)){
        result.push(i)
      }
    }
    return result ;
  }  
  