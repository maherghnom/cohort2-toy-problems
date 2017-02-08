
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */


var translateRomanNumeral = function(romanNumeral){
  var DIGIT_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  var arr =romanNumeral.split('');
  var nums=[];
    for (var i=0;i<arr.length;i++){
     for(var key in DIGIT_VALUES){
      if(arr[i]===key){
        nums.push( DIGIT_VALUES[key])
      }
    }
  }
  var result=0;
  for(var j=nums.length-1;j>=0;j--){
    let n=nums[j+1]
    if(nums[j]>=result || nums[j]>=n){
      result=nums[j]+result
    }else{
      if(nums[j]<result){
        result=result-nums[j]
      }
    }
  }
  return result
 
}
