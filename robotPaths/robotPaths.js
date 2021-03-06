/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  Be systematic with your approach - make a clear plan before you start writing code.
 *
 *  Extra credit: Make your solution work for a grid of any size.
 *
 */

// A Board class will be useful. You can add extra methods to it.


var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {

    return !!this[i][j];
  }
  ////this function is to check connection between cells of path;
   board.connectedcell = function(i, j) {
    if(board.hasBeenVisited(i-1,j)  || board.hasBeenVisited(i+1,j)  ||
       board.hasBeenVisited(i,j-1)  || board.hasBeenVisited(i,j+1)  ||
       board.hasBeenVisited(i+1,j+1)|| board.hasBeenVisited(i-1,j-1) ){
      
      return true
    }else {
      return false
    }

  }
  return board;
};

//You can create a board size 5 like this:
//var myBoard = makeBoard(5);
//The answer for a board size 5 is 8512 unique paths

var robotPaths = function(myBoard) {
  //trying to fill a path ;
  var pathes= {};
  var j=0;
  var i=0;
  ////startpoint=>
  myBoard.togglePiece(i,j);
///  

// var checkpath=function(board){
// }

  var length=myBoard.length;
  for(var q=0; q<Math.pow(length,length);q++){
    i=Math.floor(Math.random() *length ) + 0;
    //var j=Math.floor(Math.random() *length ) + 0;
    j=1
    if(!myBoard.hasBeenVisited(i,j) && myBoard.connectedcell(i,j) ){
      myBoard.togglePiece(i,j);
    }

  }
  return myBoard
}


      










