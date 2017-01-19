/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  //fill me in!
};

//write methods here!

var LinkedList = function(){
  this.head=null;
  this.tail=null;

  this.length=0;
  
};
LinkedList.prototype.addToTail=function (value){
  
  if(this.length===0){
    var temp=new Node(value);
    this.head=temp
    this.tail=temp
    this.length++;
  }else{
    var temp=new Node(value);
    this.tail.next=temp;
    this.tail=this.tail.next
    
    this.length++;

  }

}
LinkedList.prototype.removeHead=function (){
  this.head=this.head.next
  this.length--

}
LinkedList.prototype.contains=function (target){
 if (this.length===1){
   if (this.head.value===target){
  return true
 } else if(this.length>1){
  
 }
 
 }else{
  return false
 }

}


function Node(value){
  this.value=value;
  this.next=null;
}

