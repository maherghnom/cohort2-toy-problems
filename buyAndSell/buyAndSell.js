/*
*
* Given an array representing prices of the stock on different days, 
* find the maximum profit that can be earned by performing maximum of 
* one transaction. A transaction consists of activity of buying and 
* selling the stock on different or same days.
*
*/

/*
*
* For example in this array - {100, 80, 120, 130, 70, 60, 100, 125} 
* the price of the stock on day-1 is 100, on day-2 is 80 and so on.
* The maximum profit that could be earned in this window is 65 
* (buy at 60 and sell at 125).
* For price array - {100, 80, 70, 65, 60, 55, 50}, maximum profit 
* that could be earned is 0.
*
*/

// Feel free to add helper functions if needed
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

var maximumProfit  = function(array) {
  var arr=[];
  var elem1=array[0]
  var last=array[array.length-1]
  var sell =getMaxOfArray(array)   
  //buying at the  minimum
  var buy=getMinOfArray(array)
  //selling at highest diff
  if (array.indexOf(buy)===array.indexOf(last)){
    return "The maximum profit is :" +0
  }
  if (array.indexOf(buy)===array.indexOf(elem1)){
    return "The maximum profit is :" + (sell-buy)
  }
  for (var i=array.indexOf(buy);i<array.length;i++){
    arr.push(array[i])
  }
    return maximumProfit(arr)
}