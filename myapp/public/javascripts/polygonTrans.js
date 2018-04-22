var position = function(x,y){
  this.left = x;
  this.top = y;
}

var p1 = new position(20,10);
var p2 = new position(200,55);
var p3 = new position(100,80);
var p4 = new position(340,10);
var p5 = new position(380,100);
var p6 = new position(480,10);

var polygonPos = (function(){
  var n = 1;
  var l = 0;
  this.div = document.getElementById("transl");
  this.present = 0;
  this.last = null;
  this.next = 1;
  this.posArray = [p1,p2,p3,p4,p5,p6];

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
    // var bgDiv = document.getElementById("bg");
    // bgDiv.style.transform = "translate(-51%,-55%)";
    if(isN){

      var middleX = (posArray[present].left+posArray[last].left)/2;
      var middleY = (posArray[present].top+posArray[last].top)/2;
      div.style.transformOrigin = (posArray[last].left/6+8.35)+ "%"+(posArray[last].top/2+25)+"%";

    }else{
      var middleX = (posArray[present].left+posArray[next].left)/2;
      var middleY = (posArray[present].top+posArray[next].top)/2;
      div.style.transformOrigin = (posArray[next].left/6+8.35)+ "%"+(posArray[next].top/2+25)+"%";
    }
    // div.style.width = "450%";
    // div.style.height = "150%";
    div.style.transform = "scale(0.75)";
    // div.style.transformOrigin = (posArray[last].left/6+8.35)+ "%"+(posArray[last].top/2+25)+"%";
    // div.style.left = "-" + middleX + "%";
    // div.style.top = "-" + middleY + "%";
    //div.style.transform = "scale(0.8)";// + "translate3d(-" + middleX+ "%,-"+middleY+"%,0)";

    setTimeout(function () {
      // bgDiv.style.transform = "scale(1)";
      // div.style.transform = "scale(1)";
      // div.style.width = "600%";
      // div.style.height = "200%";
      // bgDiv.style.transform = "translate(0,0)";
      //div.style.transformOrigin = "-" + middleX+ "% -"+middleY+"%";
       //div.style.transform = "scale(1)";//+"translate3d(-"+posArray[present].left+"%,-"+posArray[present].top+"%,0)";
      div.style.left = "-" + middleX + "%";
      div.style.top = "-" + middleY + "%";
      setTimeout(function (){
        div.style.left = "-" + posArray[present].left + "%";
        div.style.top = "-" + posArray[present].top + "%";
        div.style.transform = "scale(1)";
      },450)
    }, 450);
  }

  return {
    next:this.getNext,
    last:this.last
  };
})();
