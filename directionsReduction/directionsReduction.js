/*
You are lost in Amman and need directions. You talk to a few strangers
and get these directions: go "NORTH", then "SOUTH", then "WEST", then "EAST", then "EAST".

Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. 
Going to one direction and coming back the opposite direction is a needless effort.

Your task is to look at the directions and eliminate all unnecessary moves.
In this case, you will just go EAST.

Another example:

plan = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, 
better stay where you are. So the task is to find a simplified version of the plan. 

A better plan in this case is simply: 
plan = ["WEST"]

You have to write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions removed.

More examples:

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => [] //don't need to move at all
*/

var dirReduc = function(directions){
////////////////////////////////
///         O(N)     ////
//////////////////////////////

  var dir=["NORTH","EAST","SOUTH","WEST"];
  var n=0;
  var s=0;
  var w=0;
  var e=0;
      for(var j=0;j<directions.length;j++){
        if(dir[0]===directions[j]){
          n++
        }
        if(dir[1]===directions[j]){
          e++
        }
        if(dir[2]===directions[j]){
          s++
        }
        if(dir[3]===directions[j]){
          w++
        }
      }
      if(n===s&&w===e){
        return [];
      }else if(n===s&&w>e){
        return ["WEST"]
      }else if(n===s&&w<e){
        return ["EAST"]
      }else if(n>s&&w===e){
        return ["NORTH"]
      }else if(n<s&&w===e){
        return ["SOUTH"]
      }
};


