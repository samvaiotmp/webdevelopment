var randomNumber1 = Math.random()*6+1;
randomNumber1 = Math.floor(randomNumber1);
var randomNumber2 = Math.random()*6+1;
randomNumber2 = Math.floor(randomNumber2);

var img1 = "images/dice"+randomNumber1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", img1);

var img2 = "images/dice"+randomNumber2+".png";
var imgTag2 = document.querySelectorAll("img")[1];
imgTag2.setAttribute('src', img2);

var docH1 = document.querySelectorAll("h1")[0]
if (randomNumber1 > randomNumber2) {
    docH1.innerHTML = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
    docH1.innerHTML = "Player 2 Wins";
} else {
    docH1.innerHTML = "Its a Draw";
}
