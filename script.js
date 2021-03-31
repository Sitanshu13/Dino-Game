var character = document.getElementById("character")
var block = document.getElementById("block")
var endScreen = document.getElementById("endScreen")
var score = document.getElementById("scr");
var t = true;

function jump() {
    if (character.classList != "animate"){
        character.classList.add("animate");
        var audio = new Audio('jumpingSound.mp3');
        audio.play();
        
    }
    setTimeout(function (){
        character.classList.remove("animate")
    },500)
}

var checkDead = setInterval(function (){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    score.innerText++
    console.log(score)
    if (blockLeft<52 && blockLeft>0 && characterTop>=105){
        block.style.animation = "none";
        character.classList.remove("animate")
        endScreen.style.display =  "flex";
        var audio1 = new Audio('finishedSound.mp3');
        audio1.play();
        alert("Score: " + score.innerText)
        window.location.reload();
    }
},10)