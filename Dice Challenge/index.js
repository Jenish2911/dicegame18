var one = Math.random();
one = Math.floor(one*6) + 1;

var randomImg1 = "dice" + one + ".png";
var imgSource1 = "Images/" + randomImg1;

document.querySelectorAll("img")[0].setAttribute("src" , imgSource1);

var two = Math.random();
two = Math.floor(two*6) + 1;

var randomImg2 = "dice" + two + ".png";
var imgSource2 = "Images/" + randomImg2;

document.querySelectorAll("img")[1].setAttribute("src" , imgSource2);

if(one>two)
    document.getElementById("win").innerHTML = "🚩Player 1 wins🚩";
else if(two>one)
    document.getElementById("win").innerHTML = "🚩Player 2 wins🚩";
else
    document.getElementById("win").innerHTML = "🚩Draw🚩";