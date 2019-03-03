var qry = document.querySelectorAll(".drum");
var numberOfDrumButtons = qry.length;

for(var i=0; i<numberOfDrumButtons; i++) {
    qry[i].addEventListener("click", function() {
      this.style.color = "#fff";
  });
}


// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
