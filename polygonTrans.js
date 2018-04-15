var position = function(x,y){
  this.left = x;
  this.top = y;
}

var p1 = new position(0,0);
var p2 = new position(102,105);
var p3 = new position(202,135);

var polygonPos = (function(){
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
      transDiv();
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
      transDiv();
      if(isFirst()){
        last = null;
      }else{
        last = present-1;
      }
    }
  }

  this.transDiv = function(){
    var div = document.getElementById("transl");
    div.style.width = "600%";
    div.style.height = "200%";
    var middleX = (posArray[present].left+posArray[last].left)/3;
    var middleY = (posArray[present].top+posArray[last].top)/3;
    div.style.left = "-" + middleX + "%";
    div.style.top = "-" + middleY + "%";
    setTimeout(function () {
      div.style.width = "850%";
      div.style.height = "300%";
      div.style.left = "-" + posArray[present].left + "%";
      div.style.top = "-" + posArray[present].top + "%";
    }, 600);
  }

  return {
    next:this.getNext,
    last:this.last
  };
})();
