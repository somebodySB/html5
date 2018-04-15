var position = function(x,y){
  this.left = x;
  this.top = y;
}

var p1 = new position(0,0);
var p2 = new position(12,35);
var p3 = new position(23.8,45);

var polygonPos = (function(){
  var n = 1;
  var l = 0;
  this.div = document.getElementById("transl");
  this.present = 0;
  this.last = null;
  this.next = 1;
  this.posArray = [p1,p2,p3];

  this.isFirst = function(){
    return this.present == 0;
  }
  this.isLast = function(){
    return this.present == (this.posArray.length-1);
  }

  this.getNext = function(){
    if(isLast()){
      return;
    }else{
      last = present;
      present++;
      transDiv(n);
      if(isLast()){
        next == null;
      }else{
        next = present+1;
      }
    }
  }

  this.last = function(){
    if(isFirst()){
      return;
    }else{
      next = present;
      present--;
      transDiv(l);
      if(isFirst()){
        last = null;
      }else{
        last = present-1;
      }
    }
  }

  this.transDiv = function(isN){
    var div = document.getElementById("transl");
    var bgDiv = document.getElementById("bg");
    bgDiv.style.transform = "translate(-51%,-55%)";
    if(isN){

      var middleX = (posArray[present].left+posArray[last].left)/2;
      var middleY = (posArray[present].top+posArray[last].top)/2;

    }else{
      var middleX = (posArray[present].left+posArray[next].left)/2;
      var middleY = (posArray[present].top+posArray[next].top)/2;
    }
    div.style.transformOrigin = "-" + middleX+ "% -"+middleY+"%";
    div.style.transform = "scale(0.8)" + "translate3d(-" + middleX+ "%,-"+middleY+"%,0)";

    setTimeout(function () {
      // bgDiv.style.transform = "scale(1)";
      bgDiv.style.transform = "translate(0,0)";
      div.style.transformOrigin = "-" + middleX+ "% -"+middleY+"%";
      div.style.transform = "scale(1)"+"translate3d(-"+posArray[present].left+"%,-"+posArray[present].top+"%,0)";
      // div.style.left = "-" + posArray[present].left + "%";
      // div.style.top = "-" + posArray[present].top + "%";
    }, 450);
  }

  return {
    next:this.getNext,
    last:this.last
  };
})();
