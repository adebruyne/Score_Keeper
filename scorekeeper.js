var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click", function(){
    if(!gameOver){   //if gameover is not False
        p1Score++;      //add one
        if(p1Score === winningScore){ //if player one score  = 5
            p1Display.classList.add("winner"); //change class to winner
            gameOver = true;  //game over   
        }
        p1Display.textContent = p1Score;   //p1score gets changed       
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
      p2Score++;
      if(p2Score === winningScore){
          p2Display.classList.add("winner");
          gameOver = true;
      }
      p2Display.textContent = p2Score;
    }
});


resetButton.addEventListener("click", function(){
    reset();
});


function reset(){
   p1Score = 0;
   p2Score = 0;
   p1Display.textContent = 0;
   p2Display.textContent = 0;
   p1Display.classList.remove("winner");
   p2Display.classList.remove("winner");
   gameOver = false;
}




numInput.addEventListener("change", function(){  //anytime the value changes
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value); //turns this into a number and updates winning score
    reset();
})