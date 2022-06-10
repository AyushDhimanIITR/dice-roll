var maths = 1 + Math.floor(Math.random() * 6);
// alert(maths);


// document.getElementById("result").innerHTML = (maths);

document.getElementById("play").addEventListener("click", diceRoll);

function diceRoll(){
    document.getElementById("result").innerHTML = (maths);
}