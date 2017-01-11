/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

    function objvalues(obj){
    var arrobj=[];
    for(var key in obj){
      arrobj.push(obj[key])
    }
    return arrobj
  }

  var deepEquals = function(obj1, obj2){
    var keyobj1=Object.keys(obj1);
    var valobj1=objvalues(obj1);
    var valobj2=objvalues(obj2);
    var flagkeys=false;
    var flagvalues=false;

    for (var i=0;i<keyobj1.length;i++){
      for (var key in obj2){
        if (keyobj1[i]===key){
          flagkeys = true;
        }
      }
    }
    for (var i=0 ;i<valobj1.length;i++){
      for (var j=0;j<valobj2.length;j++){
        if (typeof valobj1[i] === "object" && typeof valobj2[j] === "object"){
          flagvalues=deepEquals(valobj1[i],valobj2[j])
        }
        if (valobj1[i]===valobj2[j]){
          flagvalues=true;
        }
      } 
    }
    return flagvalues && flagkeys;
  }
